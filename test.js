//Used a chai test to compare the output of tests within the game. 
const assert = chair.assert;

describe("MyFunctions", function() {
    describe("#shuffle", function() {
        it("Array of 52 cards should be returned", function() {
            const deck = new Deck;
            let shuffle = deck.shuffle();
            assert.equal(shuffle.length, 52);
        });

        it("Array that is not in the same order as the original should be returned", function() {
            const controlDeck = new Deck;
            const shuffleDeck = new Deck;
            shuffle = shuffleDeck.shuffle();
            assert.notequal(shuffle, controlDeck.deck);
        });
    });
});