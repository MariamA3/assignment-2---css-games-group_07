const cards = document.querySelectorAll(".card");

function flipCard() {
  this.classList.toggle("is-flipped");
}

cards.forEach((card) => card.addEventListener("click", flipCard));

let flippedCards = [];

function flipCard() {
  if (flippedCards.length < 2) {
    this.classList.toggle("is-flipped");
    flippedCards.push(this);
  }
  if (flippedCards.length === 2) {
    setTimeout(() => {
      if (flippedCards[0].classList[1] === flippedCards[1].classList[1]) {
        flippedCards.forEach((card) => (card.style.display = "none"));
      } else {
        flippedCards.forEach((card) => card.classList.remove("is-flipped"));
      }
      flippedCards = [];

      const remainingCards = document.querySelectorAll(
        '.card:not([style="display: none;"])'
      );
      if (remainingCards.length === 0) {
        alert("Congrats! You found all the fish!");
      }
    }, 1000);
  }
}

cards.forEach((card) => card.addEventListener("click", flipCard));
