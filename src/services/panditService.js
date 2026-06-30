import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

import { db } from "../firebase/firebase";

// 🔥 Collection reference
const panditRef = collection(db, "pandits");

/**
 * ➕ Create Pandit
 */
export const createPandit = async (data) => {
  try {
    // 🔐 STEP 1: Create Auth Account
    const tempPassword = "pandit@123"; // default (we can improve later)

    const userCredential = await createUserWithEmailAndPassword(
      auth,
      data.email,
      tempPassword
    );

    const user = userCredential.user;

    // 🧾 STEP 2: Store in Firestore
    const docRef = await addDoc(panditRef, {
      uid: user.uid,
      name: data.name,
      email: data.email,
      phone: data.phone,
      city: data.city,
      experience: data.experience || 0,
      languages: data.languages || [],
      specialization: data.specialization || [],
      rating: 0,
      reviews: 0,
      totalBookings: 0,
      completedBookings: 0,
      earnings: 0,
      status: "Active",
      availability: "Available",
      createdAt: serverTimestamp(),
    });

    return docRef.id;
  } catch (error) {
    console.error("Error creating pandit:", error);
    throw error;
  }
};
/**
 * 📥 Get all pandits
 */
export const getPandits = async () => {
  try {
    const snapshot = await getDocs(panditRef);

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error fetching pandits:", error);
    return [];
  }
};

/**
 * ✏️ Update pandit
 */
export const updatePandit = async (id, data) => {
  try {
    const ref = doc(db, "pandits", id);
    await updateDoc(ref, data);
  } catch (error) {
    console.error("Error updating pandit:", error);
  }
};

/**
 * ❌ Delete pandit (soft delete recommended later)
 */
export const deletePandit = async (id) => {
  try {
    await deleteDoc(doc(db, "pandits", id));
  } catch (error) {
    console.error("Error deleting pandit:", error);
  }
};