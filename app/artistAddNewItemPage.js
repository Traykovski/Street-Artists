function initArtistAddNewItemPage() {
  console.log("This is js for artist add new item page");

  const form = document.querySelector("#addEditCard");

  form.removeEventListener("submit", onSubmit);
  form.addEventListener("submit", onSubmit);

  const cancelButton = document.querySelector("#cancel");
  cancelButton.addEventListener("click", function () {
    window.location.hash = "#artist-items-page";
  });
}

function onSubmit(e) {
  e.preventDefault();

  // console.log("you clicked Add new item");

  const title = document.querySelector("#title1");
  const type = document.querySelector("#type");
  const imageUrl = document.querySelector("#imageUrl");
  const descript = document.querySelector("#description");
  const price = document.querySelector("#price");
  const isPublished = document.querySelector("#isPublished");
  const form = document.querySelector("#addEditCard");
  const preview = document.querySelector("#preview").src;

  if (editingItem) {
    const idx = items.indexOf(editingItem);
    items[idx] = {
      id: editingItem.id,
      title: title.value,
      description: descript.value,
      type: type.value,
      image: imageUrl.value,
      price: price.value,
      artist: currentUser,
      dateCreated: editingItem.dateCreated,
      isPublished: isPublished.checked,
      isAuctioning: false,
    };

    editingItem = undefined;
    const submitBtn = document.querySelector("#addNewItem");
    submitBtn.textContent = "Add";
  } else {
    const newItem = {
      id: new Date().valueOf(),
      title: title.value,
      description: descript.value,
      type: type.value,
      image: imageUrl.value || preview,
      price: price.value,
      artist: currentUser,
      dateCreated: new Date(),
      isPublished: isPublished.checked,
      isAuctioning: false,
    };

    items.unshift(newItem);
  }

  console.log(items);
  form.reset();
  window.location.hash = "#artist-items-page";
}
