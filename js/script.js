const CARD = [
    {
        paragraph: "Scooter Elétrica Voltz EV1",
        img: "./assets/img-card-1.png",
        paragraph1: "A partir de",
        price: "R$ 619,90",
        paragraph2: "Plano de 30 meses",
    },
    {
        paragraph: "Honda CB 500X",
        img: "./assets/img-card-2.png",
        paragraph1: "A partir de",
        price: "R$ 890,90",
        paragraph2: "Plano de 12 meses",
    },
];



let liCards = document.querySelectorAll(".carousel-cards li");
let index = 0;
let modalCard = document.querySelector("#modal");

function show(count) {
    index = index + count;
    index = Math.min(Math.max(index, 0), liCards.length - 1);
    liCards[index].scrollIntoView({ behavior: "smooth" });
}

function showModal(index) {
    modalCard.innerHTML = "";
    modalCard.innerHTML = ` 
    <div class="modal-card">
      <button onclick="closeModal()">
        <img src="./assets/close-btn.png" alt="close-button" />
      </button>
      <p>${CARD[index].paragraph}</p>
      <img src="${CARD[index].img}" alt="" />
      <p>${CARD[index].paragraph1}</p>
      <span>${CARD[index].price}</span>
      <p>${CARD[index].paragraph2}</p>
      <button ">Quero Comprar!</button>
    </div>
    `;
    modalCard.style.visibility = "visible";
}

function closeModal() {
    modalCard.style.visibility = "hidden";
}
