const dialog = document.querySelector(".controls");

const handleWinner = (player, dealer) => {
  if (player.total === 21 && player.cards.length === 2) {
    return "BlackJack";
  }
  if (!player.isPlaying && player.total > 21) {
    return "Estourou";
  }
  if (!player.isPlaying && dealer.total > 21) {
    return "Estouro da Banca";
  }
  if (!player.isPlaying && player.total > dealer.total && player.total <= 21) {
    return "Ganhou";
  }
  if (!player.isPlaying && player.total < dealer.total && dealer.total <= 21) {
    return "perdeu";
  }
  if (
    !player.isPlaying &&
    player.total === dealer.total &&
    dealer.total <= 21
  ) {
    return "Empatou";
  }
  return;
};

export default handleWinner;
