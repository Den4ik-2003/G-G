const name = document.getElementById("name");
const email = document.getElementById("email");
const text = document.getElementById("text");
const form = document.getElementById("myForm");
const btn = document.getElementById("send");

let emailPattern = /^[a-zA-Z0-9]{3,}@gmail\.com$/;

btn.addEventListener("click", function (event) {
  event.preventDefault();
  if (
    name.value.length > 3 &&
    emailPattern.test(email.value) &&
    text.value.length > 3
  ) {
    form.submit();
  } else {
    console.log("Error");
  }
});
