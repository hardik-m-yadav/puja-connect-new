// import { useEffect, useState } from "react";
// import { doc, getDoc, updateDoc } from "firebase/firestore";
// import { db, auth } from "../../firebase/firebase";
// import { motion } from "framer-motion";
// import {
//   FiUser,
//   FiSave,
//   FiMapPin,
//   FiPhone,
//   FiStar,
//   FiBriefcase,
//   FiActivity,
//   FiGlobe,
// } from "react-icons/fi";
// import PanditLayout from "../layout/PanditLayout";
// import toast from "react-hot-toast";

// const PanditProfile = () => {
//   const [loading, setLoading] = useState(true);

//   const [profile, setProfile] = useState(null);

//   const user = auth.currentUser;

//   // FETCH PROFILE
//   useEffect(() => {
//     const fetchProfile = async () => {
//       if (!user?.uid) return;

//       try {
//         const ref = doc(db, "pandits", user.uid);
//         const snap = await getDoc(ref);

//         if (snap.exists()) {
//           setProfile(snap.data());
//         }

//         setLoading(false);
//       } catch (err) {
//         console.log(err);
//         toast.error("Failed to load profile");
//       }
//     };

//     fetchProfile();
//   }, [user]);

//   const handleChange = (e) => {
//     setProfile({ ...profile, [e.target.name]: e.target.value });
//   };

//   // SAVE (only safe fields)
//   const saveProfile = async () => {
//     try {
//       await updateDoc(doc(db, "pandits", user.uid), {
//         name: profile.name,
//         phone: profile.phone,
//         city: profile.city,
//         languages: profile.languages,
//         experience: Number(profile.experience || 0),
//         specialization: profile.specialization,
//       });

//       toast.success("Profile updated successfully");
//     } catch (err) {
//       console.log(err);
//       toast.error("Update failed");
//     }
//   };

//   if (loading) {
//     return (
//       <PanditLayout>
//         <p className="text-white p-6">Loading profile...</p>
//       </PanditLayout>
//     );
//   }

//   return (
//     <PanditLayout>
//       <div className="max-w-6xl mx-auto space-y-8">

//         {/* HEADER */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//         >
//           <h1 className="text-3xl font-bold text-amber-400 flex items-center gap-2">
//             <FiUser /> My Profile
//           </h1>
//           <p className="text-slate-400 mt-2">
//             Manage your pandit account details
//           </p>
//         </motion.div>

//         {/* TOP STATS */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

//           <StatCard title="Avg Price" value='2100' icon={<FiBriefcase />} />
//           <StatCard title="Timings" value='11 to 7' icon={<FiActivity />} />
//           <StatCard title="Rating" value={profile.rating } icon={<FiStar />} />
//           <StatCard title="Status" value={profile.status} icon={<FiGlobe />} />

//         </div>

//         {/* MAIN GRID */}
//         <div className="grid md:grid-cols-2 gap-6">

//           {/* LEFT PROFILE CARD */}
//           <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">

//             <h2 className="text-xl font-semibold text-white">
//               Basic Info
//             </h2>

//             <Input label="Name" name="name" value={profile.name || ""} onChange={handleChange} />
//             <Input label="Phone" name="phone" value={profile.phone || ""} onChange={handleChange} />
//             <Input label="City" name="city" value={profile.city || ""} onChange={handleChange} />

//             <Input
//               label="Experience (years)"
//               name="experience"
//               value={profile.experience || ""}
//               onChange={handleChange}
//             />

//             <button
//               onClick={saveProfile}
//               className="w-full bg-amber-400 text-black font-semibold py-3 rounded-xl hover:scale-[1.02] transition flex items-center justify-center gap-2"
//             >
//               <FiSave /> Save Changes
//             </button>
//           </div>

//           {/* RIGHT INFO CARD */}
//           <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">

//             <h2 className="text-xl font-semibold text-white">
//               Professional Info
//             </h2>

//             <div className="text-slate-300 space-y-3 text-sm">

//               <p>
//                 <span className="text-slate-400">Email:</span> {profile.email}
//               </p>

//               <p>
//                 <span className="text-slate-400">Languages:</span>{" "}
//                 {profile.languages?.join(", ")}
//               </p>

//               <p>
//                 <span className="text-slate-400">Specialization:</span>{" "}
//                 {profile.specialization?.join(", ")}
//               </p>

//               <p>
//                 <span className="text-slate-400">Availability:</span>{" "}
//                 {profile.availability ? "Available" : "Not Available"}
//               </p>

//             </div>

//           </div>

//         </div>

//       </div>
//     </PanditLayout>
//   );
// };

// // SMALL COMPONENTS
// const StatCard = ({ title, value, icon }) => (
//   <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between">
//     <div>
//       <p className="text-slate-400 text-xs">{title}</p>
//       <h3 className="text-xl font-bold text-white">{value}</h3>
//     </div>
//     <div className="text-amber-400 text-xl">{icon}</div>
//   </div>
// );

// const Input = ({ label, ...props }) => (
//   <div>
//     <label className="text-sm text-slate-400">{label}</label>
//     <input
//       {...props}
//       className="w-full mt-1 p-3 rounded-xl bg-black/40 border border-white/10 text-white outline-none focus:border-amber-400"
//     />
//   </div>
// );

// export default PanditProfile;




import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db, auth } from "../../firebase/firebase";
import { motion } from "framer-motion";
import {
  FiUser,
  FiSave,
  FiStar,
  FiBriefcase,
  FiActivity,
  FiGlobe,
} from "react-icons/fi";
import PanditLayout from "../layout/PanditLayout";
import toast from "react-hot-toast";

const PanditProfile = () => {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState({}); // ✅ FIX: no null

  const user = auth.currentUser;

  // FETCH PROFILE
  useEffect(() => {
    const fetchProfile = async () => {
      if (!user?.uid) return;

      try {
        const ref = doc(db, "pandits", user.uid);
        const snap = await getDoc(ref);

        if (snap.exists()) {
          setProfile(snap.data());
        } else {
          setProfile({});
        }

        setLoading(false);
      } catch (err) {
        console.log(err);
        toast.error("Failed to load profile");
        setLoading(false);
      }
    };

    fetchProfile();
  }, [user]);

  const handleChange = (e) => {
    setProfile((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // SAVE
  const saveProfile = async () => {
    try {
      await updateDoc(doc(db, "pandits", user.uid), {
        name: profile.name || "",
        phone: profile.phone || "",
        city: profile.city || "",
        languages: profile.languages || [],
        experience: Number(profile.experience || 0),
        specialization: profile.specialization || [],
      });

      toast.success("Profile updated successfully");
    } catch (err) {
      console.log(err);
      toast.error("Update failed");
    }
  };

  if (loading) {
    return (
      <PanditLayout>
        <p className="text-white p-6">Loading profile...</p>
      </PanditLayout>
    );
  }

  return (
    <PanditLayout>
      <div className="max-w-6xl mx-auto space-y-8">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl font-bold text-amber-400 flex items-center gap-2">
            <FiUser /> My Profile
          </h1>
          <p className="text-slate-400 mt-2">
            Manage your pandit account details
          </p>
        </motion.div>

        {/* TOP STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <StatCard title="Avg Price" value="2100" icon={<FiBriefcase />} />
          <StatCard title="Timings" value="11 to 7" icon={<FiActivity />} />
          <StatCard title="Rating" value={profile?.rating ?? 0} icon={<FiStar />} />
          <StatCard title="Status" value={profile?.status || "active"} icon={<FiGlobe />} />

        </div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* LEFT */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">

            <h2 className="text-xl font-semibold text-white">
              Basic Info
            </h2>

            <Input label="Name" name="name" value={profile.name || ""} onChange={handleChange} />
            <Input label="Phone" name="phone" value={profile.phone || ""} onChange={handleChange} />
            <Input label="City" name="city" value={profile.city || ""} onChange={handleChange} />
            <Input label="Experience (years)" name="experience" value={profile.experience || ""} onChange={handleChange} />

            <button
              onClick={saveProfile}
              className="w-full bg-amber-400 text-black font-semibold py-3 rounded-xl"
            >
              <FiSave /> Save Changes
            </button>
          </div>

          {/* RIGHT */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">

            <h2 className="text-xl font-semibold text-white">
              Professional Info
            </h2>

            <p className="text-slate-300 text-sm">
              <span className="text-slate-400">Email:</span>{" "}
              {profile?.email || "Not available"}
            </p>

            <p className="text-slate-300 text-sm">
              <span className="text-slate-400">Languages:</span>{" "}
              {profile?.languages?.join(", ") || "N/A"}
            </p>

            <p className="text-slate-300 text-sm">
              <span className="text-slate-400">Specialization:</span>{" "}
              {profile?.specialization?.join(", ") || "N/A"}
            </p>

            <p className="text-slate-300 text-sm">
              <span className="text-slate-400">Availability:</span>{" "}
              {profile?.availability ? "Available" : "Not Available"}
            </p>

          </div>

        </div>

      </div>
    </PanditLayout>
  );
};

// COMPONENTS
const StatCard = ({ title, value, icon }) => (
  <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex justify-between">
    <div>
      <p className="text-slate-400 text-xs">{title}</p>
      <h3 className="text-xl font-bold text-white">{value}</h3>
    </div>
    <div className="text-amber-400">{icon}</div>
  </div>
);

const Input = ({ label, ...props }) => (
  <div>
    <label className="text-sm text-slate-400">{label}</label>
    <input
      {...props}
      className="w-full mt-1 p-3 rounded-xl bg-black/40 border border-white/10 text-white"
    />
  </div>
);

export default PanditProfile;