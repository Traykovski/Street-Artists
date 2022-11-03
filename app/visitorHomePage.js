function initVisitorHomePage() {
  console.log("This is js for visitor home page");

  let visitorBid = document.querySelector(".auction-icon");

  visitorBid.addEventListener("click", function () {
    window.location.hash = "#auction";
    bidBtn.disabled = false;
  });
}
