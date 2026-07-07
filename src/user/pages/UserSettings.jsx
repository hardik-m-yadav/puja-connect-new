import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db, auth } from "../../firebase/firebase";
import { updatePassword } from "firebase/auth";
import UserLayout from "../layout/UserLayout";
import toast from "react-hot-toast";
import {
  FiUser,
  FiLock,
  FiBell,
  FiSave,
  FiShield,
} from "react-icons/fi";

const UserSettings = () => {
  const user = auth.currentUser;

  const [profile, setProfile] = useState(null);
  const [newPassword, setNewPassword] = useState("");
  const [notifications, setNotifications] = useState(true);
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

  const updateProfile = async () => {
    try {
      await updateDoc(doc(db, "users", user.uid), {
        name: profile.name,
        phone: profile.phone,
        city: profile.city,
      });

      toast.success("Profile updated");
    } catch (err) {
      toast.error("Update failed");
    }
  };

  const changePassword = async () => {
    try {
      if (!newPassword) return;

      await updatePassword(user, newPassword);
      toast.success("Password updated");
      setNewPassword("");
    } catch (err) {
      toast.error("Password change failed");
    }
  };

  if (loading) {
    return (
      <UserLayout>
        <p className="text-white">Loading settings...</p>
      </UserLayout>
    );
  }

  return (
    <UserLayout>
      <div className="max-w-5xl mx-auto space-y-8">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl font-bold text-amber-400 flex items-center gap-2">
            <FiShield /> Settings
          </h1>
          <p className="text-slate-400">
            Manage your account preferences
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* PROFILE SETTINGS */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">

            <h2 className="text-lg font-semibold text-white flex items-center gap-2">
              <FiUser /> Profile Settings
            </h2>

            <input
              value={profile?.name || ""}
              onChange={(e) =>
                setProfile({ ...profile, name: e.target.value })
              }
              className="w-full p-3 rounded-xl bg-black/40 border border-white/10"
              placeholder="Name"
            />

            <input
              value={profile?.phone || ""}
              onChange={(e) =>
                setProfile({ ...profile, phone: e.target.value })
              }
              className="w-full p-3 rounded-xl bg-black/40 border border-white/10"
              placeholder="Phone"
            />

            <input
              value={profile?.city || ""}
              onChange={(e) =>
                setProfile({ ...profile, city: e.target.value })
              }
              className="w-full p-3 rounded-xl bg-black/40 border border-white/10"
              placeholder="City"
            />

            <button
              onClick={updateProfile}
              className="w-full bg-amber-400 text-black font-semibold py-3 rounded-xl flex items-center justify-center gap-2"
            >
              <FiSave /> Save Profile
            </button>
          </div>

          {/* SECURITY */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">

            <h2 className="text-lg font-semibold text-white flex items-center gap-2">
              <FiLock /> Security
            </h2>

            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full p-3 rounded-xl bg-black/40 border border-white/10"
              placeholder="New Password"
            />

            <button
              onClick={changePassword}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-xl"
            >
              Update Password
            </button>

            {/* NOTIFICATION TOGGLE */}
            <div className="flex items-center justify-between mt-4">
              <span className="text-slate-300 flex items-center gap-2">
                <FiBell /> Notifications
              </span>

              <button
                onClick={() => setNotifications(!notifications)}
                className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
                  notifications ? "bg-green-500" : "bg-gray-600"
                }`}
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full transform transition ${
                    notifications ? "translate-x-6" : ""
                  }`}
                />
              </button>
            </div>

          </div>

        </div>

      </div>
    </UserLayout>
  );
};

export default UserSettings;