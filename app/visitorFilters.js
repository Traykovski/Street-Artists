function initVisitorFiltersPage() {
  console.log("Welcome to visitor filters page");

  populateArtists();

  let visitorBid = document.querySelector("#visitorFilterAuc");

  visitorBid.addEventListener("click", function () {
    window.location.hash = "#auction";
    bidBtn.disabled = false;
  });
}
const artist = document.querySelector("#artists");
function populateArtists() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) => {
      artist.innerHTML = '<option value="">Choose</option>';

      users.forEach((user) => {
        artist.innerHTML += `<option value="${user.name}">${user.name}</option>`;
      });
    });
}

const type = document.querySelector("#type");

itemTypes.forEach((types) => {
  console.log(types);
  type.innerHTML += `<option value="${types}">${types}</option>`;
});
