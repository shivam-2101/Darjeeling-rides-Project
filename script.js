// Contact card
var contactButton = document.getElementById("nav-contact");
var closeButton = document.getElementById("close-card");
var callNowButton = document.getElementById("callNow-btn");
var card = document.getElementById("contact-card");
// Bike card
var bikeCard = document.getElementById("bike-card");
var bikeCloseButton = document.getElementById("bike-close-card");
var bikeButtons = document.getElementsByClassName("bike-card-btn");
var proceedButton = document.getElementById("proceed-btn");

// contact card
function openCard() {
  card.style.display = "flex";
}

function closeCard() {
  card.style.display = "none";
}

contactButton.addEventListener("click", openCard);
callNowButton.addEventListener("click", openCard);
closeButton.addEventListener("click", closeCard);

// bike card
function bikeOpenCard(bikeData) {
  var bikeImage = document.querySelector("#bike-card .bike-card-image img");
  var bikeName = document.querySelector("#bike-card .bike-card-header h2");
  var bikePrice = document.querySelector("#bike-card .bike-price-card .bp");

  bikeImage.src = bikeData.bikeImg;
  bikeName.textContent = bikeData.bikeName;
  bikePrice.textContent = "₹" + bikeData.bikePrice;

  bikeCard.style.display = "flex";
}

function bikeCloseCard() {
  bikeCard.style.display = "none";
}

for (var i = 0; i < bikeButtons.length; i++) {
  bikeButtons[i].addEventListener("click", function () {
    var clickedBike = this.querySelector(".rental-card");
    var clickedImage = clickedBike.querySelector(".rental-img").src;
    var clickedName = clickedBike.querySelector(".bike-name").textContent;
    var clickedPrice = clickedBike
      .querySelector(".bike-price")
      .textContent.split(" ")[0]
      .replace("₹", "");

    var bikeData = {
      bikeImg: clickedImage,
      bikeName: clickedName,
      bikePrice: clickedPrice,
    };

    bikeOpenCard(bikeData);
  });
}

bikeCloseButton.addEventListener("click", bikeCloseCard);

proceedButton.addEventListener("click", function () {
  bikeCloseCard();
  openCard();
});

window.addEventListener("click", function (event) {
  if (event.target === card) {
    closeCard();
  }
});
