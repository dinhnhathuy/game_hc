import { initializeApp } from 'firebase/app';
import { getFirestore, serverTimestamp } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const config = {
    apiKey: process.env.FIREBASE_APIKEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_APIKEY,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGINF_SENDER_ID,
    appId: process.env.FIREBASE_APIKEY,
}

const firebaseApp = initializeApp(config);

export const db = getFirestore(firebaseApp);
export const store = getStorage(firebaseApp);
export const auth = getAuth(firebaseApp);
export const timestamp = serverTimestamp();