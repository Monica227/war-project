var deck = function() {

}

/*import Deck from "./Week 6 WAR project.js"

const computerCardSlot = document.querySelector(".computer-card-slot")


startGame()
function startGame()
const deck = new Deck()
deck.shuffle()
console.log(deck.cards)

computerCardSlot.appendChild(deck.cards[0])*/








/*const Suits = ["♠","♥","♣","♦"] //Constant variable and Suits array.
const Values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "A", "J", "Q", "K"] //Constant variable with the values available on cards.
export default class Deck { //Syntax to create a class.
    constructor(cards = newDeck()) { //Cards is passed into the constructor.
        this.cards = cards;
    }

    numberOfCards() {
        return this.cards.length //Return length of the cards array.
    }

    shuffle() {
        for (let i = this.numberOfCards.length -1; i > 0; i--) { /*For loop will have players start from the back of the deck of cards to
         the front*/
         const newIndex = Math.floor(Math.random() * (i + 1)) /*Will create a random placement inside the deck giving access to numbers 
         not used yet.*/
        const oldValue = this.cards[new index] //Card will be switched with new card.
        this.cards[new index] = this.cards[i] //Will allow cards to be shuffled randomly each time.
        this.cards[i] = oldValue
        } 
    }
}

class Card {
    constructor(suit, value) { /*Suit and value are passed into the construtor. Suit because of a spade diamond heart etc, and a value because 
    there are numbers on the cards.*/
        this.suit = suit
        this.value = value
    }
}

function newDeck() { //Creates new deck of 52 cards each one having a suit and value on it as a card should.
    return Suits.flatMap(suit => {//Loop created for the suits and values and combine them all together in an array.
        return Values.map(value =>{
            return new Card(suit,value) //A new card will be returned with a suit and value on it.
        })
    })
} 