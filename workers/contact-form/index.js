// Abundant Air website contact form handler.
// Replaces Web3Forms. Runs at abundantairac.com/api/contact (same-origin, so
// no CORS needed). Sends via the Cloudflare send_email binding, which is free
// when every recipient is a VERIFIED destination address on the account.
//
// Pages Functions cannot use the send_email binding, which is why this is a
// standalone Worker on a route rather than functions/api/contact.js.

const RECIPIENTS = [
  "13.csilva@gmail.com", // Carlos
  "jasminlua05@icloud.com", // Jasmin
  "sirxiii@gmail.com", // Xavier
];

const FROM = { email: "website@abundantairac.com", name: "Abundant Air Website" };

const ALLOWED_ORIGINS = [
  "https://abundantairac.com",
  "https://www.abundantairac.com",
];

const json = (obj, status = 200) =>
  new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json" },
  });

const clean = (v, max = 2000) =>
  String(v ?? "")
    .replace(/[\u0000-\u001f\u007f]/g, " ")
    .trim()
    .slice(0, max);

export default {
  async fetch(request, env) {
    if (request.method !== "POST") {
      return json({ success: false, error: "Method not allowed" }, 405);
    }

    const origin = request.headers.get("Origin");
    if (origin && !ALLOWED_ORIGINS.includes(origin)) {
      return json({ success: false, error: "Bad origin" }, 403);
    }

    let data;
    try {
      data = await request.json();
    } catch {
      return json({ success: false, error: "Bad request" }, 400);
    }

    // Honeypot. Bots tick it, humans never see it. Return success so the bot
    // does not learn it was caught, but send nothing.
    if (clean(data.botcheck)) return json({ success: true });

    const name = clean(data.name, 120);
    const phone = clean(data.phone, 40);
    if (!name || !phone) {
      return json({ success: false, error: "Name and phone are required" }, 400);
    }

    const city = clean(data.city, 80);
    const jobType = clean(data.job_type, 120);
    const message = clean(data.message, 4000);

    const lines = [
      `Name:  ${name}`,
      `Phone: ${phone}`,
      city ? `City:  ${city}` : null,
      jobType ? `Need:  ${jobType}` : null,
      "",
      message || "(no details given)",
    ].filter((l) => l !== null);

    const text = lines.join("\n");
    const subject = `New quote request: ${name}${city ? ` (${city})` : ""}`;

    // One send per recipient, not a single multi-recipient send: an
    // unverified or bouncing address must not block delivery to the others.
    const results = await Promise.allSettled(
      RECIPIENTS.map((to) =>
        env.EMAIL.send({ to: [to], from: FROM, subject, text }),
      ),
    );

    const failed = results
      .map((r, i) => (r.status === "rejected" ? RECIPIENTS[i] : null))
      .filter(Boolean);

    if (failed.length === RECIPIENTS.length) {
      console.log(`contact form: ALL sends failed for ${name}: ${text}`);
      return json({ success: false, error: "Could not send" }, 502);
    }
    if (failed.length) {
      console.log(`contact form: partial delivery, failed: ${failed.join(", ")}`);
    }
    return json({ success: true });
  },
};
