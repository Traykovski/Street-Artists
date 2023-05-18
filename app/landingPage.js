function initLandingPage() {
  // console.log("This is js for landing page");

  populateSelect();
}
// dropdown with artists
function populateSelect() {
  const userArtist = document.querySelector("#users");

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) => {
      userArtist.innerHTML = '<option value="">Choose</option>';

      users.forEach((user) => {
        userArtist.innerHTML += `<option value="${user.name}">${user.name}</option>`;
      });
      userArtist.addEventListener("change", function (e) {
        currentUser = e.target.value;
      });
    });
}
