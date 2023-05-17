let currentUser;
let editingItem;

// to close the hamburger when you click in the menu
$(document).on("click", function () {
  return $(".navbar-collapse").removeClass("show");
});

// routs
function handleRoute() {
  // event.preventDefault();
  const hash = location.hash;

  // console.log(hash);

  const allPages = document.querySelectorAll("section");

  allPages.forEach((page) => (page.style.display = "none"));

  if (hash) {
    
    document.querySelector(hash).style.display = "block";
  }

  switch (hash) {
    case "#visitor-home-page":
      initVisitorHomePage();
      break;
    case "#visitor-listing-page":
      initVisitorListingPage();
      break;
    case "#visitor-filters-page":
      initVisitorFiltersPage();
      break;
    case "#artist-home-page":
      initArtistHomePage();
      break;
    case "#artist-items-page":
      initArtistItemsPage();
      break;
    case "#artist-add-new-item-page":
      initArtistAddNewItemPage();
      break;
    case "#artist-capture-image":
      initArtistCaptureImage();
      break;
    case "#auction":
      initAuction();
      break;
    default:
      document.querySelector("#landing-page").style.display = "block";
      initLandingPage();
  }
}

window.addEventListener("hashchange", handleRoute);
window.addEventListener("load", handleRoute);

window.localStorage.setItem("items", JSON.stringify(items));
let newItems = window.localStorage.setItem("items", JSON.stringify(items));
// console.log(newItems)
