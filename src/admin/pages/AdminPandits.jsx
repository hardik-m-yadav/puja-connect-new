import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  getPandits,
  createPandit,
  deletePandit,
} from "../../services/panditService";
import AdminLayout from "../layout/AdminLayout";

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  city: "",
  experience: "",
  languages: "",
  specialization: "",
};

const AdminPandits = () => {
  const [pandits, setPandits] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);

  // 📥 Load pandits
  const loadPandits = async () => {
    setLoading(true);
    const data = await getPandits();
    setPandits(data);
    setLoading(false);
  };

  useEffect(() => {
    loadPandits();
  }, []);

  // ➕ Add pandit
  const handleAdd = async () => {
    setSaving(true);

    const payload = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      city: form.city,
      experience: Number(form.experience || 0),
      languages: form.languages.split(",").map((l) => l.trim()),
      specialization: form.specialization.split(",").map((s) => s.trim()),
    };

    await createPandit(payload);

    setForm(emptyForm);
    setIsModalOpen(false);
    setSaving(false);
    loadPandits();
  };

  // ❌ Delete
  const handleDelete = async (id) => {
    await deletePandit(id);
    loadPandits();
  };

  // 🔍 Filtered list
  const filtered = pandits.filter((p) =>
    p.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AdminLayout>
    <div className="p-6 text-white">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">👳 Pandit Management</h1>

        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-purple-600 px-4 py-2 rounded-lg"
        >
          + Add Pandit
        </button>
      </div>

      {/* SEARCH */}
      <input
        placeholder="Search pandits..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 mb-6 rounded bg-gray-900 border border-gray-700"
      />

      {/* LIST */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((p) => (
            <motion.div
              key={p.id}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-900 p-4 rounded-xl border border-gray-800"
            >
              <h2 className="text-lg font-semibold">{p.name}</h2>
              <p className="text-sm text-gray-400">{p.city}</p>
              <p className="text-sm mt-1">
                ⭐ {p.rating || 0} | 🎓 {p.experience} yrs
              </p>

              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => handleDelete(p.id)}
                  className="bg-red-600 px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
          <div className="bg-gray-900 p-6 rounded-xl w-[90%] max-w-xl">
            <h2 className="text-xl font-bold mb-4">Add New Pandit</h2>

            <div className="grid gap-3">
              <input
                placeholder="Name"
                className="p-2 bg-black border border-gray-700"
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
              />

              <input
                placeholder="Email"
                className="p-2 bg-black border border-gray-700"
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
              />

              <input
                placeholder="Phone"
                className="p-2 bg-black border border-gray-700"
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value })
                }
              />

              <input
                placeholder="City"
                className="p-2 bg-black border border-gray-700"
                onChange={(e) =>
                  setForm({ ...form, city: e.target.value })
                }
              />

              <input
                placeholder="Experience (years)"
                type="number"
                className="p-2 bg-black border border-gray-700"
                onChange={(e) =>
                  setForm({ ...form, experience: e.target.value })
                }
              />

              <input
                placeholder="Languages (comma separated)"
                className="p-2 bg-black border border-gray-700"
                onChange={(e) =>
                  setForm({ ...form, languages: e.target.value })
                }
              />

              <input
                placeholder="Specialization (comma separated)"
                className="p-2 bg-black border border-gray-700"
                onChange={(e) =>
                  setForm({ ...form, specialization: e.target.value })
                }
              />
            </div>

            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-700 rounded"
              >
                Cancel
              </button>

              <button
                onClick={handleAdd}
                disabled={saving}
                className="px-4 py-2 bg-purple-600 rounded"
              >
                {saving ? "Saving..." : "Create"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </AdminLayout>
  );
};

export default AdminPandits;