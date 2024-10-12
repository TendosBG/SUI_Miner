/*
/// Module: buy_premium_gems
module buy_premium_gems::buy_premium_gems;
*/
module buy_premium_gems::premium_gem_shop {

    // Définir le prix d'une gemme
    const GEM_PRICE: u64 = 100_000; // 0.01 SUI en micro-SUI

    // Struct pour représenter un Pack de Gemmes
    struct GemPack has store {
        count: u64,
    }

    // Fonction pour acheter un pack de gemmes
    public fun buy_gems(
        amount: u64,
        payment: &mut Coin<Coin<SUI>>) {

        let total_cost = amount * GEM_PRICE;

        // Vérification que l'utilisateur a suffisamment de fonds
        assert!(coin::value(payment) >= total_cost, EINSUFFICIENT_FUNDS);

        // Débit de l'utilisateur
        coin::burn(payment, total_cost);

        // Création du pack de gemmes
        let pack = GemPack { count: amount };

        // Retourner le pack (si nécessaire)
        // Par exemple, on pourrait ajouter une logique ici pour retourner ou stocker ce pack.

    }
}
