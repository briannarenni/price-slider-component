const slider = document.querySelector('#slider-bar');
const viewsElement = document.querySelector('.views');
const priceElement = document.querySelector('.price');
const toggle = document.querySelector('#toggle-box');

const pricingData = [
  { views: '10K', price: 8 },
  { views: '50K', price: 12 },
  { views: '100K', price: 16 },
  { views: '500K', price: 24 },
  { views: '1M', price: 36 }
];

viewsElement.textContent = pricingData[2].views;
priceElement.textContent = `$${pricingData[2].price}.00`;
console.log(viewsElement.textContent);

slider.addEventListener('input', function () {
  const index = parseInt(slider.value, 10);
  viewsElement.textContent = pricingData[index].views;
  priceElement.textContent = `$${pricingData[index].price}.00`;
});

// If the visitor switches the toggle to yearly billing, a 25% discount should be applied to all prices.
function updatePrice() {
  const index = parseInt(slider.value, 10);
  let price = pricingData[index].price;

  if (toggle.checked) {
    price *= 0.75;
  }

  viewsElement.textContent = pricingData[index].views;
  priceElement.textContent = `$${price.toFixed(2)}`;
}

toggle.addEventListener('change', updatePrice);
slider.addEventListener('input', updatePrice);

updatePrice();
