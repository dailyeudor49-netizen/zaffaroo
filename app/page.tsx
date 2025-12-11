import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero - Playful/Fun */}
      <section className="bg-gradient-to-br from-fuchsia-500 via-purple-500 to-pink-500 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center">
            <div className="inline-block animate-bounce mb-6">
              <span className="text-6xl">🦘</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              Tech That Makes<br />
              You Go <span className="text-yellow-300">WOW!</span>
            </h1>
            <p className="text-xl text-fuchsia-100 mb-10 max-w-2xl mx-auto">
              Wholesale electronics that spark joy! Fun products, serious business.
              Austrian quality meets playful innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/products" className="px-10 py-4 bg-yellow-400 text-purple-900 font-black text-lg rounded-full hover:bg-yellow-300 shadow-lg transform hover:scale-105 transition-all">
                Let&apos;s Go Shopping! 🛒
              </Link>
              <Link href="/contact" className="px-10 py-4 bg-white/20 backdrop-blur text-white font-bold text-lg rounded-full hover:bg-white/30 transition-colors">
                Say Hello! 👋
              </Link>
            </div>
          </div>
        </div>
        {/* Floating Icons */}
        <div className="absolute top-20 left-10 text-4xl animate-pulse opacity-50 hidden md:block">🎧</div>
        <div className="absolute top-40 right-20 text-4xl animate-pulse opacity-50 hidden md:block">📱</div>
        <div className="absolute bottom-20 left-1/4 text-4xl animate-pulse opacity-50 hidden md:block">⌚</div>
      </section>

      {/* Fun Stats */}
      <section className="py-12 bg-yellow-400">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { emoji: "🎉", value: "2,500+", label: "Cool Products" },
              { emoji: "😊", value: "400+", label: "Happy Partners" },
              { emoji: "⚡", value: "24h", label: "Super Fast Shipping" },
              { emoji: "🏆", value: "7 Years", label: "Making Magic" },
            ].map((s, i) => (
              <div key={i} className="bg-yellow-300 p-4 rounded-2xl">
                <div className="text-3xl mb-1">{s.emoji}</div>
                <div className="text-2xl font-black text-purple-900">{s.value}</div>
                <div className="text-sm text-purple-700">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories - Fun Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-center text-gray-900 mb-4">Pick Your Favorites! 🎯</h2>
          <p className="text-gray-600 text-center mb-12">Something for everyone - find your perfect match</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { emoji: "🔊", name: "Boom Boxes", desc: "Make some noise!", color: "bg-pink-100 hover:bg-pink-200" },
              { emoji: "🎧", name: "Head Candy", desc: "Music to your ears", color: "bg-purple-100 hover:bg-purple-200" },
              { emoji: "🔋", name: "Power Up!", desc: "Never run out", color: "bg-blue-100 hover:bg-blue-200" },
              { emoji: "⌚", name: "Wrist Tech", desc: "Time to shine", color: "bg-green-100 hover:bg-green-200" },
              { emoji: "📱", name: "Phone Stuff", desc: "Protect & connect", color: "bg-yellow-100 hover:bg-yellow-200" },
              { emoji: "🔌", name: "Plug & Play", desc: "Stay connected", color: "bg-orange-100 hover:bg-orange-200" },
            ].map((c, i) => (
              <Link key={i} href="/products" className={`${c.color} p-6 rounded-2xl text-center transition-all transform hover:scale-105`}>
                <div className="text-5xl mb-3">{c.emoji}</div>
                <div className="font-bold text-gray-900">{c.name}</div>
                <div className="text-sm text-gray-600">{c.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us - Fun Features */}
      <section className="py-16 bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-center mb-12">Why You&apos;ll Love Us 💜</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { emoji: "🚀", title: "Lightning Delivery", desc: "24-48h across Europe. Zoom zoom!" },
              { emoji: "💰", title: "Pay Later", desc: "Pay when you receive. No stress!" },
              { emoji: "📦", title: "Bulk = Big Savings", desc: "The more you buy, the more you save" },
              { emoji: "✅", title: "Quality Checked", desc: "We test everything. Pinky promise!" },
            ].map((f, i) => (
              <div key={i} className="bg-white/10 backdrop-blur p-6 rounded-2xl text-center">
                <div className="text-5xl mb-4">{f.emoji}</div>
                <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-fuchsia-100 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fun CTA */}
      <section className="py-20 bg-yellow-400">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="text-6xl mb-6">🎈</div>
          <h2 className="text-4xl font-black text-purple-900 mb-4">Ready to Have Fun?</h2>
          <p className="text-purple-700 text-lg mb-10">
            Join 400+ partners who made the smart (and fun!) choice.
            No minimum orders for newbies!
          </p>
          <Link href="/contact" className="inline-block px-12 py-5 bg-purple-600 text-white font-black text-xl rounded-full hover:bg-purple-700 shadow-lg transform hover:scale-105 transition-all">
            Let&apos;s Do This! 🚀
          </Link>
          <p className="text-purple-600 mt-8">
            hello@zaffaroo.at | We speak German too! 🇦🇹
          </p>
        </div>
      </section>
    </div>
  );
}
