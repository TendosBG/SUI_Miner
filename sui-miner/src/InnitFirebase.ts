import { doc, setDoc } from "firebase/firestore";
import { db } from './firebaseConfig';

// Classes existantes
class Manager {
  private buyCost: number;
  private boostRate: number;
  private activated: boolean;

  constructor(buyCost = 100, boostRate = 2, activated = false) {
    this.boostRate = boostRate;
    this.buyCost = buyCost;
    this.activated = activated;
  }

  toJSON() {
    return {
      buyCost: this.buyCost,
      boostRate: this.boostRate,
      activated: this.activated,
    };
  }
}

class Pusher {
  private level: number;
  private cost: number;
  private initialCost: number;
  private boost: number;

  constructor(level = 1, cost = 100, initialCost = 100, boost = 1) {
    this.level = level;
    this.cost = cost;
    this.initialCost = initialCost;
    this.boost = boost;
  }

  toJSON() {
    return {
      level: this.level,
      cost: this.cost,
      initialCost: this.initialCost,
      boost: this.boost,
    };
  }
}

class Mine {
  private level: number;
  private mineCost: number;
  private mineIncome: number;
  private mineIncomePerSecond: number;
  private initialCost: number;
  private initialMineIncome: number;

  constructor(level = 1, mineCost = 10, mineIncome = 10, mineIncomePerSecond = 10, initialCost = 10, initialMineIncome = 10) {
    this.level = level;
    this.mineCost = mineCost;
    this.mineIncome = mineIncome;
    this.mineIncomePerSecond = mineIncomePerSecond;
    this.initialCost = initialCost;
    this.initialMineIncome = initialMineIncome;
  }

  toJSON() {
    return {
      level: this.level,
      mineCost: this.mineCost,
      mineIncome: this.mineIncome,
      mineIncomePerSecond: this.mineIncomePerSecond,
      initialCost: this.initialCost,
      initialMineIncome: this.initialMineIncome,
    };
  }
}

// Fonction pour créer un nouvel utilisateur avec les valeurs initiales des objets
async function createNewUser(userId: string) {
  const manager = new Manager();
  const pusher = new Pusher();
  const mine = new Mine();

  try {
    await setDoc(doc(db, "users", userId), {
      manager: manager.toJSON(),
      pusher: pusher.toJSON(),
      mine: mine.toJSON(),
    });
    console.log("Utilisateur créé avec succès !");
  } catch (error) {
    console.error("Erreur lors de la création de l'utilisateur :", error);
  }
}


