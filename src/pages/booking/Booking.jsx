import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { rituals } from "../../data/rituals";
import { pandits } from "../../data/pandits";

const ritualNameMap = {
  ganesh: "Ganesh Puja",
  griha: "Griha Shanti",
  navgraha: "Navgraha Puja",
  "griha-pravesh": "Griha Pravesh",
  "marriage-puja": "Marriage Rituals",
  "vehicle-puja": "Vehicle Puja",
  "satyanarayan-katha": "Satyanarayan Katha",
  "mundan-sanskar": "Mundan",
  "navratri-puja": "Navratri Puja",
  "diwali-lakshmi-puja": "Diwali Puja",
  "dussehra-puja": "Dussehra Puja",
  rudrabhishek: "Rudrabhishek",
  "maha-mrityunjaya": "Mahamrityunjaya Jaap",
  "lakshmi-puja": "Lakshmi Puja",
  "saraswati-puja": "Saraswati Puja",
  "hanuman-puja": "Hanuman Puja",
  "business-puja": "Business Opening Puja",
  "vastu-shanti": "Vastu Shanti",
  namkaran: "Naamkaran",
  upanayan: "Upanayan Sanskar",
  annaprashan: "Annaprashan",
};







const BookingPage = () => {
  const [step, setStep] = useState(1);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [bookingId, setBookingId] = useState(null);
const [loading, setLoading] = useState(false);

  const ritualId = searchParams.get("ritual");
  const panditId = searchParams.get("pandit");

  // ✅ FIXED: ritual mapping (no dependency on rituals data structure)
  const selectedRitual = ritualId
    ? { name: ritualNameMap[ritualId] || "Selected Ritual" }
    : null;

  const selectedPandit = pandits.find(
    (p) => p.id === Number(panditId)
  );

  const isValidBooking = ritualId && panditId;

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    date: "",
    notes: "",
  });

   const handleConfirmBooking = () => {
    if (!validate()) return;

    const id = "BK" + Date.now();
    setBookingId(id);
    setStep(3);
  };

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    if (!selectedPandit) newErrors.pandit = "Please select a pandit";
    if (!selectedRitual) newErrors.ritual = "Please select a ritual";

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.phone.trim()) newErrors.phone = "Phone is required";
    if (!form.address.trim()) newErrors.address = "Address is required";
    if (!form.date) newErrors.date = "Please select a date";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // 🚨 BLOCK INVALID ACCESS
  if (!isValidBooking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#050816] text-white px-6">
        <div className="text-center max-w-md">
          <h1 className="text-2xl font-bold text-red-400">
            Invalid Booking Request
          </h1>

          <p className="text-slate-400 mt-3">
            Please select both a ritual and a pandit before booking.
          </p>

          <button
            onClick={() => navigate("/pandits")}
            className="mt-6 px-6 py-3 bg-amber-400 text-black rounded-xl font-semibold"
          >
            Go to Pandits
          </button>
        </div>
      </div>
    );
  }


  return (
    <section className="min-h-screen pt-28 bg-[#050816] text-white px-6 py-20">

      <div className="max-w-3xl mx-auto mb-10">
  <div className="flex justify-between text-sm text-slate-400">

    <span className={step === 1 ? "text-amber-400 font-semibold" : ""}>
      1. Details
    </span>

    <span className={step === 2 ? "text-amber-400 font-semibold" : ""}>
      2. Review
    </span>

    <span className="text-slate-500">
      3. Payment
    </span>

  </div>

  <div className="mt-2 h-1 bg-white/10 rounded-full overflow-hidden">
    <div
      className="h-full bg-amber-400 transition-all duration-500"
      style={{
        width: step === 1 ? "50%" : step === 2 ? "100%" : "0%",
      }}
    />
  </div>
</div>
      
      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl font-bold text-amber-400">
          Complete Your Booking
        </h1>

        {/* ERROR */}
        {Object.keys(errors).length > 0 && (
          <div className="mt-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300">
            Please fix errors before proceeding.
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-10 mt-10">

          {/* FORM */}
          <div className="space-y-4">

            <input
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10"
            />
            {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}

            <input
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10"
            />
            {errors.phone && <p className="text-red-400 text-sm">{errors.phone}</p>}

            <input
              name="email"
              placeholder="Email (optional)"
              value={form.email}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10"
            />

            {/* <input
              name="address"
              placeholder="Full Address"
              value={form.address}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10"
            />
            {errors.address && <p className="text-red-400 text-sm">{errors.address}</p>} */}

            <div className="space-y-3">

  <input
    name="address"
    placeholder="Full Address"
    value={form.address}
    onChange={handleChange}
    className="w-full p-4 rounded-xl bg-white/5 border border-white/10"
  />

  {errors.address && (
    <p className="text-red-400 text-sm">{errors.address}</p>
  )}

  {/* MAP OPTION UI */}
  <div className="p-4 rounded-xl border border-white/10 bg-white/5">

    <p className="text-sm text-slate-400 mb-2">
      📍 Or choose location from map (coming soon)
    </p>

    <button
      type="button"
      className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 transition text-sm"
      onClick={() => alert("Next step: Google Maps integration")}
    >
      Select on Map
    </button>

  </div>

</div>

            <input
              name="city"
              placeholder="City"
              value={form.city}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10"
            />

            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10"
            />
            {errors.date && <p className="text-red-400 text-sm">{errors.date}</p>}

            <textarea
              name="notes"
              placeholder="Notes (optional)"
              value={form.notes}
              onChange={handleChange}
              rows="4"
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10"
            />

         <button
  onClick={() => {
    if (validate()) {
      setStep(2);
    }
  }}
  className="w-full py-4 bg-amber-400 text-black font-bold rounded-xl hover:scale-[1.02] transition"
>
  Continue to Review
</button>

          </div>

          {/* SUMMARY */}
          <div className="space-y-6">

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <h2 className="text-amber-400 font-semibold">Ritual</h2>
              <p className="mt-2">{selectedRitual?.name}</p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <h2 className="text-amber-400 font-semibold">Pandit</h2>
              <p className="mt-2">{selectedPandit?.name}</p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <h2 className="text-amber-400 font-semibold">Price</h2>
              <p className="mt-2 text-2xl font-bold">
                {selectedPandit?.price}
              </p>
            </div>

            <div className="text-xs text-slate-500">
            ⚡ Secure booking • Verified Pandits • Instant confirmation (next step)
          </div>

          </div>

        </div>
      </div>



      {step === 2 && (
  <div className="mt-16 flex justify-center">
    
    <div className="w-full max-w-3xl space-y-6">

      {/* TITLE */}
      <h2 className="text-2xl font-bold text-amber-400 text-center">
        Review Your Booking
      </h2>

      {/* CARD WRAPPER */}
      <div className="space-y-5">

        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center">
          <p className="text-slate-400 text-sm">Ritual</p>
          <p className="text-white text-lg font-medium">
            {selectedRitual?.name}
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center">
          <p className="text-slate-400 text-sm">Pandit</p>
          <p className="text-white text-lg font-medium">
            {selectedPandit?.name}
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center">
          <p className="text-slate-400 text-sm">Price</p>
          <p className="text-2xl font-bold text-amber-400">
            {selectedPandit?.price}
          </p>
        </div>

        {/* BUTTONS */}
        <div className="space-y-3 pt-2">




  <button
  onClick={() => setStep(3)}
  className="w-full py-4 bg-green-500 text-black font-bold rounded-xl"
>
  Proceed to Payment
</button>

          <button
            onClick={() => setStep(1)}
            className="w-full py-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition"
          >
            Back to Edit
          </button>

        </div>

      </div>
    </div>
  </div>
)}



{step === 3 && (
  <div className="mt-16 flex justify-center">
    <div className="w-full max-w-2xl space-y-6">

      <h2 className="text-2xl font-bold text-amber-400 text-center">
        Choose Payment Method
      </h2>

      {/* Razorpay */}
      <button
        onClick={() => handleRazorpayPayment()}
        className="w-full py-4 bg-blue-500 text-white font-bold rounded-xl"
      >
        Pay Online (Razorpay - UPI / Card)
      </button>

      {/* Cash */}
      <button
        onClick={() => {
          const id = "BK" + Date.now();
          setBookingId(id);
          setStep(4);
        }}
        className="w-full py-4 bg-white/10 text-white rounded-xl"
      >
        Pay on Puja Day (Cash)
      </button>

    </div>
  </div>
)}




{step === 4 && (
  <div className="mt-16 flex justify-center">
    <div className="w-full max-w-xl text-center space-y-6">

      <div className="text-5xl">🎉</div>

      <h2 className="text-2xl font-bold text-green-400">
        Booking Confirmed!
      </h2>

      <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
        <p className="text-slate-400">Booking ID</p>
        <p className="text-amber-400 font-bold text-lg">
          {bookingId}
        </p>
      </div>

    </div>
  </div>
)}







    </section>

    
  );
};

export default BookingPage;









