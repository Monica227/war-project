/*• For the final project you will be creating an automated version of the classic card game WAR! There are many versions of the game WAR. 
In this version there are only 2 players.
o   You do not need to do anything special when there is a tie in a round.
•   Think about how you would build this project and write your plan down. 
Consider classes such as: Card, Deck, Player, as well as what properties and methods they may include. 
o   You do not need to accept any user input, when you run your code, the entire game should play out instantly without any user input 
inside of your browser’s console.
The completed project should, when executed, do the following:
•   Deal 26 Cards to each Player from a Deck of 52 cards.
•   Iterate through the turns where each Player plays a Card.
•   The Player who played the higher card is awarded a point
o   Ties result in zero points for both Players
•   After all cards have been played, display the score and declare the winner.
•   Write a Unit Test using Mocha and Chai for at least one of the functions you write.*/


class Player { //Syntax for class and name
    constructor(name) { //Constructor function with one property "name".
        this.name = name;
        this.hand = []; //Hand array.
        this.score = 0;
    }
}

class Card {
    constructor(rank, value, suit) { //Constructor function with three properties.
        this.rank = rank;
        this.value = value;
        this.suit = suit;
    }
}

class Deck {
    constructor() {
        this.deck = []; //Deck array.

        const suits = ["Spades", "Hearts", "Clubs", "Diamonds"]; //Suits array.
        const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"] //Ranks array.
    


        for (let i = 0; i < suits.length; i++) { 
            for (let j = 0; j < ranks.length; j++) {
                this.deck.push(new Card (ranks[j], j + 2, suits[i]));
    
        }
    }

}


shuffle() {
    for (let i = this.deck.length - 1; i > 0; i--) { //Will randomly shuffle deck.
        var randomIndex = Math.floor(Math.random() * (i + 1));
        var currentIndex = this.deck[i];
        this.deck[i] = this.deck[randomIndex];
        this.deck[randomIndex] = currentIndex;
    }

    return this.deck; //Shuffled deck will be returned.
}


    deal(firstPlayer, secondPlayer) {
        firstPlayer.hand = [...this.deck.slice(0, 26)]; //Splits the deck between two players.
        secondPlayer.hand = [...this.deck.slice(26, 52)];
    }
}

class Game {
    constructor() {
        this.players = []; //Players array.
    }


    createPlayer(player) {
        let name = prompt(`Enter name of player ${player}.`, `Player ${player}`); //Prompts user to input name before proceeding to game.

        while (name == " " || name == null) {
            name = prompt(`Player must have a name. Enter name of player ${player}.`);
        }
        this.players.push(new Player(name));

        const playerDiv = document.querySelector("#" + player);
        playerDiv.textContent = name;
    }


    start() { //Game will begin.
        document.querySelector("#startbutton").disabled = true;

        this.createPlayer("one");//Player 1 created.
        this.createPlayer("two");//Player 2 created.

        const gameDeck = new Deck;
        gameDeck.shuffle();//Deck shuffled
        gameDeck.deal(this.players[0], this.players[1]);//Deck dealt.

        this.playCards(this.players[0], this.players[1]);
    }


    async playCards(playerOne, playerTwo) {
        //Cards will be dealt to players one and two.
        const playerOneScoreUl = document.querySelector(".player-one-score");
        const playerTwoScoreUl = document.querySelector(".player-two-score");
        const compareScoresUl = document.querySelector(".score-list");
        let playerOneTotalScore = document.querySelector("#player-one-total-score");
        let playerTwoTotalScore = document.querySelector("#player-two-score");
        let winner = document.querySelector("winner");
    
    
    for (let i = 0; i < this.players[0].hand.length; i++) { //Loops to the given score or total.
        var playerOneCard = playerOne.hand[i];
        var playerTwoCard = playerTwo.hand[i];

        this.printCardPlayerOne(playerOneScoreUl, playerOneCard);
        this.printCardPlayerTwo(playerTwoScoreUl, playerTwoCard);

        if (playerOneCard.value > playerTwoCard.value) { //If player one's score is larger than player two's, player one wins the game.
            this.printScore(`${playerOne.name} wins!`, compareScoresUl);
            playerOne.score++;
        } else if (playerOneCard.value < playerTwoCard.value) { //If player one's score is smaller than player two's, player two wins the game.
            this.printScore(`${playerTwo.name} wins!`, compareScoresUl);
            playerTwo.score++;
        } else if (playerOneCard.value === playerTwoCard.value) { //If player one and two tie no points will be awareded to either player.
            this.printScore(`It's a tie! No points awarded.`, compareScoresUl)
        }

        playerOneTotalScore.innerHTML = `Score: ${playerOne.score}`;
        playerTwoTotalScore.innerHTML = `Score: ${playerTwo.score}`;
        await this.timer(600);
    }
    
    //States who the final winner is in the game.
    if(playerOne.score > playerTwo.score) { 
        winner.innerHTML = `${playerOne.name} Wins!`;
    } else if (playerOne.score < playerTwo.score) {
        winner.innerHTML = `${playerTwo.name} Wins!`;
    } else if (playerOne.score === playerTwo.score) {
        winner.innerHTML = `It's a tie! No one wins this game of war.`;
    }
    
    //User will have the choice to restart game.
    document.querySelector("#startbutton").setAttribute("onclick", "location.reload();");
    document.querySelector("#startbutton").disabled = false;
    document.querySelector("#startbutton").innerHTML = "Play Again"; //Menu app will pop up asking user if they want to play again.
    }
    
    //Player one info is given whether they are winning or not.
    printCardPlayerOne(playerOneScoreUl, card) {
        var playerOneScoreLi = document.createElement("li");
        playerOneScoreLi.appendChild(document.createTextNode(card.rank + " of " + card.suit));
        playerOneScoreUl.appendChild(playerOneScoreLi);
    }

    //Player two info is applied the same as stated above.
    printCardPlayerTwo(playerTwoScoreUl, card) {
        var playerTwoScoreLi = document.createElement("li");
        playerTwoScoreLi.appendChild(document.createTextNode(card.rank + " of " + card.suit));
        playerTwoScoreUl.appendChild(playerTwoScoreLi);
    }
    
    //Updates calculated score throughout game.
    printScore(winner, compareScoresUl) {
        var compareScoresLi = document.createElement("li");
        compareScoresLi.appendChild(document.createTextNode(winner));
        compareScoresUl.appendChild(compareScoresLi);
    }
    
    //Keeps track of the progress of the game ex how fast it's going.
    time = ms => new Promise(res => setTimeout(res, ms));
    }

    var war = new Game;
