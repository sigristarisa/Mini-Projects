const form = (() => {
  const eMail = document.getElementById("eMail");
  const country = document.getElementById("country");
  const zipCode = document.getElementById("zipCode");
  const password = document.getElementById("password");
  const confirmation = document.getElementById("confirmation");
  const submitButton = document.getElementById("submitButton");

  const reEMail =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const rePassword = /^(?=.+\d)(?=.+[a-z])(?=.+[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (!eMail.value.match(reEMail)) {
      alert("Please type in a valid E-mail address");
    } else if (!country) {
      alert("Please select your country");
    } else if (!zipCode.value) {
      alert("Please type in a valid zip code");
    } else if (!password.value.match(rePassword)) {
      alert("Please type a valid password");
    } else if (password.value !== confirmation.value) {
      alert("please type the same password");
    }
  });
})();
