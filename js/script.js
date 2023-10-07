const optionMenu = document.querySelector(".select-menu"),
  selectBtn = optionMenu.querySelector(".select-btn"),
  options = optionMenu.querySelectorAll(".option"),
  sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

// Add a function to close the menu when you click outside of the menu and the options, and anywhere that is not part of the element of the dropdown menu.
document.addEventListener("click", (event) => {
  if (!event.target.closest(".select-menu")) {
    optionMenu.classList.remove("active");
  }
});




options.forEach(option => {
  option.addEventListener("click", () => {
    let selectedOption = option.querySelector(".option-text").innerText;
    sBtn_text.innerText = selectedOption;
    sBtn_text.style.color = "#4a535b";

    optionMenu.classList.remove("active");
  });
});

const emailInput = document.getElementById("emailInput");

emailInput.addEventListener("input", function() {
  // Check if the email is valid.
  const isValidEmail = validateEmail(emailInput.value);

  if (!emailInput.value || !isValidEmail) {
    emailInput.style.border = "1px solid red";
  } else {
    emailInput.style.border = "1px solid green";
  }

  // Remove the default browser tooltip.
  emailInput.title = "";
});

// Function to validate an email address.
function validateEmail(email) {
  const regex = new RegExp(/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
  return regex.test(email);
}

// Add a global click event listener to reset the border color when clicking outside the email input.
document.addEventListener("click", (event) => {
  if (event.target !== emailInput) {
    emailInput.style.border = "1px solid #d0d6db"; // Use the default gray border color
  }
});


document.getElementById('nameInput').addEventListener('keypress', function (event) {
  // Get the Unicode value of the character using the key property.
  const charCode = event.key.charCodeAt(0);

  // Allow letters (a-z and A-Z) and space
  if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32) {
    return true;
  }

  // Prevent other characters
  event.preventDefault();
});

function countCharacters(textarea) {
  const maxLength = parseInt(textarea.getAttribute('maxlength'));
  const currentLength = textarea.value.length;
  const charCountElement = document.getElementById('charCount');

  charCountElement.textContent = `${currentLength}/${maxLength}`;
  
  if (currentLength > maxLength) {
    textarea.value = textarea.value.slice(0, maxLength);
  }
}

function showCharacterCount() {
  const charCountElement = document.getElementById('charCount');
  charCountElement.classList.remove('hidden');
}

function hideCharacterCount() {
  const charCountElement = document.getElementById('charCount');
  charCountElement.classList.add('hidden');
}

  document.addEventListener("DOMContentLoaded", function() {
    // Get a reference to the submit button and the input fields
    var submitButton = document.getElementById("submitBtn");
    var nameInput = document.getElementById("nameInput");
    var emailInput = document.getElementById("emailInput");
    var messageInput = document.getElementById("message");

    // Add a click event listener to the submit button
    submitButton.addEventListener("click", function(event) {
      // Prevent the default form submission (if there is any)
      event.preventDefault();

      // Clear the input fields
      nameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";

      // Optionally, reset the "INTERESTED IN" dropdown to its initial state
      var interestedInDropdown = document.querySelector(".select-menu .sBtn-text");
      interestedInDropdown.textContent = "INTERESTED IN";

      // You can also reset the character count display if needed
      var charCountDisplay = document.getElementById("charCount");
      charCountDisplay.textContent = "0/200";
    });
  });

 
  
  