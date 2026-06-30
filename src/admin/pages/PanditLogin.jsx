// import { useState } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../firebase/firebase";
// import { useNavigate } from "react-router-dom";

// const PanditLogin = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       await signInWithEmailAndPassword(auth, email, password);

//       // after login → go to dashboard
//       navigate("/pandit/dashboard");
//     } catch (error) {
//       alert(error.message);
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-black text-white">
//       <form
//         onSubmit={handleLogin}
//         className="bg-gray-900 p-8 rounded-xl w-[90%] max-w-md"
//       >
//         <h1 className="text-2xl font-bold mb-6 text-center">
//           👳 Pandit Login
//         </h1>

//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full p-3 mb-4 bg-black border border-gray-700 rounded"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full p-3 mb-6 bg-black border border-gray-700 rounded"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button
//           type="submit"
//           className="w-full bg-purple-600 py-3 rounded font-semibold"
//         >
//           {loading ? "Logging in..." : "Login"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default PanditLogin;




import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiEye, FiEyeOff } from "react-icons/fi";

const PanditLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);

      navigate("/pandit/dashboard");
    } catch (error) {
      setError("Invalid credentials. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#050816] text-white px-4">

      {/* Background glow */}
      <div className="absolute w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[120px] top-[-120px] left-[-120px]" />
      <div className="absolute w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] bottom-[-120px] right-[-120px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md relative z-10"
      >

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">

          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-orange-400">
              👳 Pandit Portal
            </h1>
            <p className="text-gray-400 text-sm mt-2">
              Manage your bookings & availability
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-3 rounded-lg text-sm mb-4">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4">

            {/* Email */}
            <div>
              <label className="text-sm text-gray-400">Email</label>
              <input
                type="email"
                placeholder="pandit@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-1 p-3 bg-black/40 border border-white/10 rounded-lg outline-none focus:border-orange-400 transition"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label className="text-sm text-gray-400">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-1 p-3 bg-black/40 border border-white/10 rounded-lg outline-none focus:border-orange-400 transition"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-9 text-gray-400 hover:text-white"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-orange-500 to-amber-400 py-3 rounded-lg font-semibold shadow-lg hover:shadow-orange-500/30 transition"
            >
              {loading ? "Logging in..." : "Login as Pandit"}
            </motion.button>

          </form>

          {/* Footer */}
          <p className="text-center text-xs text-gray-500 mt-6">
            Secure access for verified pandits only
          </p>

        </div>
      </motion.div>
    </div>
  );
};

export default PanditLogin;