let myChart = "";

function initArtistHomePage() {
  console.log("This is js for artist home page");

  // print artist user name
  currentUser = document.getElementById("users").value;
  const artist2 = document.getElementById("artistName");
  const artist1 = document.getElementById("artistName1");
  const artist3 = document.getElementById("artistName3");
  const artist4 = document.getElementById("artistName4");
  artist1.innerHTML = currentUser;
  artist2.innerHTML = currentUser;
  artist3.innerHTML = currentUser;
  artist4.innerHTML = currentUser;

  // total items sold & total income
  const totalItemsSold = document.querySelector("#totalItemsSold");
  const totalItems = document.querySelector("#totalItems");
  const totalIncome = document.querySelector("#totalIncome");

  const publishedItems = items.filter(
    (item) => item.artist === currentUser && item.priceSold
  );

  const soldItems = items.filter(
    (item) => item.artist === currentUser && item.dateSold
  );

  const filteredItems = items.filter(
    (item) => item.artist === currentUser && item.priceSold
  );

  let sum = 0;

  filteredItems.forEach((element) => {
    sum += element.priceSold;
  });
  // console.log(sum)

  let solded = soldItems.length;
  totalItemsSold.innerHTML = solded;

  let published = publishedItems.length;
  totalItems.innerHTML = published;

  totalIncome.innerHTML = sum;

  // chart
  const labels = ["January", "February", "March", "April", "May", "June"];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Amount",
        backgroundColor: "rgba(161, 106, 94, 1)",
        // borderColor: "rgb(255, 99, 132)",
        // hoverBackgroundColor: "rgba(212, 76, 46, 1)",
        hoverBorderColor: "rgba(212, 76, 46, 1)",
        hoverBackgroundColor: "rgba(212, 76, 46, 1)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };

  const config = {
    type: "bar",
    data: data,
    options: {
      indexAxis: "y",
    },
  };

  if (myChart) {
    myChart.destroy();
  }

  myChart = new Chart(document.getElementById("myChart"), config);

  const last7 = document.querySelector("#last7");
  const last14 = document.querySelector("#last14");
  const last30 = document.querySelector("#last30");

  last7.addEventListener("click", function () {
    const labels = generateDates(7);
    myChart.data.labels = labels;

    const newData = labels.map((label) => {
      let sum = 0;
      filteredItems.forEach((item) => {
        if (formatDate(item.dateSold) === label) {
          sum += item.priceSold;
        }
      });
      return sum;
    });
    myChart.data.datasets[0].data = newData;
    myChart.update();
  });

  last14.addEventListener("click", function () {
    console.log("clicked last14");

    const labels = generateDates(14);
    myChart.data.labels = labels;

    const newData = labels.map((label) => {
      let sum = 0;
      filteredItems.forEach((item) => {
        if (formatDate(item.dateSold) === label) {
          sum += item.priceSold;
        }
      });
      return sum;
    });
    myChart.data.datasets[0].data = newData;
    myChart.update();
  });

  last30.addEventListener("click", function () {
    console.log("clicked last30");
    const labels = generateDates(30);
    myChart.data.labels = labels;

    const newData = labels.map((label) => {
      let sum = 0;
      filteredItems.forEach((item) => {
        if (formatDate(item.dateSold) === label) {
          sum += item.priceSold;
        }
      });
      return sum;
    });
    myChart.data.datasets[0].data = newData;
    myChart.update();
  });
}

function generateDates(daysAgo) {
  const arr = [];

  const start = new Date();
  const startDate = start.getDate();

  for (let i = 0; i < daysAgo; i++) {
    const currentDate = start.setDate(startDate - i);
    const formattedDate = formatDate(currentDate);
    arr.push(formattedDate);
  }

  return arr;
}

function formatDate(date) {
  return new Date(date).toLocaleDateString("en-GB");
}

// buttons
let buttons = document.querySelectorAll(".button-categories-link");

document.addEventListener("click", function (evt) {
  if (evt.target.classList.contains("button-categories-link")) {
    buttons.forEach(function (button) {
      button.classList.remove("active2");
    });

    evt.target.classList.add("active2");
  }
});
