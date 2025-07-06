import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("✅ Login successful");
    } catch (error) {
      alert("❌ Login failed: " + error.message);
    }
  };

  // 👇 Temporary Signup Function
  const handleFakeSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("✅ User registered successfully!");
    } catch (error) {
      alert("❌ Signup failed: " + error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4">Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>

        {/* 🔐 Temporary Button - for testing only */}
        <button
          type="button"
          onClick={handleFakeSignup}
          className="w-full mt-2 text-sm text-gray-400 underline hover:text-gray-600"
        >
          Don't have an account? Click here to register
        </button>
      </form>
    </div>
  );
};

export default Login;
