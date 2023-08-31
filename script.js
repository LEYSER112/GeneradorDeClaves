const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

const generateButton = document.getElementById("generate");
const copyButton = document.getElementById("copy");
const passwordOutput = document.getElementById("password");

generateButton.addEventListener("click", generatePassword);
copyButton.addEventListener("click", copyPassword);

function generatePassword() {
  const length = parseInt(document.getElementById("password-length").value);
  const includeLowercase = document.getElementById("include-lowercase").checked;
  const includeUppercase = document.getElementById("include-uppercase").checked;
  const includeNumbers = document.getElementById("include-numbers").checked;
  const includeSpecial = document.getElementById("include-special").checked;

  let charSet = "";
  if (includeLowercase) charSet += lowercaseChars;
  if (includeUppercase) charSet += uppercaseChars;
  if (includeNumbers) charSet += numberChars;
  if (includeSpecial) charSet += specialChars;

  if (charSet === "") {
    passwordOutput.textContent = "Selecciona al menos un conjunto de caracteres.";
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet[randomIndex];
  }

  passwordOutput.textContent = password;
}

function copyPassword() {
  const password = passwordOutput.textContent;
  if (password && password !== "Selecciona al menos un conjunto de caracteres.") {
    navigator.clipboard.writeText(password);
    alert("Contraseña copiada al portapapeles.");
  }
}
