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
      if (card1.classList[1] === card2.classList[1]) {
        flippedCards.forEach((card) => (card.style.display = "none"));
      } else {
        flippedCards.forEach((card) => card.classList.remove("is-flipped"));
      }
      flippedCards.length = 0;

      const remainingCards = document.querySelectorAll(
        '.card:not([style="display: none;"])'
      );
      if (!remainingCards.length) {
        alert("Congrats! You found all the fish!");
      }
    }, 1000);
  }
}

cards.forEach((card) => card.addEventListener("click", flipCard));
