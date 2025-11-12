import EmailSignup from './components/EmailSignup';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="relative z-10 w-full max-w-6xl mx-auto text-center">
          {/* Logo/Brand */}
          <div className="mb-8">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              CASSA
            </h1>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
              <span className="text-sm font-medium text-purple-300">Coming Soon</span>
            </div>
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Prediction Markets for<br />DeFi Insurance
          </h2>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-4 font-light">
            Cassa makes insurance <span className="text-purple-400 font-semibold">liquid</span>,{" "}
            <span className="text-pink-400 font-semibold">composable</span>, and{" "}
            <span className="text-blue-400 font-semibold">degen</span>
          </p>

          {/* Value Prop */}
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mt-8">
            Replace complex insurance vaults with speculative insurance markets.
          </p>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
            Insurance is <span className="text-red-400">broken</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg border border-gray-800 bg-gray-900/50">
              <h3 className="text-xl font-semibold mb-3 text-red-400">Complex & Illiquid</h3>
              <p className="text-gray-400">Decentralized insurance today is tangled in regulation, mimicking legacy underwriters with clunky vault structures.</p>
            </div>
            <div className="p-6 rounded-lg border border-gray-800 bg-gray-900/50">
              <h3 className="text-xl font-semibold mb-3 text-red-400">Boring for DeFi Users</h3>
              <p className="text-gray-400">DeFi degens skip over boring and complex insurance vault products that don't match their trading mindset.</p>
            </div>
            <div className="p-6 rounded-lg border border-gray-800 bg-gray-900/50">
              <h3 className="text-xl font-semibold mb-3 text-red-400">Opaque Risk Pricing</h3>
              <p className="text-gray-400">The industry lacks real risk odds when it comes to DeFi security, making it hard to assess protocol safety.</p>
            </div>
            <div className="p-6 rounded-lg border border-gray-800 bg-gray-900/50">
              <h3 className="text-xl font-semibold mb-3 text-red-400">No Credibility Signals</h3>
              <p className="text-gray-400">Protocols and audit firms can't demonstrate their confidence in security through transparent, on-chain signals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
            Insurance as a <span className="text-purple-400">Prediction Market</span>
          </h2>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Instead of buying "cover", users simply bet on whether a protocol will get hacked. 
            Markets reward those who predict security outcomes correctly, while protocols and audit 
            firms gain credibility through on-chain odds.
          </p>

          {/* Visual Comparison */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 rounded-xl border border-red-500/20 bg-red-500/5">
              <h3 className="text-2xl font-bold mb-4 text-red-400">Traditional Insurance</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✗</span>
                  <span>Complex policies and coverage options</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✗</span>
                  <span>Illiquid positions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✗</span>
                  <span>Manual claims process</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✗</span>
                  <span>Opaque risk pricing</span>
                </li>
              </ul>
            </div>
            <div className="p-8 rounded-xl border border-purple-500/20 bg-purple-500/5">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Cassa Prediction Markets</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">✓</span>
                  <span>Simple binary markets: "Will protocol X get hacked by date Y?"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">✓</span>
                  <span>Liquid and composable positions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">✓</span>
                  <span>Transparent, market-driven risk pricing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">✓</span>
                  <span>On-chain credibility signals</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-2xl font-bold mb-6 mx-auto">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4">Choose a Protocol</h3>
              <p className="text-gray-400">Select any DeFi protocol you want to bet on or hedge against</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-blue-500 flex items-center justify-center text-2xl font-bold mb-6 mx-auto">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4">Bet on Security Outcome</h3>
              <p className="text-gray-400">Place your position on whether a vulnerability will be exploited by a specific deadline</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-2xl font-bold mb-6 mx-auto">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4">Get Rewarded</h3>
              <p className="text-gray-400">Markets reward those who predict security outcomes correctly</p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition for Protocols */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            For <span className="text-purple-400">Protocols</span> &{" "}
            <span className="text-blue-400">Audit Firms</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Gain credibility through on-chain odds. Show the market you believe in your security 
            by betting on the safety of your protocols. Let prediction markets become your 
            transparent signal of confidence.
          </p>
          <div className="p-6 rounded-lg border border-purple-500/20 bg-purple-500/5 inline-block">
            <p className="text-lg text-gray-300">
              "Will a vulnerability be exploited in X's contracts by Dec 31, 2027?"
            </p>
          </div>
        </div>
      </section>

      {/* Email Signup Section */}
      <EmailSignup />

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-900">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-gray-400">
            <p className="font-semibold text-white mb-1">Cassa Finance</p>
            <p className="text-sm">Prediction markets for DeFi insurance</p>
          </div>
          <div className="flex gap-6">
            <a
              href="https://x.com/cassafinance"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              Twitter/X
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
