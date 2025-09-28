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

// Mobile navigation
var hamburgerMenu = document.getElementById("hamburger-menu");
var mobileNav = document.getElementById("mobile-nav");
var mobileNavContact = document.getElementById("mobile-nav-contact");

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

// Mobile navigation functionality
function toggleMobileNav() {
  mobileNav.classList.toggle("active");
  hamburgerMenu.classList.toggle("active");
}

function closeMobileNav() {
  mobileNav.classList.remove("active");
  hamburgerMenu.classList.remove("active");
}

// Event listeners for mobile navigation
if (hamburgerMenu) {
  hamburgerMenu.addEventListener("click", toggleMobileNav);
}

if (mobileNavContact) {
  mobileNavContact.addEventListener("click", function () {
    closeMobileNav();
    openCard();
  });
}

// Close mobile nav when clicking on nav links
var mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
mobileNavLinks.forEach(function (link) {
  link.addEventListener("click", closeMobileNav);
});

// Close mobile nav when clicking outside
document.addEventListener("click", function (event) {
  if (
    !hamburgerMenu.contains(event.target) &&
    !mobileNav.contains(event.target)
  ) {
    closeMobileNav();
  }
});
