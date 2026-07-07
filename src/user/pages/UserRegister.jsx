import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiMail, FiLock, FiUser } from "react-icons/fi";

const UserRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await setDoc(doc(db, "users", userCred.user.uid), {
        uid: userCred.user.uid,
        name,
        email,
        createdAt: new Date().toISOString(),
      });

      navigate("/user/dashboard");
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050816] text-white">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md p-6"
      >

        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8">

          <h1 className="text-3xl font-bold text-amber-400 text-center">
            Create Account
          </h1>

          <p className="text-slate-400 text-center text-sm mt-2">
            Join PujaConnect and book pujas easily
          </p>

          {error && (
            <p className="text-red-400 text-sm mt-3">{error}</p>
          )}

          <form onSubmit={handleRegister} className="space-y-4 mt-6">

            {/* NAME */}
            <div className="relative">
              <FiUser className="absolute top-3 left-3 text-slate-400" />
              <input
                className="w-full pl-10 p-3 bg-black/30 border border-white/10 rounded-xl"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* EMAIL */}
            <div className="relative">
              <FiMail className="absolute top-3 left-3 text-slate-400" />
              <input
                type="email"
                className="w-full pl-10 p-3 bg-black/30 border border-white/10 rounded-xl"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* PASSWORD */}
            <div className="relative">
              <FiLock className="absolute top-3 left-3 text-slate-400" />
              <input
                type="password"
                className="w-full pl-10 p-3 bg-black/30 border border-white/10 rounded-xl"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-orange-500 to-amber-400 text-black font-bold py-3 rounded-xl"
            >
              {loading ? "Creating..." : "Create Account"}
            </button>

          </form>

          <p className="text-center text-sm text-slate-400 mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-amber-400">
              Login
            </Link>
          </p>

        </div>

      </motion.div>

    </div>
  );
};

export default UserRegister;