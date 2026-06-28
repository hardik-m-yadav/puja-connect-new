import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/firebase";

export const createNotification = async ({
  type,
  message,
  bookingId = null,
}) => {
  try {
    await addDoc(collection(db, "notifications"), {
      type,
      message,
      bookingId,
      read: false,
      createdAt: serverTimestamp(),
    });
  } catch (err) {
    console.error("Notification error:", err);
  }
};