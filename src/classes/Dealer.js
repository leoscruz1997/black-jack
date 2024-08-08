import { createCard } from "../utils/createCardComponent.js";
import Player from "./Player.js";
const dealerTotal = document.querySelector(".dealer__total");
const dealerName = document.querySelector(".dealer__name");
const dealer = document.querySelector(".dealer__cards");

export class Dealer extends Player {
  constructor() {
    super("Dealer");
    this.hiddenCard = null;
    this.limitDraw = 16;
  }

  init(card1, card2) {
    dealerName.textContent = this.name;
    dealerTotal.textContent = 0;
    dealer.innerHTML = "";
    this.total = 0;
    this.cards = [];
    this.hiddenCard = null;
    this.draw(card1);
    this.draw(card2);
  }

  draw(card) {
    if (!this.isPlaying) return;
    if (this.total < 11 && card.view === "A") {
      card.value = 11;
    }
    this.cards.push(card);

    if (this.cards.length === 2) {
      this.hiddenCard = createCard(card.suit, card.view);
      this.hiddenCard.classList.add("hidden");
      return dealer.append(this.hiddenCard);
    }
    dealer.append(createCard(card.suit, card.view));
    this.verifyTotal();
  }

  verifyTotal() {
    this.total = this.cards.reduce((accum, card) => {
      return accum + card.value;
    }, 0);
    setTimeout(() => {
      dealerTotal.textContent = this.total;
    }, 700);
  }

  endingRound(deck) {
    this.hiddenCard.classList.remove("hidden");
    this.verifyTotal();
    return new Promise((resolve) => {
      const interval = setInterval(() => {
        if (this.total >= this.limitDraw) {
          clearInterval(interval);
          resolve();
        } else {
          this.draw(deck.removeCard());
        }
      }, 1000);
    });
  }
}
