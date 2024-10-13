class Manager {

    private buyCost: number;
    private boostRate: number;
    private activated: boolean;

    constructor(buyCost = 100, boostRate = 2, activated = false){
        this.boostRate = boostRate;
        this.buyCost = buyCost;
        this.activated = activated;
    }
    isActivated(): number{
        if(this.activated){
            return this.boostRate;
        }
        else{
            return 1;
        }
    }


}

class Pusher {
    private level: number;
    private cost: number;
    private initialCost: number;
    private boost:number;

    constructor(level = 1, cost = 100, initialCost = 100, boost = 1){
        this.level = level;
        this.cost = cost;
        this.initialCost = initialCost;
        this.boost = boost;
    }

    upgrade(){
        this.level += 1;
    }
    newCost(){
        this.cost = this.initialCost * (this.level**1.20);
    }
    newBoost(){
        this.boost = 1*this.level  ;
    }
}

class Mine {
    private level: number;
    private mineCost: number;
    private mineIncome: number;
    private mineIncomePerSecond: number;
    private initialCost: number;
    private initialMineIncome : number;

    constructor(level = 1, mineCost = 10, mineIncome = 10, mineIncomePerSecond = 10, initialCost = 10, initialMineIncome = 10) {
        this.level = level;
        this.mineCost = mineCost;
        this.mineIncome = mineIncome;
        this.mineIncomePerSecond = mineIncomePerSecond;
        this.initialCost = initialCost;
        this.initialMineIncome  = initialMineIncome 
    }
    upgrade(){
        this.level += 1;
    }

    updateMine(){
        this.mineCost = this.initialCost * (this.level**1.15);
        this.mineIncome = this.initialMineIncome * (this.level**1.10);
        this.mineIncomePerSecond = this.mineIncome / 4
    }

}


    const Mine1 = new Mine();
    const Mine2 = new Mine();
    const Mine3 = new Mine();
    const Mine4 = new Mine();
    const Mine5 = new Mine();


        Mine1.constructor(1,10,10,10,10,10);
        Mine2.constructor(100,1000,1000,1000,1000,1000);
        Mine3.constructor(10000,100000,100000,100000,100000,100000);
        Mine4.constructor(1000000,10000000,10000000,10000000,10000000,10000000);
        Mine5.constructor(100000000,1000000000,1000000000,1000000000,1000000000);
    Mine1.constructor(1,10,10,10,10,10);
    Mine2.constructor(100,1000,1000,1000,1000,1000);
    Mine3.constructor(10000,100000,100000,100000,100000,100000);
    Mine4.constructor(1000000,10000000,10000000,10000000,10000000,10000000);
    Mine5.constructor(100000000,1000000000,1000000000,1000000000,1000000000);
    const Manager1 = new Manager();
    const Manager2 = new Manager();
    const Manager3 = new Manager();
    const Manager4 = new Manager();
    const Manager5 = new Manager();
    Manager1.constructor(100,2,false);
    Manager2.constructor(10000,2,false);
    Manager3.constructor(1000000,2,false);
    Manager4.constructor(100000000,2,false);
    Manager5.constructor(10000000000,2,false);
    const pusher = new Pusher ();
    pusher.constructor(1,100,100,1);
