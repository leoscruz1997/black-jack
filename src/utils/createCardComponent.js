export const createCard = (suit, view) => {
  const card = document.createElement("div");
  const front = document.createElement("div");
  const back = document.createElement("div");
  card.classList.add("card");
  front.classList.add("face", "front");
  back.classList.add("face", "back");

  const top = document.createElement("span");
  const img = document.createElement("img");
  const bottom = document.createElement("span");
  bottom.classList.add("card__bottom");
  top.textContent = bottom.textContent = view;
  img.src = `../../assets/images/${suit}.png`;

  front.append(top, img, bottom);
  card.append(front, back);

  return card;
};
