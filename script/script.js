const name = document.getElementById("name");
const email = document.getElementById("email");
const text = document.getElementById("text");
const form = document.getElementById("myForm");
const contact = document.getElementById("contact");
const concert = document.getElementById("concert");
const btn = document.getElementById("send");
const modal = document.getElementById("modal");
const clos = document.getElementById("close");
const clos2 = document.getElementById("close2");
const modalMessage = document.getElementById("modalMessage");
const modalImage = document.getElementById("modalImage");
const buyTicket = [
  document.getElementById("buyTicket1"),
  document.getElementById("buyTicket2"),
  document.getElementById("buyTicket3"),
  document.getElementById("buyTicket4"),
];
const concertModal = document.getElementById("concertModal");

let emailPattern = /^[a-zA-Z0-9._%+-]{3,}@gmail\.com$/;

function showModal(message, imageSrc) {
  modalMessage.innerText = message;
  modalImage.src = imageSrc;
  contact.classList.add("opacity");
  document.body.classList.add("modal-open");
  modal.classList.remove("none");
  modal.classList.add("block");
}

function hideModal() {
  modal.classList.remove("block");
  modal.classList.add("none");
  contact.classList.remove("opacity");
  document.body.classList.remove("modal-open");
}

btn.addEventListener("click", function (event) {
  event.preventDefault();
  if (
    name.value.length > 3 &&
    emailPattern.test(email.value) &&
    text.value.length > 3
  ) {
    showModal("Повідомлення успішно надіслане", "./Images/done.png");
    form.submit(); 
  } else {
    showModal("Заповніть всі поля правильно", "./Images/error.png");
  }
});


clos.addEventListener("click", function () {
  hideModal();
});

clos2.addEventListener("click", function () {
  concertModal.classList.remove("block");
  concertModal.classList.add("none");
  concert.classList.remove("opacity");
  document.body.classList.remove("modal-open");
});

buyTicket.forEach((buy) => {
  buy.addEventListener("click", () => {
    concertModal.classList.remove("none");
    concertModal.classList.add("block");
    document.body.classList.add("modal-open");
    concert.classList.add("opacity");
  });
});
