function initAuction() {
  console.log("This is auction page");
}

let bidBtn = document.querySelector(".bid-btn");
let bidAmount = document.querySelector("#bidAmount");
let results = document.querySelector("#auctionResults");

let htmlContents = document.documentElement.innerHTML;
localStorage.setItem("myPage", JSON.stringify(htmlContents));

bidBtn.addEventListener("click", function () {
  results.innerHTML += `<li class="mine">${bidAmount.value}</li>`;
  console.log("clicked auction bid btn");
  $(".bid-btn").click(function () {
    $(".countdown").text("2:00");
    countdown();
  });
  fetch("https://blooming-sierra-28258.herokuapp.com/bid", {
    method: "POST",
    body: JSON.stringify({ amount: bidAmount.value }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.isBidding) {
        results.innerHTML += `<li class="his">${data.bidAmount}</li>`;

        $(".countdown").text("2:00");
        countdown();
        // let time = document.querySelector("#countdown");
        // window.localStorage.setItem("time", time.innerHTML);
      } else {
        results.innerHTML += `<li class="won">You won!</li>`;
        bidBtn.disabled = true;
        let cardPrice = document.querySelector("#aucPrice");
        // cardPrice.innerHTML = `<p class="btn auc-btn">${bidAmount.value}</p>`;
        cardPrice.innerText = bidAmount.value;

        let date = document.createElement("p");
        date.textContent = new Date();
        console.log(date);

        let currentBid = document.querySelector("#currentBid");
        currentBid.innerHTML = `<span>${bidAmount.value}</span>`;
      }
    });
});

let interval;

function countdown() {
  clearInterval(interval);
  interval = setInterval(function () {
    let timer = $(".countdown").html();
    timer = timer.split(":");
    let minutes = timer[0];
    let seconds = timer[1];
    seconds -= 1;
    if (minutes < 0) return;
    else if (seconds < 0 && minutes != 0) {
      minutes -= 1;
      seconds = 59;
    } else if (seconds < 10 && length.seconds != 2) seconds = "0" + seconds;

    $(".countdown").html(minutes + ":" + seconds);

    if (minutes === 0 && seconds === 0) clearInterval(interval);
  }, 1000);
}
