//your JS code here. If required.
const form = document.getElementById("form");
const ageInput = document.getElementById("age");
const nameInput = document.getElementById("name");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const age = ageInput.value;
  const name = nameInput.value.trim();

  // Validate inputs
  if (age === "" || name === "") {
    alert("Please enter valid details.");
    return;
  }

  // Create Promise
  const votingPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {

      if (Number(age) > 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }

    }, 4000);
  });

  // Handle Promise
  votingPromise
    .then(function (message) {
      alert(message);
    })
    .catch(function (message) {
      alert(message);
    });
});