let form = document.querySelector(".form");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // stops page reload
  alert("Your message is sent successfully");
});
