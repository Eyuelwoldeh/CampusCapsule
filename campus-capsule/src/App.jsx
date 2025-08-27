import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function App() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    
    emailjs.send(
      "service_nrln1rd",    
      "template_mxbhadg",    
      { email: email }, 
      "C99uWFpEL8_Cjb0CK"      
    )
    .then(() => {
      console.log("Email sent successfully!");
      setSubmitted(true);
    })
    .catch((err) => console.error("Error:", err));
    console.log("Beta tester signup:", email);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="p-6 flex justify-between items-center backdrop-blur-sm bg-white/5 border-b border-white/10">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CC</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Campus Capsule
            </span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <button className="text-white/80 hover:text-white transition-colors">Features</button>
            <button className="text-white/80 hover:text-white transition-colors">About</button>
            <button className="text-white/80 hover:text-white transition-colors">Contact</button>
          </nav>
        </header>

        {/* Main content */}
        <main className="flex-1 flex items-center justify-center px-6 py-12">
          <div className="text-center max-w-4xl">
            {/* Hero section */}
            <div className="mb-12">
              <div className="mb-6">
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4 border border-white/20">
                  <span className="text-sm font-medium text-yellow-300">🔒 Digital Time Capsule</span>
                </div>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-tight">
                Campus Capsule
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Lock it Once. Live it Twice.
              </p>
            </div>

            {/* Feature cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-semibold mb-2">Memory Lockbox</h3>
                <p className="text-white/80">Save photos, videos, notes, and moments that unlock at your chosen future date</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="text-xl font-semibold mb-2">Group Capsules</h3>
                <p className="text-white/80">Create shared time capsules with friends, clubs, or your entire graduating class</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-semibold mb-2">Milestone Unlocks</h3>
                <p className="text-white/80">Set capsules to open on graduation, reunions, or any meaningful date you choose</p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to preserve your college journey?
              </h2>
              <p className="text-white/90 mb-6">
                Join students who are already creating digital time capsules for their future selves.
              </p>

              {submitted ? (
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-4">
                    <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-green-400 mb-2">Welcome to the future!</h3>
                  <p className="text-white/80">
                    Thanks for signing up! We'll send you exclusive updates and early access.
                  </p>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your college email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                    onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}
                  />
                  <button
                    onClick={handleSubmit}
                    className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-xl font-semibold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Join Beta
                  </button>
                </div>
              )}

              {!submitted && (
                <p className="text-xs text-white/60 mt-3">
                  No spam, ever. Unsubscribe anytime.
                </p>
              )}
            </div>

            {/* Social proof */}
            <div className="mt-12">
              <p className="text-white/60 mb-6">College flies by faster than you think</p>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 max-w-3xl mx-auto">
                <blockquote className="text-lg italic text-white/90 mb-4">
                  "I wish I could go back and tell my freshman self to write more things down. 
                  Those little moments you think you'll never forget? You forget them."
                </blockquote>
                <cite className="text-white/60">— Every college graduate, ever</cite>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="p-6 text-center text-white/60 backdrop-blur-sm bg-white/5 border-t border-white/10">
          <p>&copy; 2025 Campus Capsule. Made with ❤️ for students, by students.</p>
        </footer>
      </div>
    </div>
  );
}