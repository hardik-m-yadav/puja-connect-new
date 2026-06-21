import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { rituals } from "../../data/rituals";
import { pandits } from "../../data/pandits";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { doc, setDoc, updateDoc } from "firebase/firestore";

export const createBooking = async (id, data) => {
  await setDoc(doc(db, "bookings", id), data);
  return id;
};

export const updateBooking = async (id, data) => {
  await updateDoc(doc(db, "bookings", id), data);
};





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
const [paymentMethod, setPaymentMethod] = useState("");
const [paymentStatus, setPaymentStatus] = useState("Pending");
// const [paymentScreenshot, setPaymentScreenshot] = useState(null);
const [paymentRefId, setPaymentRefId] = useState("");
const [paymentError, setPaymentError] = useState("");

const saveBooking = (data) => {
  const existing = JSON.parse(localStorage.getItem("bookings")) || [];
  localStorage.setItem(
    "bookings",
    JSON.stringify([...existing, data])
  );
};

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



const validatePayment = () => {
  if (paymentMethod === "UPI" || paymentMethod === "Bank") {
    if (!paymentRefId.trim()) {
      setPaymentError("Please enter payment reference ID (UTR)");
      return false;
    }
  }

  setPaymentError("");
  return true;
};

  const shareOnWhatsApp = (id) => {
  const message = `
🙏 Puja Booking Confirmed

Booking ID: ${id}
Ritual: ${selectedRitual?.name}
Pandit: ${selectedPandit?.name}
Date: ${form.date}

Thank you for booking with PujaConnect 🙏
  `;

  const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};

  const handlePaymentMethod = (method) => {
  setPaymentMethod(method);
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

    if (form.phone.length < 10) newErrors.phone = "Invalid phone number";
// if (form.email && !form.email.includes("@")) newErrors.email = "Invalid email";

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
  {/* <div className="flex justify-between text-sm text-slate-400">

    <span className={step === 1 ? "text-amber-400 font-semibold" : ""}>
      1. Details
    </span>

    <span className={step === 2 ? "text-amber-400 font-semibold" : ""}>
      2. Review
    </span>

    <span className="text-slate-500">
      3. Payment
    </span>

  </div> */}

  <div className="flex justify-between text-xs md:text-sm text-slate-400">

  <span className={step >= 1 ? "text-amber-400" : ""}>
    Details
  </span>

  <span className={step >= 2 ? "text-amber-400" : ""}>
    Review
  </span>

  <span className={step >= 3 ? "text-amber-400" : ""}>
    Method
  </span>

  <span className={step >= 5 ? "text-amber-400" : ""}>
    Payment
  </span>

  <span className={step === 4 ? "text-green-400" : ""}>
    Success
  </span>

</div>

  <div className="mt-2 h-1 bg-white/10 rounded-full overflow-hidden">
    <div
      className="h-full bg-amber-400 transition-all duration-500"
      style={{
        // width: step === 1 ? "50%" : step === 2 ? "100%" : "0%",
    width:
  step === 1 ? "20%" :
  step === 2 ? "40%" :
  step === 3 ? "60%" :
  step === 4 ? "80%" :
  "100%"
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

    {/* <button
      type="button"
      className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 transition text-sm"
      onClick={() => alert("Next step: Google Maps integration")}
    >
      Select on Map
    </button> */}

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
  <div className="mt-16 flex justify-center px-4">
    
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
  <div className="mt-16 flex justify-center px-4">
    <div className="w-full max-w-2xl space-y-5">

      <h2 className="text-2xl font-bold text-amber-400 text-center">
        Choose Payment Method
      </h2>
{/* 
      <div className="space-y-4">

  <button
    onClick={() => setPaymentMethod("UPI")}
    className={`w-full p-4 rounded-xl border transition ${
      paymentMethod === "UPI"
        ? "border-amber-400 bg-amber-400/10"
        : "border-white/10 bg-white/5"
    }`}
  >
    UPI Payment
  </button>

  <button
    onClick={() => setPaymentMethod("Cash")}
    className={`w-full p-4 rounded-xl border transition ${
      paymentMethod === "Cash"
        ? "border-amber-400 bg-amber-400/10"
        : "border-white/10 bg-white/5"
    }`}
  >
    Pay on Puja Day (Cash)
  </button>

  <button
    onClick={() => setPaymentMethod("Bank")}
    className={`w-full p-4 rounded-xl border transition ${
      paymentMethod === "Bank"
        ? "border-amber-400 bg-amber-400/10"
        : "border-white/10 bg-white/5"
    }`}
  >
    Bank Transfer
  </button>

</div> */}

      <button
        onClick={() => setPaymentMethod("UPI")}
        className={`w-full p-5 rounded-2xl border text-left transition ${
          paymentMethod === "UPI"
            ? "border-amber-400 bg-amber-400/10"
            : "border-white/10 bg-white/5"
        }`}
      >
        <h3 className="font-bold text-lg">📱 UPI Payment</h3>
        <p className="text-slate-400 text-sm">
          Google Pay, PhonePe, Paytm, BHIM
        </p>
      </button>

      <button
        onClick={() => setPaymentMethod("Bank")}
        className={`w-full p-5 rounded-2xl border text-left transition ${
          paymentMethod === "Bank"
            ? "border-amber-400 bg-amber-400/10"
            : "border-white/10 bg-white/5"
        }`}
      >
        <h3 className="font-bold text-lg">🏦 Bank Transfer</h3>
        <p className="text-slate-400 text-sm">
          Direct transfer to PujaConnect account
        </p>
      </button>

      <button
      onClick={() => setPaymentMethod("Cash")}
        className={`w-full p-5 rounded-2xl border text-left transition ${
          paymentMethod === "Cash"
            ? "border-amber-400 bg-amber-400/10"
            : "border-white/10 bg-white/5"
        }`}
      >
        <h3 className="font-bold text-lg">💵 Pay on Puja Day</h3>
        <p className="text-slate-400 text-sm">
          Pay directly to pandit after confirmation
        </p>
      </button>

      {paymentMethod && (
        <button
          onClick={() => setStep(5)}
          className="w-full py-4 bg-amber-400 text-black font-bold rounded-xl"
        >
          Continue
        </button>
      )}

      <button
        onClick={() => setStep(2)}
        className="w-full py-3 bg-white/10 rounded-xl"
      >
        Back
      </button>

    </div>
  </div>
)}



{step === 5 && paymentMethod === "UPI" && (
  <div className="mt-16 flex justify-center px-4">
    <div className="w-full max-w-xl space-y-5 text-center">

      <h2 className="text-2xl font-bold text-amber-400">
        UPI Payment
      </h2>

      {/* PAYMENT INFO CARD */}
      <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">

        <p className="text-slate-400">UPI ID</p>
        <p className="text-xl font-bold text-white">pujaconnect@upi</p>

        <p className="text-2xl font-bold text-amber-400">
          {selectedPandit?.price}
        </p>

        {paymentError && (
  <p className="text-red-400 text-sm text-center">
    {paymentError}
  </p>
)}

      <input
  type="text"
  placeholder="Enter UTR / Transaction Reference ID"
  value={paymentRefId}
  onChange={(e) => setPaymentRefId(e.target.value)}
  className="w-full p-3 bg-white/5 border border-white/10 rounded-xl text-sm"
/>

<p className="text-xs text-slate-400 mt-2">
  Enter UPI / Bank transaction reference ID
</p>

        <p className="text-xs text-slate-400">
          Upload payment screenshot for verification
        </p>

      </div>

      {/* BUTTON */}
      <button
onClick={async () => {
  if (!validatePayment()) return;

  setLoading(true);

  try {
    const id = crypto.randomUUID();

    await createBooking(id, {
      ritual: selectedRitual?.name,
      pandit: selectedPandit?.name,
      customer: form,
      paymentMethod,
      paymentStatus: "Pending Verification",
      paymentRefId, // ✅ IMPORTANT
      createdAt: new Date().toISOString(),
    });

    setBookingId(id);
    setStep(4);
  } catch (err) {
    console.error("Booking failed:", err);
  } finally {
    setLoading(false);
  }
}}
        className="w-full py-4 bg-green-500 text-black font-bold rounded-xl"
      >
        I Have Completed Payment
      </button>

    </div>
  </div>
)}





{step === 5 && paymentMethod === "Bank" && (
  <div className="mt-16 flex justify-center px-4">
    <div className="max-w-xl w-full space-y-5 text-center">

      <h2 className="text-2xl font-bold text-amber-400">
        Bank Transfer
      </h2>

      <div className="p-6 rounded-2xl bg-white/5 border border-white/10">

        <p>Bank Name: HDFC Bank</p>
        <p>Account Name: PujaConnect</p>
        <p>Account No: 1234567890</p>
        <p>IFSC: HDFC0001234</p>

      </div>

      {paymentError && (
  <p className="text-red-400 text-sm text-center">
    {paymentError}
  </p>
)}

      <button
onClick={async () => {
  if (!validatePayment()) return;

  setLoading(true);

  try {
    const id = crypto.randomUUID();

    await createBooking(id, {
      ritual: selectedRitual?.name,
      pandit: selectedPandit?.name,
      customer: form,
      paymentMethod,
      paymentStatus: "Pending Verification",
      paymentRefId, // ✅ IMPORTANT
      createdAt: new Date().toISOString(),
    });

    setBookingId(id);
    setStep(4);
  } catch (err) {
    console.error("Booking failed:", err);
  } finally {
    setLoading(false);
  }
}}
        className="w-full py-4 bg-green-500 text-black font-bold rounded-xl"
      >
        I Have Completed Transfer
      </button>

     <input
  type="text"
  placeholder="Enter UTR / Transaction Reference ID"
  value={paymentRefId}
  onChange={(e) => setPaymentRefId(e.target.value)}
  className="w-full p-3 bg-white/5 border border-white/10 rounded-xl text-sm"
/>

<p className="text-xs text-slate-400 mt-2">
  Enter UPI / Bank transaction reference ID
</p>

<p className="text-xs text-slate-400 mt-2">
  Upload payment screenshot for verification
</p>

    </div>
  </div>
)}



{step === 5 && paymentMethod === "Cash" && (
  <div className="mt-16 flex justify-center px-4">
    <div className="max-w-xl w-full text-center space-y-5">

      <h2 className="text-2xl font-bold text-amber-400">
        Cash on Puja Day
      </h2>

      <div className="p-6 rounded-2xl bg-white/5 border border-white/10">

        <p className="text-slate-400">
          You can pay directly to the pandit after booking confirmation.
        </p>

      </div>

      <button
// onClick={async () => {
  

// const id = await createBooking({
//   ritual: selectedRitual?.name,
//   pandit: selectedPandit?.name,
//   customer: form,
//   paymentMethod,
//   paymentStatus: "Confirmed",
//   createdAt: new Date().toISOString()
// });

//   setBookingId(id);
//   setStep(4);
// }}
onClick={async () => {
  setLoading(true);

  try {
    const id = crypto.randomUUID();

    await createBooking(id, {
      ritual: selectedRitual?.name,
      pandit: selectedPandit?.name,
      customer: form,
      paymentMethod,
      paymentStatus: "Confirmed",
      createdAt: new Date().toISOString(),
    });

    setBookingId(id);
    setStep(4);
  } catch (err) {
    console.error(err);
  } finally {
    setLoading(false);
  }
}}
        className="w-full py-4 bg-green-500 text-black font-bold rounded-xl"
      >
        Confirm Booking
      </button>

    </div>
  </div>
)}







{step === 4 && (
  <div className="mt-16 flex justify-center px-4">
    <div className="w-full max-w-2xl text-center space-y-8">

      <div className="text-6xl animate-bounce">🎉</div>

      <h2 className="text-3xl font-bold text-green-400">
        Booking Confirmed Successfully!
      </h2>

      <p className="text-slate-400">
        We have received your booking. Our team will contact you soon.
      </p>

      {/* BOOKING CARD */}
      <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3 text-left">

        <div className="flex justify-between">
          <span className="text-slate-400">Booking ID</span>
          <span className="text-amber-400 font-bold">{bookingId}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">Ritual</span>
          <span>{selectedRitual?.name}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">Pandit</span>
          <span>{selectedPandit?.name}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">Date</span>
          <span>{form.date}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">Payment</span>
          {/* <span className="text-amber-400">{paymentMethod}</span> */}
          <span className="text-amber-400">
{paymentMethod === "Cash"
  ? "Not Required"
  : paymentRefId ? "Proof Provided" : "No Proof"
}
</span>
        </div>

      </div>

      {/* STATUS */}
      <div className="px-4 py-2 inline-block rounded-full bg-green-500/10 border border-green-500 text-green-400 text-sm">
        ⏳ Pending Verification
      </div>

      {/* ACTION BUTTONS */}
      <div className="space-y-3">

        <button
          onClick={() => shareOnWhatsApp(bookingId)}
          className="w-full py-4 bg-green-500 text-black font-bold rounded-xl"
        >
          📲 Share on WhatsApp
        </button>

      

        <button
          onClick={() => navigate("/")}
          className="w-full py-4 bg-amber-400 text-black font-bold rounded-xl"
        >
          Go to Home
        </button>

      </div>

    </div>
  </div>
)}








    </section>

    
  );
};

export default BookingPage;


















// import { useState } from "react";
// import { useSearchParams, useNavigate } from "react-router-dom";
// import { rituals } from "../../data/rituals";
// import { pandits } from "../../data/pandits";
// import { collection, addDoc } from "firebase/firestore";
// import { db } from "../../firebase/firebase";


// const ritualNameMap = {
//   ganesh: "Ganesh Puja",
//   griha: "Griha Shanti",
//   navgraha: "Navgraha Puja",
//   "griha-pravesh": "Griha Pravesh",
//   "marriage-puja": "Marriage Rituals",
//   "vehicle-puja": "Vehicle Puja",
//   "satyanarayan-katha": "Satyanarayan Katha",
//   "mundan-sanskar": "Mundan",
//   "navratri-puja": "Navratri Puja",
//   "diwali-lakshmi-puja": "Diwali Puja",
//   "dussehra-puja": "Dussehra Puja",
//   rudrabhishek: "Rudrabhishek",
//   "maha-mrityunjaya": "Mahamrityunjaya Jaap",
//   "lakshmi-puja": "Lakshmi Puja",
//   "saraswati-puja": "Saraswati Puja",
//   "hanuman-puja": "Hanuman Puja",
//   "business-puja": "Business Opening Puja",
//   "vastu-shanti": "Vastu Shanti",
//   namkaran: "Naamkaran",
//   upanayan: "Upanayan Sanskar",
//   annaprashan: "Annaprashan",
// };







// const BookingPage = () => {
//   const [step, setStep] = useState(1);
//   const [searchParams] = useSearchParams();
//   const navigate = useNavigate();

//   const [bookingId, setBookingId] = useState(null);
// const [loading, setLoading] = useState(false);
// const [paymentMethod, setPaymentMethod] = useState("");
// const [paymentStatus, setPaymentStatus] = useState("Pending");
// const [paymentScreenshot, setPaymentScreenshot] = useState(null);
// const [paymentError, setPaymentError] = useState("");

// const saveBooking = (data) => {
//   const existing = JSON.parse(localStorage.getItem("bookings")) || [];
//   localStorage.setItem(
//     "bookings",
//     JSON.stringify([...existing, data])
//   );
// };

//   const ritualId = searchParams.get("ritual");
//   const panditId = searchParams.get("pandit");

//   // ✅ FIXED: ritual mapping (no dependency on rituals data structure)
//   const selectedRitual = ritualId
//     ? { name: ritualNameMap[ritualId] || "Selected Ritual" }
//     : null;

//   const selectedPandit = pandits.find(
//     (p) => p.id === Number(panditId)
//   );

//   const isValidBooking = ritualId && panditId;

//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     address: "",
//     city: "",
//     date: "",
//     notes: "",
//   });



//   const testFirestore = async () => {
//   try {
//     await addDoc(collection(db, "test"), {
//       message: "Jai Shree Ram",
//       createdAt: new Date(),
//     });

//     alert("Firestore Connected Successfully");
//   } catch (err) {
//     console.error(err);
//     alert("Firestore Error");
//   }
// };



// const validatePayment = () => {
//   if (paymentMethod === "UPI" || paymentMethod === "Bank") {
//     if (!paymentScreenshot) {
//       setPaymentError("Please upload payment screenshot");
//       return false;
//     }
//   }

//   setPaymentError("");
//   return true;
// };

//   const shareOnWhatsApp = (id) => {
//   const message = `
// 🙏 Puja Booking Confirmed

// Booking ID: ${id}
// Ritual: ${selectedRitual?.name}
// Pandit: ${selectedPandit?.name}
// Date: ${form.date}

// Thank you for booking with PujaConnect 🙏
//   `;

//   const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
//   window.open(url, "_blank");
// };

//   const handlePaymentMethod = (method) => {
//   setPaymentMethod(method);
//   setPaymentScreenshot(null);
// };

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const validate = () => {
//     let newErrors = {};

//     if (!selectedPandit) newErrors.pandit = "Please select a pandit";
//     if (!selectedRitual) newErrors.ritual = "Please select a ritual";

//     if (!form.name.trim()) newErrors.name = "Name is required";
//     if (!form.phone.trim()) newErrors.phone = "Phone is required";
//     if (!form.address.trim()) newErrors.address = "Address is required";
//     if (!form.date) newErrors.date = "Please select a date";

//     setErrors(newErrors);

//     return Object.keys(newErrors).length === 0;
//   };

//   // 🚨 BLOCK INVALID ACCESS
//   if (!isValidBooking) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-[#050816] text-white px-6">
//         <div className="text-center max-w-md">
//           <h1 className="text-2xl font-bold text-red-400">
//             Invalid Booking Request
//           </h1>

//           <p className="text-slate-400 mt-3">
//             Please select both a ritual and a pandit before booking.
//           </p>

//           <button
//             onClick={() => navigate("/pandits")}
//             className="mt-6 px-6 py-3 bg-amber-400 text-black rounded-xl font-semibold"
//           >
//             Go to Pandits
//           </button>
//         </div>
//       </div>
//     );
//   }


//   return (
//     <section className="min-h-screen pt-28 bg-[#050816] text-white px-6 py-20">

//       <div className="max-w-3xl mx-auto mb-10">
//   {/* <div className="flex justify-between text-sm text-slate-400">

//     <span className={step === 1 ? "text-amber-400 font-semibold" : ""}>
//       1. Details
//     </span>

//     <span className={step === 2 ? "text-amber-400 font-semibold" : ""}>
//       2. Review
//     </span>

//     <span className="text-slate-500">
//       3. Payment
//     </span>

//   </div> */}

//   <div className="flex justify-between text-xs md:text-sm text-slate-400">

//   <span className={step >= 1 ? "text-amber-400" : ""}>
//     Details
//   </span>

//   <span className={step >= 2 ? "text-amber-400" : ""}>
//     Review
//   </span>

//   <span className={step >= 3 ? "text-amber-400" : ""}>
//     Method
//   </span>

//   <span className={step >= 5 ? "text-amber-400" : ""}>
//     Payment
//   </span>

//   <span className={step === 4 ? "text-green-400" : ""}>
//     Success
//   </span>

// </div>

//   <div className="mt-2 h-1 bg-white/10 rounded-full overflow-hidden">
//     <div
//       className="h-full bg-amber-400 transition-all duration-500"
//       style={{
//         // width: step === 1 ? "50%" : step === 2 ? "100%" : "0%",
//         width:
//   step === 1
//     ? "20%"
//     : step === 2
//     ? "40%"
//     : step === 3
//     ? "60%"
//     : step === 5
//     ? "80%"
//     : "100%"
//       }}
//     />
//   </div>
// </div>
      
//       <div className="max-w-6xl mx-auto">

//         <h1 className="text-3xl font-bold text-amber-400">
//           Complete Your Booking
//         </h1>

//         {/* ERROR */}
//         {Object.keys(errors).length > 0 && (
//           <div className="mt-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300">
//             Please fix errors before proceeding.
//           </div>
//         )}

//         <div className="grid lg:grid-cols-2 gap-10 mt-10">

//           {/* FORM */}
//           <div className="space-y-4">

//             <input
//               name="name"
//               placeholder="Full Name"
//               value={form.name}
//               onChange={handleChange}
//               className="w-full p-4 rounded-xl bg-white/5 border border-white/10"
//             />
//             {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}

//             <input
//               name="phone"
//               placeholder="Phone Number"
//               value={form.phone}
//               onChange={handleChange}
//               className="w-full p-4 rounded-xl bg-white/5 border border-white/10"
//             />
//             {errors.phone && <p className="text-red-400 text-sm">{errors.phone}</p>}

//             <input
//               name="email"
//               placeholder="Email (optional)"
//               value={form.email}
//               onChange={handleChange}
//               className="w-full p-4 rounded-xl bg-white/5 border border-white/10"
//             />

//             {/* <input
//               name="address"
//               placeholder="Full Address"
//               value={form.address}
//               onChange={handleChange}
//               className="w-full p-4 rounded-xl bg-white/5 border border-white/10"
//             />
//             {errors.address && <p className="text-red-400 text-sm">{errors.address}</p>} */}

//             <div className="space-y-3">

//   <input
//     name="address"
//     placeholder="Full Address"
//     value={form.address}
//     onChange={handleChange}
//     className="w-full p-4 rounded-xl bg-white/5 border border-white/10"
//   />

//   {errors.address && (
//     <p className="text-red-400 text-sm">{errors.address}</p>
//   )}

//   {/* MAP OPTION UI */}
//   <div className="p-4 rounded-xl border border-white/10 bg-white/5">

//     <p className="text-sm text-slate-400 mb-2">
//       📍 Or choose location from map (coming soon)
//     </p>

//     {/* <button
//       type="button"
//       className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 transition text-sm"
//       onClick={() => alert("Next step: Google Maps integration")}
//     >
//       Select on Map
//     </button> */}

//   </div>

// </div>

//             <input
//               name="city"
//               placeholder="City"
//               value={form.city}
//               onChange={handleChange}
//               className="w-full p-4 rounded-xl bg-white/5 border border-white/10"
//             />

//             <input
//               type="date"
//               name="date"
//               value={form.date}
//               onChange={handleChange}
//               className="w-full p-4 rounded-xl bg-white/5 border border-white/10"
//             />
//             {errors.date && <p className="text-red-400 text-sm">{errors.date}</p>}

//             <textarea
//               name="notes"
//               placeholder="Notes (optional)"
//               value={form.notes}
//               onChange={handleChange}
//               rows="4"
//               className="w-full p-4 rounded-xl bg-white/5 border border-white/10"
//             />

//          <button
//   onClick={() => {
//     if (validate()) {
//       setStep(2);
//     }
//   }}
//   className="w-full py-4 bg-amber-400 text-black font-bold rounded-xl hover:scale-[1.02] transition"
// >
//   Continue to Review
// </button>

//           </div>

//           {/* SUMMARY */}
//           <div className="space-y-6">

//             <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
//               <h2 className="text-amber-400 font-semibold">Ritual</h2>
//               <p className="mt-2">{selectedRitual?.name}</p>
//             </div>

//             <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
//               <h2 className="text-amber-400 font-semibold">Pandit</h2>
//               <p className="mt-2">{selectedPandit?.name}</p>
//             </div>

//             <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
//               <h2 className="text-amber-400 font-semibold">Price</h2>
//               <p className="mt-2 text-2xl font-bold">
//                 {selectedPandit?.price}
//               </p>
//             </div>

//             <div className="text-xs text-slate-500">
//             ⚡ Secure booking • Verified Pandits • Instant confirmation (next step)
//           </div>

//           </div>

//         </div>
//       </div>

//       <button onClick={testFirestore}>
//   Test Firestore
// </button>



//       {step === 2 && (
//   <div className="mt-16 flex justify-center px-4">
    
//     <div className="w-full max-w-3xl space-y-6">

//       {/* TITLE */}
//       <h2 className="text-2xl font-bold text-amber-400 text-center">
//         Review Your Booking
//       </h2>

//       {/* CARD WRAPPER */}
//       <div className="space-y-5">

//         <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center">
//           <p className="text-slate-400 text-sm">Ritual</p>
//           <p className="text-white text-lg font-medium">
//             {selectedRitual?.name}
//           </p>
//         </div>

//         <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center">
//           <p className="text-slate-400 text-sm">Pandit</p>
//           <p className="text-white text-lg font-medium">
//             {selectedPandit?.name}
//           </p>
//         </div>

//         <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center">
//           <p className="text-slate-400 text-sm">Price</p>
//           <p className="text-2xl font-bold text-amber-400">
//             {selectedPandit?.price}
//           </p>
//         </div>

//         {/* BUTTONS */}
//         <div className="space-y-3 pt-2">




//   <button
//   onClick={() => setStep(3)}
//   className="w-full py-4 bg-green-500 text-black font-bold rounded-xl"
// >
//   Proceed to Payment
// </button>

//           <button
//             onClick={() => setStep(1)}
//             className="w-full py-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition"
//           >
//             Back to Edit
//           </button>

//         </div>

//       </div>
//     </div>
//   </div>
// )}




// {step === 3 && (
//   <div className="mt-16 flex justify-center px-4">
//     <div className="w-full max-w-2xl space-y-5">

//       <h2 className="text-2xl font-bold text-amber-400 text-center">
//         Choose Payment Method
//       </h2>
// {/* 
//       <div className="space-y-4">

//   <button
//     onClick={() => setPaymentMethod("UPI")}
//     className={`w-full p-4 rounded-xl border transition ${
//       paymentMethod === "UPI"
//         ? "border-amber-400 bg-amber-400/10"
//         : "border-white/10 bg-white/5"
//     }`}
//   >
//     UPI Payment
//   </button>

//   <button
//     onClick={() => setPaymentMethod("Cash")}
//     className={`w-full p-4 rounded-xl border transition ${
//       paymentMethod === "Cash"
//         ? "border-amber-400 bg-amber-400/10"
//         : "border-white/10 bg-white/5"
//     }`}
//   >
//     Pay on Puja Day (Cash)
//   </button>

//   <button
//     onClick={() => setPaymentMethod("Bank")}
//     className={`w-full p-4 rounded-xl border transition ${
//       paymentMethod === "Bank"
//         ? "border-amber-400 bg-amber-400/10"
//         : "border-white/10 bg-white/5"
//     }`}
//   >
//     Bank Transfer
//   </button>

// </div> */}

//       <button
//         onClick={() => setPaymentMethod("UPI")}
//         className={`w-full p-5 rounded-2xl border text-left transition ${
//           paymentMethod === "UPI"
//             ? "border-amber-400 bg-amber-400/10"
//             : "border-white/10 bg-white/5"
//         }`}
//       >
//         <h3 className="font-bold text-lg">📱 UPI Payment</h3>
//         <p className="text-slate-400 text-sm">
//           Google Pay, PhonePe, Paytm, BHIM
//         </p>
//       </button>

//       <button
//         onClick={() => setPaymentMethod("Bank")}
//         className={`w-full p-5 rounded-2xl border text-left transition ${
//           paymentMethod === "Bank"
//             ? "border-amber-400 bg-amber-400/10"
//             : "border-white/10 bg-white/5"
//         }`}
//       >
//         <h3 className="font-bold text-lg">🏦 Bank Transfer</h3>
//         <p className="text-slate-400 text-sm">
//           Direct transfer to PujaConnect account
//         </p>
//       </button>

//       <button
//       onClick={() => setPaymentMethod("Cash")}
//         className={`w-full p-5 rounded-2xl border text-left transition ${
//           paymentMethod === "Cash"
//             ? "border-amber-400 bg-amber-400/10"
//             : "border-white/10 bg-white/5"
//         }`}
//       >
//         <h3 className="font-bold text-lg">💵 Pay on Puja Day</h3>
//         <p className="text-slate-400 text-sm">
//           Pay directly to pandit after confirmation
//         </p>
//       </button>

//       {paymentMethod && (
//         <button
//           onClick={() => setStep(5)}
//           className="w-full py-4 bg-amber-400 text-black font-bold rounded-xl"
//         >
//           Continue
//         </button>
//       )}

//       <button
//         onClick={() => setStep(2)}
//         className="w-full py-3 bg-white/10 rounded-xl"
//       >
//         Back
//       </button>

//     </div>
//   </div>
// )}



// {step === 5 && paymentMethod === "UPI" && (
//   <div className="mt-16 flex justify-center px-4">
//     <div className="w-full max-w-xl space-y-5 text-center">

//       <h2 className="text-2xl font-bold text-amber-400">
//         UPI Payment
//       </h2>

//       {/* PAYMENT INFO CARD */}
//       <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">

//         <p className="text-slate-400">UPI ID</p>
//         <p className="text-xl font-bold text-white">pujaconnect@upi</p>

//         <p className="text-2xl font-bold text-amber-400">
//           {selectedPandit?.price}
//         </p>

//         {paymentError && (
//   <p className="text-red-400 text-sm text-center">
//     {paymentError}
//   </p>
// )}

//         {/* FILE UPLOAD INSIDE CARD */}
//         <input
//           type="file"
//           accept="image/*"
//           onChange={(e) => setPaymentScreenshot(e.target.files[0])}
//           className="w-full p-3 bg-white/5 border border-white/10 rounded-xl text-sm"
//         />

//         <p className="text-xs text-slate-400">
//           Upload payment screenshot for verification
//         </p>

//       </div>

//       {/* BUTTON */}
//       <button
//     onClick={() => {
//   if (!validatePayment()) return;

//   const id = "BK" + Date.now();
//   saveBooking({
//     id,
//     ritual: selectedRitual?.name,
//     pandit: selectedPandit?.name,
//     form,
//     paymentMethod,
//     status: "Confirmed",
//   });
//   setBookingId(id);
//   setStep(4);
// }}
//         className="w-full py-4 bg-green-500 text-black font-bold rounded-xl"
//       >
//         I Have Completed Payment
//       </button>

//     </div>
//   </div>
// )}





// {step === 5 && paymentMethod === "Bank" && (
//   <div className="mt-16 flex justify-center px-4">
//     <div className="max-w-xl w-full space-y-5 text-center">

//       <h2 className="text-2xl font-bold text-amber-400">
//         Bank Transfer
//       </h2>

//       <div className="p-6 rounded-2xl bg-white/5 border border-white/10">

//         <p>Bank Name: HDFC Bank</p>
//         <p>Account Name: PujaConnect</p>
//         <p>Account No: 1234567890</p>
//         <p>IFSC: HDFC0001234</p>

//       </div>

//       {paymentError && (
//   <p className="text-red-400 text-sm text-center">
//     {paymentError}
//   </p>
// )}

//       <button
// onClick={() => {
//   if (!validatePayment()) return;

//   const id = "BK" + Date.now();

//   saveBooking({
//     id,
//     ritual: selectedRitual?.name,
//     pandit: selectedPandit?.name,
//     form,
//     paymentMethod,
//     paymentScreenshot,
//     status: "Pending Verification",
//   });

//   setBookingId(id);
//   setStep(4);
// }}
//         className="w-full py-4 bg-green-500 text-black font-bold rounded-xl"
//       >
//         I Have Completed Transfer
//       </button>

//       <input
//   type="file"
//   accept="image/*"
//   onChange={(e) => setPaymentScreenshot(e.target.files[0])}
//   className="w-full p-3 bg-white/5 border border-white/10 rounded-xl text-sm"
// />

// <p className="text-xs text-slate-400 mt-2">
//   Upload payment screenshot for verification
// </p>

//     </div>
//   </div>
// )}



// {step === 5 && paymentMethod === "Cash" && (
//   <div className="mt-16 flex justify-center px-4">
//     <div className="max-w-xl w-full text-center space-y-5">

//       <h2 className="text-2xl font-bold text-amber-400">
//         Cash on Puja Day
//       </h2>

//       <div className="p-6 rounded-2xl bg-white/5 border border-white/10">

//         <p className="text-slate-400">
//           You can pay directly to the pandit after booking confirmation.
//         </p>

//       </div>

//       <button
// onClick={() => {
//   const id = "BK" + Date.now();

//   saveBooking({
//     id,
//     ritual: selectedRitual?.name,
//     pandit: selectedPandit?.name,
//     form,
//     paymentMethod,
//     status: "Confirmed",
//   });

//   setBookingId(id);
//   setStep(4);
// }}
//         className="w-full py-4 bg-green-500 text-black font-bold rounded-xl"
//       >
//         Confirm Booking
//       </button>

//     </div>
//   </div>
// )}







// {step === 4 && (
//   <div className="mt-16 flex justify-center px-4">
//     <div className="w-full max-w-2xl text-center space-y-8">

//       <div className="text-6xl animate-bounce">🎉</div>

//       <h2 className="text-3xl font-bold text-green-400">
//         Booking Confirmed Successfully!
//       </h2>

//       <p className="text-slate-400">
//         We have received your booking. Our team will contact you soon.
//       </p>

//       {/* BOOKING CARD */}
//       <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3 text-left">

//         <div className="flex justify-between">
//           <span className="text-slate-400">Booking ID</span>
//           <span className="text-amber-400 font-bold">{bookingId}</span>
//         </div>

//         <div className="flex justify-between">
//           <span className="text-slate-400">Ritual</span>
//           <span>{selectedRitual?.name}</span>
//         </div>

//         <div className="flex justify-between">
//           <span className="text-slate-400">Pandit</span>
//           <span>{selectedPandit?.name}</span>
//         </div>

//         <div className="flex justify-between">
//           <span className="text-slate-400">Date</span>
//           <span>{form.date}</span>
//         </div>

//         <div className="flex justify-between">
//           <span className="text-slate-400">Payment</span>
//           {/* <span className="text-amber-400">{paymentMethod}</span> */}
//           <span className="text-amber-400">
//   {paymentMethod} ({paymentScreenshot ? "Proof Uploaded" : "No Proof"})
// </span>
//         </div>

//       </div>

//       {/* STATUS */}
//       <div className="px-4 py-2 inline-block rounded-full bg-green-500/10 border border-green-500 text-green-400 text-sm">
//         ⏳ Pending Verification
//       </div>

//       {/* ACTION BUTTONS */}
//       <div className="space-y-3">

//         <button
//           onClick={() => shareOnWhatsApp(bookingId)}
//           className="w-full py-4 bg-green-500 text-black font-bold rounded-xl"
//         >
//           📲 Share on WhatsApp
//         </button>

      

//         <button
//           onClick={() => navigate("/")}
//           className="w-full py-4 bg-amber-400 text-black font-bold rounded-xl"
//         >
//           Go to Home
//         </button>

//       </div>

//     </div>
//   </div>
// )}








//     </section>

    
//   );
// };

// export default BookingPage;











































