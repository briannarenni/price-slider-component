const slider = document.querySelector('#slider-bar');
const toggle = document.querySelector('#toggle-box');
const viewsElement = document.querySelector('.views');
const priceElements = document.querySelectorAll('.price');

const pricingData = [
  { views: '10K', price: 8 },
  { views: '50K', price: 12 },
  { views: '100K', price: 16 },
  { views: '500K', price: 24 },
  { views: '1M', price: 36 }
];

viewsElement.textContent = pricingData[2].views;
priceElements.forEach((element) => {
  element.textContent = `$${pricingData[2].price}.00`;
});

slider.addEventListener('input', function () {
  const index = parseInt(slider.value, 10);
  viewsElement.textContent = pricingData[index].views;
  priceElements.forEach((element) => {
    element.textContent = `$${pricingData[index].price}.00`;
  });
});

// If the visitor switches the toggle to yearly billing, a 25% discount should be applied to all prices.
function updatePrice() {
  const index = parseInt(slider.value, 10);
  let price = pricingData[index].price;

  if (toggle.checked) {
    price *= 0.75;
  }

  viewsElement.textContent = pricingData[index].views;
  priceElements.forEach((element) => {
    element.textContent = `$${price.toFixed(2)}`;
  });
}

toggle.addEventListener('change', updatePrice);
slider.addEventListener('input', updatePrice);

updatePrice();
