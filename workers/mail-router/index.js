// Abundant Air mail router.
// Cloudflare Email Routing forwards to exactly ONE destination per rule
// (API rejects more: "forward action must contain exactly one destination"),
// so fan-out to multiple people has to happen here.
//
// To add or remove a recipient: edit ROUTES, then `npx wrangler deploy`.
// Every address listed must be a VERIFIED destination in Cloudflare
// (Email Routing > Destination addresses) or its forward fails.

const CARLOS = "13.csilva@gmail.com";
const JASMIN = "jasminlua05@icloud.com";
const XAVIER = "sirxiii@gmail.com";

const ROUTES = {
  "carlos@abundantairac.com": [CARLOS, JASMIN],
  "office@abundantairac.com": [XAVIER, JASMIN],
  "leads@abundantairac.com": [CARLOS, JASMIN, XAVIER],
};

const FALLBACK = [CARLOS];

export default {
  async email(message) {
    const targets = ROUTES[message.to.toLowerCase()] ?? FALLBACK;

    // allSettled, not all: one unverified or bouncing address must not stop
    // delivery to everyone else on the list.
    const results = await Promise.allSettled(
      targets.map((addr) => message.forward(addr)),
    );

    const failed = results
      .map((r, i) => (r.status === "rejected" ? targets[i] : null))
      .filter(Boolean);

    if (failed.length === targets.length) {
      message.setReject("Unable to deliver to any configured recipient");
      return;
    }
    if (failed.length) {
      console.log(
        `partial delivery for ${message.to}; failed: ${failed.join(", ")}`,
      );
    }
  },
};
