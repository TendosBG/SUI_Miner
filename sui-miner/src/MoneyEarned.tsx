import React, { useEffect, useState } from 'react';
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from './firebaseConfig'; // Import de la configuration Firebase

const MoneyEarningComponent: React.FC = () => {
  const [money, setMoney] = useState(0);
  const [loading, setLoading] = useState(true);
  const [intervalTime, setIntervalTime] = useState(5000); // Temps d'attente entre chaque gain (en millisecondes)

  const userId = "user123"; // ID de l'utilisateur (modifiable selon votre logique)

  // Fonction pour récupérer les données de Firebase
  const fetchUserData = async () => {
    try {
      const userRef = doc(db, "users", userId);
      const docSnap = await getDoc(userRef);
      if (docSnap.exists()) {
        const userData = docSnap.data();
        setMoney(userData.money);
      } else {
        console.log("No such document!");
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user data: ", error);
    }
  };

  // Fonction pour mettre à jour les gains sur Firebase
  const updateMoneyOnFirebase = async (newAmount: number) => {
    try {
      const userRef = doc(db, "users", userId);
      await updateDoc(userRef, {
        money: newAmount,
      });
    } catch (error) {
      console.error("Error updating money: ", error);
    }
  };

  useEffect(() => {
    // Récupérer les données utilisateur une fois que le composant est monté
    fetchUserData();

    // Démarrer l'intervalle pour augmenter les gains à chaque période définie
    const interval = setInterval(() => {
      setMoney((prevMoney) => {
        const newMoney = prevMoney + 10; // Ajouter 10 unités d'argent à chaque intervalle
        updateMoneyOnFirebase(newMoney); // Mettre à jour sur Firebase
        return newMoney;
      });
    }, intervalTime);

    // Nettoyage de l'intervalle lorsque le composant est démonté
    return () => clearInterval(interval);
  }, [intervalTime]);

  if (loading) {
    return <div>Chargement des données...</div>;
  }

  return (
    <div>
      <h1>Vos gains</h1>
      <p>Argent actuel: {money} €</p>
      <p>Gains toutes les {intervalTime / 1000} secondes</p>
    </div>
  );
};

export default MoneyEarningComponent;
