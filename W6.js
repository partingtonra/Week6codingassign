console.log("how do?");
//These uncomments are my first thoughts going into the assigment...ideas change along the way.
//Definitely need a class called Dealer or Deck, that will contain an array that is 52 cards long
//Values will be a mixture of numbers/intergers and strings/letters
//Need a shuffle function to randomize card dealing
//Need to be able to deal the cards, but can just split the deck, so assign 26 to each player
//0-25 to player1, 26-52 to player2;  each player will have their own array/split the cards
//will need a loop to iterate through the each play/game
//all cards get played
//points are awarded
//ties result in no or zero points for each player
//display final scores


class Player {
    constructor(number, cards) {
        this.number = number;
        this.name = "Player" + this.number;
        this.score = 0;
        this.cards = cards;
    }

    incrementScore() {
        this.score++;
    }
}

class Dealer {
    constructor() {
        //this.cards array represents the value of cards 2 through Ace in a deck.
        this.cards = [2,3,4,5,6,7,8,9,10,11,12,13,14];
        for (let i = 0; i < 2; i++)
            this.cards = this.cards.concat(this.cards);
        
        this.shuffleDeck();
        
        this.player1 = new Player(1, this.cards.slice(0, 26));
        this.player2 = new Player(2, this.cards.slice(26, 52));    
    }

    shuffleDeck() {
        this.cards.sort(function() {
            return 0.5 - Math.random()
        });
    }

    startGame() {
        for (let i = 0; i < 26; i++) {
            let c1 = this.player1.cards[i];
            let c2 = this.player2.cards[i];

            if (c1 === c2) {
                continue;
            }
            if (c1 > c2) {
                this.player1.incrementScore();
            } else {
                this.player2.incrementScore();
            }
        }
        this.showScore();
    }
    showScore() {
        let winner = this.player1.score > this.player2.score ? this.player1 : this.player2;
        alert(`${winner.name} is the winner! 
        Player1's score is ${this.player1.score}
        Player2's score is ${this.player2.score}`);
    }
}

let dealer = new Dealer();

dealer.startGame();

