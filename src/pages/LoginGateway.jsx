// import { useNavigate } from "react-router-dom";

// const LoginGateway = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-black text-white">
//       <div className="w-[90%] max-w-md space-y-4">

//         <h1 className="text-3xl font-bold text-center mb-6">
//           🔐 PujaConnect Login
//         </h1>

//         <button
//           onClick={() => navigate("/user/login")}
//           className="w-full bg-purple-600 p-3 rounded"
//         >
//           👤 User Login
//         </button>

//         <button
//           onClick={() => navigate("/pandit/login")}
//           className="w-full bg-orange-600 p-3 rounded"
//         >
//           👳 Pandit Login
//         </button>

//         <button
//           onClick={() => navigate("/admin/login")}
//           className="w-full bg-red-600 p-3 rounded"
//         >
//           👑 Admin Login
//         </button>

//       </div>
//     </div>
//   );
// };

// export default LoginGateway;







import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiUser, FiShield, FiUserCheck } from "react-icons/fi";

const LoginGateway = () => {
  const navigate = useNavigate();

  const roles = [
    {
      title: "User",
      desc: "Book pujas, explore pandits & rituals",
      icon: <FiUser />,
      color: "from-purple-600 to-indigo-500",
      path: "/user/login",
    },
    {
      title: "Pandit",
      desc: "Manage bookings & availability",
      icon: <FiUserCheck />,
      color: "from-orange-500 to-yellow-500",
      path: "/pandit/login",
    },
    {
      title: "Admin",
      desc: "Control platform & manage system",
      icon: <FiShield />,
      color: "from-red-600 to-amber-500",
      path: "/admin/login",
    },
  ];

  return (
    <div className="min-h-screen pt-28 flex items-center justify-center relative overflow-hidden bg-[#050816] text-white px-4">

      {/* Background glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px] top-[-120px] left-[-120px]" />
      <div className="absolute w-[500px] h-[500px] bg-red-500/20 rounded-full blur-[120px] bottom-[-120px] right-[-120px]" />

      <div className="w-full max-w-2xl relative z-10 text-center">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold"
        >
          🔐 PujaConnect Login Portal
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 mt-2 mb-10"
        >
          Choose your role to continue
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {roles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate(role.path)}
              className="cursor-pointer bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-xl transition"
            >

              {/* Icon */}
              <div
                className={`w-12 h-12 mx-auto flex items-center justify-center text-xl rounded-xl bg-gradient-to-r ${role.color}`}
              >
                {role.icon}
              </div>

              {/* Title */}
              <h2 className="text-xl font-semibold mt-4">
                {role.title}
              </h2>

              {/* Description */}
              <p className="text-sm text-gray-400 mt-2">
                {role.desc}
              </p>

              {/* CTA */}
              <div className="mt-5 text-sm text-amber-400">
                Click to continue →
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default LoginGateway;