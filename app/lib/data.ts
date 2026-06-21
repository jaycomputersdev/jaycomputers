import { db } from "./firebase"; // your ADMIN firebase.ts
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { Lead } from "./types";

export async function listLeads(): Promise<Lead[]> {
  const q = query(collection(db, "leads"), orderBy("createdAt", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Lead, "id">),
  }));
}