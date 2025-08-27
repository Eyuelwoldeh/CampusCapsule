import { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    // Here you could send to an API or Google Form
    console.log("Beta tester signup:", email);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-800 text-white">
      <div className="text-center max-w-xl p-6">
        <h1 className="text-5xl font-bold mb-4">Campus Capsule</h1>
        <p className="text-lg mb-6">
          A new way to share and discover campus life.  
          Stay tuned — we're launching soon!
        </p>

        <div className="grid gap-3 text-left mb-8">
          <p>✨ Share campus stories and events</p>
          <p>👥 Connect with classmates</p>
          <p>📅 Never miss important updates</p>
        </div>

        {submitted ? (
          <p className="text-green-300 text-lg font-semibold">
            ✅ Thanks for signing up! We'll be in touch.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex justify-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-3 py-2 rounded-md text-black w-64"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 bg-yellow-400 text-black rounded-md font-semibold hover:bg-yellow-300 transition"
            >
              Join Beta
            </button>
          </form>
        )}
      </div>
    </div>
  );
}