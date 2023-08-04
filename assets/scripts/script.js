// Get the form and relevant fields
let form = document.querySelector(".form");
let emailField = form.querySelector("#email_id");
let errorMessage = document.createElement("span");
let errorIcon = document.createElement("i");
const downloadButton = document.getElementById("my-cv-button");

// Email validation function
function validateEmail() {
  let email = emailField.value.trim();
  let pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  if (pattern.test(email)) {
    errorMessage.textContent = "";
    emailField.classList.remove("error");
    errorIcon.style.display = "none";
    return true;
  } else {
    errorMessage.textContent = "Sorry. Invalid format here.";
    errorMessage.style.color = "#FF6F5B";
    emailField.classList.add("error");
    errorIcon.className = "fas fa-exclamation-circle";
    errorIcon.style.color = "#FF6F5B";
    errorIcon.style.marginLeft = "15px";
    errorIcon.style.marginRight = "15px";
    errorIcon.style.display = "inline-block";
    errorIcon.style.fontSize = "18px";
    return false;
  }
}

// Form submit event
form.addEventListener("submit", function (event) {
  if (!validateEmail()) {
    // If the email is not valid, prevent form submission
    event.preventDefault();
  }
});

// Email field input event
emailField.addEventListener("input", function () {
  validateEmail();
});

// Insert error message and icon elements after the email field
emailField.parentNode.insertBefore(errorMessage, emailField.nextSibling);
emailField.parentNode.insertBefore(errorIcon, emailField.nextSibling);

// CV file download
const fileURL = "https://drive.google.com/uc?id=101TAzLt4N352RFR4p77OlBGFzgrnPzZy&export=download";

downloadButton.addEventListener("click", () => {
    window.location.href = fileURL;
});
