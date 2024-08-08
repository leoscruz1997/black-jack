class Deck {
  constructor() {
    this.cards = [];
    this.build();
  }

  build() {
    const suits = ["copas", "ouros", "espadas", "paus"];
    const stats = [
      { view: "A", value: 1 },
      { view: "2", value: 2 },
      { view: "3", value: 3 },
      { view: "4", value: 4 },
      { view: "5", value: 5 },
      { view: "6", value: 6 },
      { view: "7", value: 7 },
      { view: "8", value: 8 },
      { view: "9", value: 9 },
      { view: "10", value: 10 },
      { view: "J", value: 10 },
      { view: "Q", value: 10 },
      { view: "K", value: 10 },
    ];

    for (let i = 0; i < 8; i++) {
      for (let suit of suits) {
        for (let card of stats) {
          this.cards.push({ suit, view: card.view, value: card.value });
        }
      }
    }
  }

  removeCard() {
    const randomCard = Math.floor(Math.random() * this.cards.length);
    const card = this.cards.splice(randomCard, 1)[0];
    return card;
  }
}

export default Deck;
