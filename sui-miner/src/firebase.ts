// firebaseConfig.ts
import { firebase, initializeApp } from "firebase/app";
import {getDatabase, ref, get, query, orderByChild, equalTo, set, update, push } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import 'firebase/database';

// Configurations Firebase (à récupérer depuis Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyDBIuU4m4v-Ow0G09acPsWdwTkhQ6GH1jo",
  authDomain: "lauzack2024.firebaseapp.com",
  projectId: "lauzack2024",
  storageBucket: "lauzack2024.appspot.com",
  messagingSenderId: "330907479236",
  appId: "1:330907479236:web:c34e9c36eb4c4d2057ad91",
};
// Initialisation de Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export function getMoney(userId) {
    return new Promise((resolve, reject) => {
      const userRef = firebase.database().ref(`users/${userId}`);
  
      userRef.once('value')
        .then(snapshot => {
          if (snapshot.exists()) {
            const userData = snapshot.val();
            resolve(userData.money);
          } else {
            reject(new Error('User not found'));
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  }
  

export { db };
