import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db, auth } from "../../firebase/firebase";
import UserLayout from "../layout/UserLayout";
import toast from "react-hot-toast";
import {
  FiUser,
  FiMapPin,
  FiPhone,
  FiMail,
  FiSave,
  FiActivity,
  FiCalendar,
  FiStar,
} from "react-icons/fi";

const UserProfile = () => {
  const user = auth.currentUser;

  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      if (!user?.uid) return;

      const ref = doc(db, "users", user.uid);
      const snap = await getDoc(ref);

      if (snap.exists()) {
        setProfile(snap.data());
      }

      setLoading(false);
    };

    fetch();
  }, [user]);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const saveProfile = async () => {
    try {
      await updateDoc(doc(db, "users", user.uid), {
        name: profile.name,
        phone: profile.phone,
        city: profile.city,
      });

      toast.success("Profile updated successfully");
    } catch (err) {
      toast.error("Update failed");
    }
  };

  if (loading) {
    return (
      <UserLayout>
        <p className="text-white">Loading profile...</p>
      </UserLayout>
    );
  }

  return (
    <UserLayout>
      <div className="max-w-6xl mx-auto space-y-8">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl font-bold text-amber-400 flex items-center gap-2">
            <FiUser /> My Profile
          </h1>
          <p className="text-slate-400">
            Manage your personal information
          </p>
        </motion.div>

        {/* TOP STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <StatCard
            title="Bookings"
            value={profile?.totalBookings || 0}
            icon={<FiCalendar />}
          />

          <StatCard
            title="Active"
            value={profile?.status || "active"}
            icon={<FiActivity />}
          />

          <StatCard
            title="Rating"
            value={profile?.rating || 0}
            icon={<FiStar />}
          />

          <StatCard
            title="Member Since"
            value={
              profile?.createdAt?.seconds
                ? new Date(
                    profile.createdAt.seconds * 1000
                  ).getFullYear()
                : "2026"
            }
            icon={<FiCalendar />}
          />
        </div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* EDIT PROFILE */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">

            <h2 className="text-xl font-semibold text-white">
              Edit Profile
            </h2>

            <Input
              label="Name"
              name="name"
              value={profile?.name || ""}
              onChange={handleChange}
            />

            <Input
              label="Phone"
              name="phone"
              value={profile?.phone || ""}
              onChange={handleChange}
            />

            <Input
              label="City"
              name="city"
              value={profile?.city || ""}
              onChange={handleChange}
            />

            <button
              onClick={saveProfile}
              className="w-full bg-amber-400 text-black font-semibold py-3 rounded-xl flex items-center justify-center gap-2"
            >
              <FiSave /> Save Changes
            </button>
          </div>

          {/* ACCOUNT INFO */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">

            <h2 className="text-xl font-semibold text-white">
              Account Info
            </h2>

            <div className="space-y-3 text-slate-300 text-sm">

              <p className="flex items-center gap-2">
                <FiMail /> {profile?.email}
              </p>

              <p className="flex items-center gap-2">
                <FiPhone /> {profile?.phone || "Not added"}
              </p>

              <p className="flex items-center gap-2">
                <FiMapPin /> {profile?.city || "Not added"}
              </p>

              <p className="flex items-center gap-2">
                <FiUser /> UID: {user?.uid}
              </p>

            </div>

          </div>

        </div>

      </div>
    </UserLayout>
  );
};

export default UserProfile;

/* SMALL COMPONENTS */
const StatCard = ({ title, value, icon }) => (
  <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between">
    <div>
      <p className="text-slate-400 text-xs">{title}</p>
      <h3 className="text-xl font-bold text-white">{value}</h3>
    </div>
    <div className="text-amber-400 text-xl">{icon}</div>
  </div>
);

const Input = ({ label, ...props }) => (
  <div>
    <label className="text-sm text-slate-400">{label}</label>
    <input
      {...props}
      className="w-full mt-1 p-3 rounded-xl bg-black/40 border border-white/10 text-white outline-none focus:border-amber-400"
    />
  </div>
);