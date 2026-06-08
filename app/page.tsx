export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 flex flex-col gap-16">

      {/* Hero */}
      <section className="flex flex-col gap-6 text-center">
        <div className="inline-block mx-auto bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff]">
          For restaurants, salons &amp; contractors
        </div>
        <h1 className="text-4xl font-bold text-white leading-tight">
          Never Miss a Negative<br />
          <span className="text-[#58a6ff]">Google Review</span> Again
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto">
          Get instant SMS and email alerts the moment a customer leaves a review under 4 stars — so you can respond fast and protect your reputation.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Start Monitoring — $11/mo
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-[#8b949e]">
          <span>⭐ Real-time alerts</span>
          <span>📱 SMS + Email</span>
          <span>📝 Response templates</span>
          <span>🗺️ Multi-location</span>
        </div>
      </section>

      {/* Pricing */}
      <section className="flex flex-col gap-6 items-center">
        <h2 className="text-2xl font-bold text-white">Simple Pricing</h2>
        <div className="w-full max-w-sm bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 flex flex-col gap-5">
          <div className="flex items-end gap-2">
            <span className="text-4xl font-bold text-white">$11</span>
            <span className="text-[#8b949e] mb-1">/month</span>
          </div>
          <p className="text-[#8b949e] text-sm">Everything you need to protect your local business reputation.</p>
          <ul className="flex flex-col gap-3 text-sm">
            {[
              "Monitor up to 5 Google Business locations",
              "Instant SMS alerts for reviews under 4 stars",
              "Email alerts with full review details",
              "10 ready-to-use response templates",
              "Daily digest summary",
              "Cancel anytime"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-6 py-3 rounded-lg text-center transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-white text-center">FAQ</h2>
        <div className="flex flex-col gap-4">
          {[
            {
              q: "How quickly will I get alerted?",
              a: "Alerts are sent within minutes of a new review being posted. We poll your Google Business profile continuously so you never miss a critical review."
            },
            {
              q: "Do I need a Google API key?",
              a: "No. After signing up, you simply provide your Google Business profile URL. We handle all the monitoring on our end — no technical setup required."
            },
            {
              q: "Can I monitor multiple locations?",
              a: "Yes. Your plan includes up to 5 business locations. Perfect for restaurant groups, salon chains, or contractors with multiple service areas."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 flex flex-col gap-2">
              <h3 className="font-semibold text-white">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
