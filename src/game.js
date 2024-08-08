import Deck from "./classes/Deck.js";
import Player from "./classes/Player.js";
import { Dealer } from "./classes/Dealer.js";
import handleWinner from "./utils/handleWinner.js";

const deck = new Deck();
const player = new Player(localStorage.getItem("name"));
const dealer = new Dealer();

const controls = document.querySelector(".controls");

const start = () => {
  controls.close();
  document.querySelector(".result").close();
  player.init(deck.removeCard(), deck.removeCard());
  dealer.init(deck.removeCard(), deck.removeCard());
  const res = handleWinner(player, dealer, deck);
  if (res) {
    document.querySelector(".result").showModal();
    document.querySelector(".result p").textContent = res;
    return;
  }
  setTimeout(() => {
    controls.showModal();
  }, 1200);
};

const hit = () => {
  controls.close();
  player.draw(deck.removeCard());
  if (player.total >= 21) {
    return stand();
  }
  setTimeout(() => {
    controls.showModal();
  }, 1200);
};
const stand = async () => {
  player.isPlaying = false;
  controls.close();
  await dealer.endingRound(deck);
  const res = handleWinner(player, dealer, deck);
  if (res) {
    document.querySelector(".result").showModal();
    document.querySelector(".result p").textContent = res;
  }
};

document.querySelector(".hit").onclick = hit;

document.querySelector(".stand").onclick = stand;

document.querySelector(".reset").onclick = start;

start();
