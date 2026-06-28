// import { useEffect, useState } from "react";
// import { doc, getDoc, setDoc } from "firebase/firestore";
// import { db } from "../../firebase/firebase";
// import AdminLayout from "../layout/AdminLayout";
// import toast from "react-hot-toast";

// const Settings = () => {
//   const [loading, setLoading] = useState(true);

//   const [form, setForm] = useState({
//     businessName: "",
//     phone: "",
//     email: "",
//     address: "",
//     whatsapp: "",
//     instagram: "",
//     facebook: "",
//     gst: "",
//     invoiceFooter: "",
//   });

//   // FETCH
//   const fetchSettings = async () => {
//     try {
//       setLoading(true);

//       const ref = doc(db, "settings", "main");
//       const snap = await getDoc(ref);

//       if (snap.exists()) {
//         setForm(snap.data());
//       }
//     } catch (err) {
//       toast.error("Failed to load settings");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchSettings();
//   }, []);

//   // CHANGE
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // SAVE
//   const saveSettings = async () => {
//     try {
//       const ref = doc(db, "settings", "main");
//       await setDoc(ref, form, { merge: true });
//       toast.success("Settings saved successfully");
//     } catch (err) {
//       toast.error("Save failed");
//     }
//   };

//   if (loading) {
//     return (
//       <AdminLayout>
//         <p className="text-slate-400">Loading settings...</p>
//       </AdminLayout>
//     );
//   }

//   return (
//     <AdminLayout>
//       <div className="space-y-8 text-white">

//         {/* HEADER */}
//         <div>
//           <h1 className="text-2xl font-bold text-amber-400">
//             Settings
//           </h1>
//           <p className="text-slate-400 text-sm">
//             Manage your platform configuration
//           </p>
//         </div>

//         {/* GRID */}
//         <div className="grid lg:grid-cols-3 gap-6">

//           {/* BUSINESS CARD */}
//           <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
//             <h2 className="text-amber-400 font-semibold">
//               Business Info
//             </h2>

//             <input
//               name="businessName"
//               value={form.businessName}
//               onChange={handleChange}
//               placeholder="Business Name"
//               className="w-full p-3 rounded-xl bg-white/5 border border-white/10"
//             />

//             <input
//               name="phone"
//               value={form.phone}
//               onChange={handleChange}
//               placeholder="Phone"
//               className="w-full p-3 rounded-xl bg-white/5 border border-white/10"
//             />

//             <input
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               placeholder="Email"
//               className="w-full p-3 rounded-xl bg-white/5 border border-white/10"
//             />

//             <textarea
//               name="address"
//               value={form.address}
//               onChange={handleChange}
//               placeholder="Address"
//               className="w-full p-3 rounded-xl bg-white/5 border border-white/10"
//               rows={3}
//             />
//           </div>

//           {/* SOCIAL CARD */}
//           <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
//             <h2 className="text-blue-400 font-semibold">
//               Social Links
//             </h2>

//             <input
//               name="whatsapp"
//               value={form.whatsapp}
//               onChange={handleChange}
//               placeholder="WhatsApp Number"
//               className="w-full p-3 rounded-xl bg-white/5 border border-white/10"
//             />

//             <input
//               name="instagram"
//               value={form.instagram}
//               onChange={handleChange}
//               placeholder="Instagram"
//               className="w-full p-3 rounded-xl bg-white/5 border border-white/10"
//             />

//             <input
//               name="facebook"
//               value={form.facebook}
//               onChange={handleChange}
//               placeholder="Facebook"
//               className="w-full p-3 rounded-xl bg-white/5 border border-white/10"
//             />
//           </div>

//           {/* INVOICE CARD */}
//           <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
//             <h2 className="text-green-400 font-semibold">
//               Invoice Settings
//             </h2>

//             <input
//               name="gst"
//               value={form.gst}
//               onChange={handleChange}
//               placeholder="GST Number"
//               className="w-full p-3 rounded-xl bg-white/5 border border-white/10"
//             />

//             <textarea
//               name="invoiceFooter"
//               value={form.invoiceFooter}
//               onChange={handleChange}
//               placeholder="Invoice Footer Text"
//               className="w-full p-3 rounded-xl bg-white/5 border border-white/10"
//               rows={5}
//             />
//           </div>

//         </div>

//         {/* SAVE BUTTON */}
//         <div className="flex justify-end">
//           <button
//             onClick={saveSettings}
//             className="px-6 py-3 bg-amber-400 text-black rounded-xl font-semibold hover:scale-105 transition"
//           >
//             Save Settings
//           </button>
//         </div>

//       </div>
//     </AdminLayout>
//   );
// };

// export default Settings;


import { useEffect, useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import AdminLayout from "../layout/AdminLayout";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const Settings = () => {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({
    // BUSINESS
    businessName: "",
    logoUrl: "",
    ownerName: "",
    phone: "",
    email: "",
    address: "",

    // BRANDING
    primaryColor: "#f59e0b",
    currency: "INR",

    // BOOKING RULES
    defaultBookingStatus: "Pending Verification",
    advanceBookingDays: 7,
    autoConfirm: false,
    workingHoursStart: "06:00",
    workingHoursEnd: "22:00",

    // PAYMENT SETTINGS
    paymentMode: "Online + Cash",
    taxEnabled: false,
    gstNumber: "",

    // NOTIFICATIONS
    emailNotifications: true,
    smsNotifications: false,
    whatsappNotifications: true,

    // SOCIAL
    whatsapp: "",
    instagram: "",
    facebook: "",
  });

  // FETCH
  const fetchSettings = async () => {
    try {
      setLoading(true);
      const ref = doc(db, "settings", "main");
      const snap = await getDoc(ref);

      if (snap.exists()) {
        setForm((prev) => ({ ...prev, ...snap.data() }));
      }
    } catch (err) {
      toast.error("Failed to load settings");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  const update = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const save = async () => {
    try {
      setSaving(true);
      const ref = doc(db, "settings", "main");
      await setDoc(ref, form, { merge: true });
      toast.success("Settings updated successfully");
    } catch (err) {
      toast.error("Save failed");
    } finally {
      setSaving(false);
    }
  };

  const Input = ({ label, desc, children }) => (
    <div className="space-y-1">
      <p className="text-sm text-white">{label}</p>
      {desc && <p className="text-xs text-slate-400">{desc}</p>}
      {children}
    </div>
  );

  const fieldClass =
    "w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-amber-400";

  return (
    <AdminLayout>
      <div className="space-y-6 text-white">

        {/* HEADER */}
        <div>
          <h1 className="text-2xl font-bold text-amber-400">
            System Settings
          </h1>
          <p className="text-slate-400 text-sm">
            Full control over your platform configuration
          </p>
        </div>

        {loading ? (
          <p className="text-slate-400">Loading settings...</p>
        ) : (
          <div className="grid lg:grid-cols-2 gap-6">

            {/* LEFT COLUMN */}
            <div className="space-y-6">

              {/* BUSINESS */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                <h2 className="text-amber-400 font-semibold">Business Details</h2>

                <Input label="Business Name">
                  <input className={fieldClass} value={form.businessName} onChange={(e) => update("businessName", e.target.value)} />
                </Input>

                <Input label="Owner Name">
                  <input className={fieldClass} value={form.ownerName} onChange={(e) => update("ownerName", e.target.value)} />
                </Input>

                <Input label="Phone">
                  <input className={fieldClass} value={form.phone} onChange={(e) => update("phone", e.target.value)} />
                </Input>

                <Input label="Email">
                  <input className={fieldClass} value={form.email} onChange={(e) => update("email", e.target.value)} />
                </Input>

                <Input label="Address">
                  <textarea rows={3} className={fieldClass} value={form.address} onChange={(e) => update("address", e.target.value)} />
                </Input>
              </div>

              {/* BRANDING */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                <h2 className="text-blue-400 font-semibold">Branding</h2>

                <Input label="Logo URL">
                  <input className={fieldClass} value={form.logoUrl} onChange={(e) => update("logoUrl", e.target.value)} />
                </Input>

                <Input label="Primary Color">
                  <input type="color" className="w-full h-12 rounded-xl" value={form.primaryColor} onChange={(e) => update("primaryColor", e.target.value)} />
                </Input>

                <Input label="Currency">
                  <select className={fieldClass} value={form.currency} onChange={(e) => update("currency", e.target.value)}>
                    <option value="INR">INR</option>
                    <option value="USD">USD</option>
                  </select>
                </Input>
              </div>

            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-6">

              {/* BOOKING RULES */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                <h2 className="text-pink-400 font-semibold">Booking Rules</h2>

                <Input label="Default Status">
                  <select className={fieldClass} value={form.defaultBookingStatus} onChange={(e) => update("defaultBookingStatus", e.target.value)}>
                    <option>Pending Verification</option>
                    <option>Confirmed</option>
                  </select>
                </Input>

                <Input label="Advance Booking Days">
                  <input type="number" className={fieldClass} value={form.advanceBookingDays} onChange={(e) => update("advanceBookingDays", e.target.value)} />
                </Input>

                <Input label="Working Hours">
                  <div className="flex gap-2">
                    <input className={fieldClass} value={form.workingHoursStart} onChange={(e) => update("workingHoursStart", e.target.value)} />
                    <input className={fieldClass} value={form.workingHoursEnd} onChange={(e) => update("workingHoursEnd", e.target.value)} />
                  </div>
                </Input>

                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" checked={form.autoConfirm} onChange={(e) => update("autoConfirm", e.target.checked)} />
                  Auto Confirm Bookings
                </label>
              </div>

              {/* PAYMENT */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                <h2 className="text-green-400 font-semibold">Payments</h2>

                <Input label="Payment Mode">
                  <select className={fieldClass} value={form.paymentMode} onChange={(e) => update("paymentMode", e.target.value)}>
                    <option>Online + Cash</option>
                    <option>Online Only</option>
                    <option>Cash Only</option>
                  </select>
                </Input>

                <Input label="GST Number">
                  <input className={fieldClass} value={form.gstNumber} onChange={(e) => update("gstNumber", e.target.value)} />
                </Input>

                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" checked={form.taxEnabled} onChange={(e) => update("taxEnabled", e.target.checked)} />
                  Enable Tax Calculation
                </label>
              </div>

              {/* NOTIFICATIONS + SOCIAL */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                <h2 className="text-yellow-400 font-semibold">Notifications & Social</h2>

                <div className="flex gap-3 flex-wrap text-sm">
                  <label><input type="checkbox" checked={form.emailNotifications} onChange={(e) => update("emailNotifications", e.target.checked)} /> Email</label>
                  <label><input type="checkbox" checked={form.smsNotifications} onChange={(e) => update("smsNotifications", e.target.checked)} /> SMS</label>
                  <label><input type="checkbox" checked={form.whatsappNotifications} onChange={(e) => update("whatsappNotifications", e.target.checked)} /> WhatsApp</label>
                </div>

                <Input label="WhatsApp">
                  <input className={fieldClass} value={form.whatsapp} onChange={(e) => update("whatsapp", e.target.value)} />
                </Input>

                <Input label="Instagram">
                  <input className={fieldClass} value={form.instagram} onChange={(e) => update("instagram", e.target.value)} />
                </Input>

                <Input label="Facebook">
                  <input className={fieldClass} value={form.facebook} onChange={(e) => update("facebook", e.target.value)} />
                </Input>
              </div>

            </div>
          </div>
        )}

        {/* SAVE BAR */}
        <div className="flex justify-end pt-4">
          <button
            onClick={save}
            disabled={saving}
            className="px-6 py-3 bg-amber-400 text-black rounded-xl font-semibold hover:scale-105 transition disabled:opacity-50"
          >
            {saving ? "Saving..." : "Save Settings"}
          </button>
        </div>

      </div>
    </AdminLayout>
  );
};

export default Settings;