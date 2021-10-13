const form = (() => {
  const eMail = document.getElementById("eMail").value;
  const country = document.getElementById("country").value;
  const zipCode = document.getElementById("zipCode").value;
  const password = document.getElementById("password").value;
  const confirmation = document.getElementById("confirmation").value;
  const submitButton = document.getElementById("submitButton");

  const reEMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
  const rePassword = /^(?=.+\d)(?=.+[a-z])(?=.+[A-Z])(?=.*[a-zA-Z]).{8,}$/g;

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (!eMail.match(reEMail)) {
      alert("Please type a valid E-mail address");
    } else if (!country) {
      alert("Please select your country");
    } else if (!zipCode) {
      alert("Please type a valid zip code");
    } else if (!password.match(rePassword)) {
      alert("Please type a valid password");
    } else if (password !== confirmation) {
      alert("please type the same password");
    }
  });
})();
