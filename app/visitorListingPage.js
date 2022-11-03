function initVisitorListingPage() {
  console.log("This is js for visitor listing page");

  const cardContainer = document.querySelector("#cardContainer");

  const publishedItems = items.filter((item) => item.isPublished);

  const title = document.querySelector("#title");
  const min = document.querySelector("#min");
  const max = document.querySelector("#max");
  const artists = document.querySelector("#artists");

  let byTitle = title.value;
  let byArtist = artists.value;

  let byPriceMin = min.value;
  let byPriceMax = max.value;
  let byType = type.value;

  // console.log(byType);
  const filtered = publishedItems.filter(
    (item) =>
      (byTitle ? item.title.includes(byTitle) : true) &&
      (byArtist ? item.artist === byArtist : true) &&
      (byPriceMin ? item.price >= byPriceMin : true) &&
      (byPriceMax ? item.price <= byPriceMax : true) &&
      (byType ? item.type === byType : true)
  );

  console.log(filtered);

  cardContainer.innerHTML = "";

  filtered.forEach((item) => {
    cardContainer.innerHTML += `<div class="card card1 mb-3 mt-5">
    <img src="${item.image}" class="card-img-top cardImg" alt="artist picture">
    <div class="card-body">
      <h6>${item.artist}</h6>
      <h5 class="card-title">${item.title}</h5>
      <p class="card-text">${item.description}</p>
      <div class="btn mybtn">$${item.price}</div>
    </>
  </div>`;
  });
  let visitorBid = document.querySelector("#visitorListingAuc");

  visitorBid.addEventListener("click", function () {
    window.location.hash = "#auction";
    bidBtn.disabled = false;
  });
}
