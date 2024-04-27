
let liCards = document.querySelectorAll(".carousel-cards li");
let index = 0;

function show(count) {
    index = index + count;
    index = Math.min(Math.max(index, 0), liCards.length - 1);
    liCards[index].scrollIntoView({ behavior: "smooth" });
}
  
