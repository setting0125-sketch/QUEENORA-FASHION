import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";
import { firebaseConfig } from "./firebase-config.js";
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
window.saveQueenoraOrder = async (order) => {
  const doc = await addDoc(collection(db, "orders"), {
    ...order,
    createdAt: serverTimestamp()
  });
  return doc.id;
};
