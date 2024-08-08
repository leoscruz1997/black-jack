import { createCard } from "../utils/createCardComponent.js";
const playerTotal = document.querySelector(".player__total");
const playerName = document.querySelector(".player__name");
const player = document.querySelector(".player__cards");

class Player {
  constructor(name) {
    this.name = name;
    this.cards = [];
    this.total = 0;
    this.isPlaying = true;
  }

  init(card1, card2) {
    this.isPlaying = true;
    playerName.textContent = this.name;
    playerTotal.textContent = 0;
    player.innerHTML = "";
    this.total = 0;
    this.cards = [];
    this.draw(card1);
    this.draw(card2);
  }

  draw(card) {
    if (!this.isPlaying) return;
    if (this.total < 11 && card.view === "A") {
      card.value = 11;
    }
    this.cards.push(card);
    this.total += card.value;
    player.append(createCard(card.suit, card.view));
    this.verifyTotal();
  }

  verifyTotal() {
    this.total = this.cards.reduce((accum, card) => {
      return accum + card.value;
    }, 0);
    setTimeout(() => {
      playerTotal.textContent = "" + this.total;
    }, 700);
  }
}

export default Player;
