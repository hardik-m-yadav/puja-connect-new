import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase/firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";

const AddPandit = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    experience: "",
    city: "",
    languages: "",
    specialization: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Create Auth User
      const userCred = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );

      const uid = userCred.user.uid;

      // 2. Create Firestore Profile
      await setDoc(doc(db, "pandits", uid), {
        uid,
        name: form.name,
        email: form.email,
        phone: form.phone,
        experience: Number(form.experience),
        city: form.city,
        languages: form.languages.split(","),
        specialization: form.specialization.split(","),
        status: "active",
        availability: true,
        rating: 5,
        earnings: 0,
        totalBookings: 0,
        createdAt: serverTimestamp(),
      });

      alert("Pandit Created Successfully!");

      navigate("/admin/pandits");
    } catch (error) {
      alert(error.message);
    }

    setLoading(false);
  };

  return (
    <AdminLayout>
    <div className="min-h-screen  bg-[#050816] text-white p-6 flex items-center justify-center">

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl bg-white/5 border border-white/10 p-6 rounded-xl"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold text-orange-400 mb-6">
          👳 Add New Pandit
        </h1>

        <div className="grid md:grid-cols-2 gap-4">

          <input name="name" placeholder="Full Name" onChange={handleChange}
            className="p-3 bg-black border border-white/10 rounded" />

          <input name="email" placeholder="Email" onChange={handleChange}
            className="p-3 bg-black border border-white/10 rounded" />

          <input name="password" placeholder="Password" type="password"
            onChange={handleChange}
            className="p-3 bg-black border border-white/10 rounded" />

          <input name="phone" placeholder="Phone" onChange={handleChange}
            className="p-3 bg-black border border-white/10 rounded" />

          <input name="experience" placeholder="Experience (years)"
            onChange={handleChange}
            className="p-3 bg-black border border-white/10 rounded" />

          <input name="city" placeholder="City" onChange={handleChange}
            className="p-3 bg-black border border-white/10 rounded" />

          <input name="languages" placeholder="Languages (comma separated)"
            onChange={handleChange}
            className="p-3 bg-black border border-white/10 rounded" />

          <input name="specialization" placeholder="Specialization (comma separated)"
            onChange={handleChange}
            className="p-3 bg-black border border-white/10 rounded" />

        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full mt-6 bg-orange-500 hover:bg-orange-600 p-3 rounded font-semibold"
        >
          {loading ? "Creating..." : "Create Pandit"}
        </button>
      </motion.form>

    </div>
    </AdminLayout>
  );
};

export default AddPandit;