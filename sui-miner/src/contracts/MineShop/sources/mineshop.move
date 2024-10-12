/// Premium Tokens for the player to buy boosts and other goodies.
module mineshop::goldentoken {
    use std::option::none;
    use std::string::{Self, String};
    use sui::sui::SUI;
    use sui::balance::{Self, Balance};
    use sui::tx_context::{sender};
    use sui::coin::{Self, Coin, TreasuryCap};

    use sui::token::{Self, Token, ActionRequest};

    /// 0,01 SUI is the price of a Golden Token.
    const TOKEN_PRICE: u64 = 10_000_000;


    #[allow(lint(coin_field))]
    /// Tokens can be purchased through the `Store`.
    public struct TokenStore has key {
        id: UID,
        /// Profits from selling Gems.
        profits: Balance<SUI>,
        /// The Treasury Cap for the in-game currency.
        gem_treasury: TreasuryCap<GOLDENTOKEN>,
    }

    /// The OTW to create the in-game currency.
    public struct GOLDENTOKEN has drop {}

    // In the module initializer we create the in-game currency and define the
    // rules for different types of actions.
    fun init(otw: GOLDENTOKEN, ctx: &mut TxContext) {
        let (treasury_cap, coin_metadata) = coin::create_currency(
            otw, 0, b"GOLDENTOKEN", b"Golden Tokens", // otw, decimal, symbol, name
            b"In-game currency for SUI Miners", none(), // description, url
            ctx
        );

        // create a `TokenPolicy` for Tokens
        let (mut policy, cap) = token::new_policy(&treasury_cap, ctx);

        token::allow(&mut policy, &cap, buy_action(), ctx);
        token::allow(&mut policy, &cap, token::spend_action(), ctx);

        // create and share the TokenStore
        transfer::share_object(TokenStore {
            id: object::new(ctx),
            gem_treasury: treasury_cap,
            profits: balance::zero()
        });

        // deal with `TokenPolicy`, `CoinMetadata` and `TokenPolicyCap`
        transfer::public_freeze_object(coin_metadata);
        transfer::public_transfer(cap, ctx.sender());
        token::share_policy(policy);
    }

    /// Purchase Tokens from the TokenStore
    public fun buy_gems(
        self: &mut TokenStore, payment: Coin<SUI>, ctx: &mut TxContext
    ): (Token<GOLDENTOKEN>, ActionRequest<GOLDENTOKEN>) {
        let amount = coin::value(&payment);
        let purchased = amount * TOKEN_PRICE;

        coin::put(&mut self.profits, payment);

        // create custom request and mint some Tokens
        let tokens = token::mint(&mut self.gem_treasury, purchased, ctx);
        let req = token::new_request(buy_action(), purchased, none(), none(), ctx);

        (tokens, req)
    }

    /// The name of the `buy` action in the `TokenStore`.
    public fun buy_action(): String { string::utf8(b"buy") }
}
