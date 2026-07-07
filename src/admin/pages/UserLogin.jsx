import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiEye, FiEyeOff, FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/user/dashboard");
    } catch (err) {
      setError("Invalid email or password");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050816] text-white relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-orange-500/20 blur-[140px] rounded-full top-[-120px] left-[-120px]" />
      <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-[140px] rounded-full bottom-[-120px] right-[-120px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md p-6"
      >
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8">

          {/* TITLE */}
          <h1 className="text-3xl font-bold text-amber-400 text-center">
            Welcome Back
          </h1>
          <p className="text-slate-400 text-center text-sm mt-2">
            Login to continue your spiritual journey
          </p>

          {/* ERROR */}
          {error && (
            <div className="bg-red-500/10 border border-red-500 text-red-400 p-2 rounded-lg mt-4 text-sm">
              {error}
            </div>
          )}

          {/* FORM */}
          <form onSubmit={handleLogin} className="space-y-4 mt-6">

            {/* EMAIL */}
            <div className="relative">
              <FiMail className="absolute top-3 left-3 text-slate-400" />
              <input
                type="email"
                placeholder="Email"
                className="w-full pl-10 p-3 bg-black/30 border border-white/10 rounded-xl outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* PASSWORD */}
            <div className="relative">
              <FiLock className="absolute top-3 left-3 text-slate-400" />
              <input
                type={show ? "text" : "password"}
                placeholder="Password"
                className="w-full pl-10 p-3 bg-black/30 border border-white/10 rounded-xl outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute right-3 top-3 text-slate-400"
              >
                {show ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-orange-500 to-amber-400 text-black font-semibold py-3 rounded-xl hover:scale-[1.02] transition"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

        <Link to="/register" className="text-amber-400 text-sm">
  New user? Create account
</Link>

        </div>
      </motion.div>
    </div>
  );
};

export default UserLogin;