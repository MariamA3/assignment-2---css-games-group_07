const cards = document.querySelectorAll(".card");
const flippedCards = [];

function flipCard() {
  if (flippedCards.length >= 2) {
    return;
  }
  
  this.classList.toggle("is-flipped");
  flippedCards.push(this);

  if (flippedCards.length === 2) {
    const [card1, card2] = flippedCards;

    setTimeout(() => {
      if (flippedCards[0].classList[2] === flippedCards[1].classList[2]) {
        flippedCards.forEach((card) => card.classList.remove("is-flipped"));
        flippedCards.length = 0;
      } else {
        if (card1.classList[1] === card2.classList[1]) {
          flippedCards.forEach((card) => (card.style.display = "none"));
        } else {
          flippedCards.forEach((card) => card.classList.remove("is-flipped"));
        }
        flippedCards.length = 0;
      }

      const remainingCards = document.querySelectorAll(
        '.card:not([style="display: none;"])'
      );
      if (remainingCards.length === 6) {
        document.body.style.background =
          "linear-gradient(180deg, rgb(205, 194, 172) 0%, rgba(0, 106, 171, 1) 77%)";
      }
      if (remainingCards.length === 2) {
        document.body.style.background =
          "linear-gradient(180deg, rgba(124,185,242,1) 0%, rgba(0,106,171,1) 77%)";
      }
      if (!remainingCards.length) {
        document.querySelector("#congrats").style.display = "flex";
      }
    }, 1000);
  }
}

cards.forEach((card) => card.addEventListener("click", flipCard));
