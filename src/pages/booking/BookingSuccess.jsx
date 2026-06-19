import { Link } from "react-router-dom";

const BookingSuccess = () => {
  const data = JSON.parse(localStorage.getItem("booking"));

  return (
    <div className="min-h-screen bg-[#050816] text-white flex items-center justify-center px-6">
      <div className="text-center max-w-lg bg-white/5 border border-white/10 p-10 rounded-3xl">

        <h1 className="text-3xl font-bold text-emerald-400">
          Booking Confirmed 🎉
        </h1>

        <p className="text-slate-400 mt-4">
          Your pandit has been successfully booked.
        </p>

        {data && (
          <div className="mt-6 text-left text-sm text-slate-300 space-y-2">
            <p><b>Pandit:</b> {data.pandit.name}</p>
            <p><b>Date:</b> {data.form.date}</p>
            <p><b>Time:</b> {data.form.time}</p>
            <p><b>Phone:</b> {data.form.phone}</p>
          </div>
        )}

        <Link
          to="/pandits"
          className="inline-block mt-8 px-6 py-3 bg-amber-400 text-black font-semibold rounded-xl"
        >
          Back to Pandits
        </Link>

      </div>
    </div>
  );
};

export default BookingSuccess;