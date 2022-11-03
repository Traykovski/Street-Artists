function initArtistItemsPage() {
  console.log("This is js for artist items page");

  const artistCards = document.querySelector("#artist-cards");
  const renderCards = items.filter((item) => item.artist === currentUser);
  const createNewCardBtn = document.querySelector("#createNewCardBtn");

  console.log(renderCards);

  artistCards.innerHTML = "";
  renderCards.forEach((item) => {
    const card = createCards(item);
    artistCards.appendChild(card);
  });

  createNewCardBtn.addEventListener("click", function () {
    window.location.hash = "#artist-add-new-item-page";
  });
}

function createCards(item) {
  const { description, price, dateCreated, title, image, isPublished } = item;

  const mainDiv = document.createElement("div");
  mainDiv.classList.add("card", "artist-card");

  const cardImage = document.createElement("img");
  cardImage.classList.add("card-img-top");
  cardImage.src = image;

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const cardTitle = document.createElement("div");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = title;

  const cardPrice = document.createElement("p");
  cardPrice.classList.add("card-price");
  cardPrice.textContent = `$${price}`;

  const date = document.createElement("span");
  date.classList.add("date-created");

  const newDate = new Date(dateCreated).toLocaleDateString("en-GB");
  date.textContent = `${newDate}`;

  const cardDescription = document.createElement("p");
  cardDescription.classList.add("card-text");
  cardDescription.textContent = description;

  const divButtons = document.createElement("div");
  divButtons.classList.add("div-buttons");

  const sendToAuctionBtn = document.createElement("button");
  sendToAuctionBtn.textContent = "Send to Auction";
  sendToAuctionBtn.classList.add("btn", "send-to-auction-btn");

  sendToAuctionBtn.addEventListener("click", function () {
    const { description, price, artist, title, image, isAuctioning, dateSold } = item;

    const card = document.querySelector("#cardAuction");
    const div = document.createElement("div");
    mainDiv.classList.add("card", "card1", "mb-3", "mt-5");

    const cardImage = document.createElement("img");
    cardImage.classList.add("card-img-top", "cardImg");
    cardImage.src = image;

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const cardTitleAuction = document.createElement("h6");
    cardTitleAuction.classList.add("card-title-auction");
    cardTitleAuction.textContent = artist;

    const cardTitle = document.createElement("p");
    cardTitle.classList.add("card-title-auction");
    cardTitle.textContent = title;

    let date = document.createElement("p");
    date.textContent = `${newDate}`;

    const desc = document.createElement("p");
    desc.textContent = description;

    const cardPrice = document.createElement("div");
    cardPrice.classList.add("btn", "auc-btn");
    cardPrice.setAttribute("id", "aucPrice")
    cardPrice.textContent = `$${price / 2}`;

    card.append(div);
    div.append(cardImage, cardBody);
    cardBody.append(cardTitle, date, desc);
    cardTitle.append(cardPrice);
    
    // console.log(card);

    window.location.hash = "#auction";
    bidBtn.disabled = true;
  });

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.classList.add("btn", "remove-btn");

  removeBtn.addEventListener("click", function () {
    mainDiv.remove();
  });

  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.classList.add("btn", "btn-primary", "edit-btn");

  editButton.addEventListener("click", function () {
    fillCreateItemForm(item);

    window.location.hash = "#artist-add-new-item-page";
  });

  const publishButton = document.createElement("button");
  publishButton.textContent = isPublished ? "Unpublish" : "Publish";
  publishButton.classList.add(
    "btn",
    "mx-1",
    "publish-btn",
    `btn-${isPublished ? "success" : "light"}`
  );

  mainDiv.append(cardImage, cardBody);

  cardBody.append(cardTitle, date, cardDescription, divButtons);
  cardTitle.append(cardPrice);
  divButtons.append(sendToAuctionBtn, publishButton, removeBtn, editButton);

  return mainDiv;
}

function fillCreateItemForm(item) {
  const addNewItem = document.querySelector("#addNewItem");
  addNewItem.textContent = "Update";
  editingItem = item;

  const title = document.querySelector("#title1");
  const type = document.querySelector("#type");
  const imageUrl = document.querySelector("#imageUrl");
  const isPublished = document.querySelector("#isPublished");
  const descript = document.querySelector("#description");
  const price = document.querySelector("#price");

  title.value = item.title;
  type.value = item.type;
  imageUrl.value = item.image;
  isPublished.checked = item.isPublished;
  descript.value = item.description;
  price.value = item.price;
}
