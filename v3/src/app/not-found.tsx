import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="en">
      <body style={{ fontFamily: "sans-serif", background: "#f8fafc", margin: 0 }}>
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2rem", textAlign: "center" }}>
          <div style={{ background: "#1B365D", borderRadius: "50%", width: 80, height: 80, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
            <span style={{ color: "#E8A84C", fontSize: "2.5rem", fontWeight: "bold" }}>?</span>
          </div>
          <h1 style={{ color: "#1B365D", fontSize: "2rem", marginBottom: "0.5rem" }}>
            Page not found
          </h1>
          <p style={{ color: "#64748b", marginBottom: "2rem", maxWidth: 500 }}>
            We couldn&apos;t find the page you were looking for. It may have moved or the address may be incorrect.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
            <Link
              href="/"
              style={{ background: "#E8A84C", color: "#fff", padding: "0.75rem 1.5rem", borderRadius: "0.5rem", fontWeight: "bold", textDecoration: "none" }}
            >
              Back to Homepage
            </Link>
            <Link
              href="/contact"
              style={{ border: "2px solid #1B365D", color: "#1B365D", padding: "0.75rem 1.5rem", borderRadius: "0.5rem", fontWeight: "bold", textDecoration: "none" }}
            >
              Book a Free Discovery Call
            </Link>
          </div>
          <div style={{ marginTop: "3rem", color: "#64748b", fontSize: "0.875rem" }}>
            <p>Or try one of these pages:</p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center", marginTop: "0.75rem" }}>
              <Link href="/about" style={{ color: "#1B365D" }}>About</Link>
              <Link href="/how-it-works" style={{ color: "#1B365D" }}>How It Works</Link>
              <Link href="/ndis-speech-therapy-sydney-nsw" style={{ color: "#1B365D" }}>NDIS Funding</Link>
              <Link href="/speech-therapy-autism-sydney-nsw" style={{ color: "#1B365D" }}>Autism</Link>
              <Link href="/refer-a-client" style={{ color: "#1B365D" }}>Refer a Client</Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
