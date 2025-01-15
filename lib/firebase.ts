// lib/firebase.ts
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// (Import any other services you need, e.g. auth or storage)

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  // ...
};

// Ensure Firebase is not re-initialized if already initialized
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Export anything you need (Firestore, Auth, etc.)
export const db = getFirestore(app);
// export const auth = getAuth(app);
// export const storage = getStorage(app);
// etc.
