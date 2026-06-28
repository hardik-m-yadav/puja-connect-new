import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

export const updateBookingStatus = async (id, status) => {
  const ref = doc(db, "bookings", id);

  await updateDoc(ref, {
    paymentStatus: status,
    updatedAt: new Date().toISOString(),
  });
};