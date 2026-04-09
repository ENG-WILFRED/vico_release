import Countdown from "@/components/Countdown";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-50 via-white to-brand-50">
      {/* Navigation */}
      <nav className="border-b border-brand-200 bg-white/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-400 to-brand-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🎾</span>
              </div>
              <span className="text-2xl font-bold text-brand-700">VICO</span>
            </div>
            <button className="px-6 py-2 bg-brand-500 text-white rounded-full font-medium hover:bg-brand-600 transition-colors">
              Sign Up for Updates
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 sm:py-24 lg:py-32 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-900 mb-6">
            The Ultimate Tennis Community Platform
          </h1>
          <p className="text-lg sm:text-xl text-brand-700 max-w-2xl mx-auto mb-8">
            Connect with players, coaches, referees, and organizations. Manage tournaments, bookings, training, and more—all in one powerful ecosystem.
          </p>
        </div>

        {/* Countdown */}
        <Countdown />
      </section>

      {/* Features Section */}
      <section className="bg-brand-900 text-white py-16 sm:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            Powerful Features for Everyone
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Player Features */}
            <div className="bg-brand-800/50 backdrop-blur-sm rounded-xl p-6 border border-brand-700/30 hover:border-brand-500/50 transition-colors">
              <div className="w-12 h-12 bg-brand-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">👤</span>
              </div>
              <h3 className="text-xl font-bold mb-3">For Players</h3>
              <ul className="space-y-2 text-brand-100 text-sm">
                <li>• Book courts with real-time availability</li>
                <li>• Join tournaments & competitions</li>
                <li>• Track rankings and statistics</li>
                <li>• Connect with coaches and community</li>
                <li>• Earn achievements and badges</li>
              </ul>
            </div>

            {/* Coach Features */}
            <div className="bg-brand-800/50 backdrop-blur-sm rounded-xl p-6 border border-brand-700/30 hover:border-brand-500/50 transition-colors">
              <div className="w-12 h-12 bg-brand-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold mb-3">For Coaches</h3>
              <ul className="space-y-2 text-brand-100 text-sm">
                <li>• Manage coaching sessions & students</li>
                <li>• Track player performance</li>
                <li>• Schedule availability</li>
                <li>• Manage earnings and commissions</li>
                <li>• Build your ratings</li>
              </ul>
            </div>

            {/* Organization Features */}
            <div className="bg-brand-800/50 backdrop-blur-sm rounded-xl p-6 border border-brand-700/30 hover:border-brand-500/50 transition-colors">
              <div className="w-12 h-12 bg-brand-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">🏢</span>
              </div>
              <h3 className="text-xl font-bold mb-3">For Organizations</h3>
              <ul className="space-y-2 text-brand-100 text-sm">
                <li>• Manage courts & bookings</li>
                <li>• Host tournaments with live brackets</li>
                <li>• Financial tracking & reporting</li>
                <li>• Member management</li>
                <li>• Analytics & insights</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 sm:py-24 lg:py-32 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-brand-900 text-center mb-16">
          What's Inside
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard icon="🎫" title="Tournaments" description="Create and manage tournaments with automatic bracket generation" />
          <FeatureCard icon="📅" title="Booking System" description="Real-time court availability with dynamic pricing" />
          <FeatureCard icon="💬" title="Live Chat" description="Connect with community via real-time messaging" />
          <FeatureCard icon="💰" title="Payments" description="Multiple payment options: M-Pesa, PayPal, Stripe" />
          <FeatureCard icon="📊" title="Analytics" description="Track performance and revenue insights" />
          <FeatureCard icon="🏆" title="Rankings" description="Weekly rankings and rating system" />
          <FeatureCard icon="👥" title="Community" description="Activity feeds and member directories" />
          <FeatureCard icon="📱" title="Multi-Platform" description="Web and mobile apps for iOS/Android" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-brand-600 to-brand-700 text-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Transform Tennis?
          </h2>
          <p className="text-lg text-brand-100 mb-8">
            Join thousands of players, coaches, and organizations using VICO to manage their tennis community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-brand-600 rounded-full font-bold hover:bg-brand-50 transition-colors">
              Notify Me at Launch
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="bg-brand-50 rounded-2xl p-8 sm:p-12 border-2 border-brand-200">
          <h3 className="text-2xl sm:text-3xl font-bold text-brand-900 mb-4 text-center">
            Get Updates
          </h3>
          <p className="text-brand-700 text-center mb-8">
            Subscribe to receive announcements about VICO's launch and exclusive early access offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-brand-500 text-white rounded-lg font-semibold hover:bg-brand-600 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-brand-200 bg-brand-50 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🎾</span>
                <span className="text-xl font-bold text-brand-700">VICO</span>
              </div>
              <p className="text-brand-600 text-sm">
                The complete tennis community platform
              </p>
            </div>

            <div>
              <h4 className="font-bold text-brand-900 mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-brand-700">
                <li><a href="#" className="hover:text-brand-600">Features</a></li>
                <li><a href="#" className="hover:text-brand-600">Pricing</a></li>
                <li><a href="#" className="hover:text-brand-600">Security</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-brand-900 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-brand-700">
                <li><a href="#" className="hover:text-brand-600">About</a></li>
                <li><a href="#" className="hover:text-brand-600">Blog</a></li>
                <li><a href="#" className="hover:text-brand-600">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-brand-900 mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-brand-700">
                <li><a href="#" className="hover:text-brand-600">Privacy</a></li>
                <li><a href="#" className="hover:text-brand-600">Terms</a></li>
                <li><a href="#" className="hover:text-brand-600">Cookies</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-brand-200 pt-8 text-center text-sm text-brand-600">
            <p>&copy; 2026 VICO. All rights reserved. Launching April 17, 2026.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="text-center group">
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-brand-900 mb-2">{title}</h3>
      <p className="text-brand-700 text-sm">{description}</p>
    </div>
  );
}
