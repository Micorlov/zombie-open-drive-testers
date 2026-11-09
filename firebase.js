// Firebase web config for project zombie-open-drive. These values are public by design; the access rules are in firestore.rules.
import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js';

export const app = initializeApp({
  apiKey: 'AIzaSyCDW4uhEUNJc56RvtK6eOG8mO4lfzDDoko',
  authDomain: 'zombie-open-drive.firebaseapp.com',
  projectId: 'zombie-open-drive',
  appId: '1:159336727498:web:71ad3968dea9552cd90533',
});
export const db = getFirestore(app);
