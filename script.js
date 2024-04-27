let slideIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  if (index >= slides.length) { slideIndex = 0; }
  if (index < 0) { slideIndex = slides.length - 1; }
  
  slides.forEach(slide => {
    slide.style.transform = `translateX(-${slideIndex * 100}%)`;
  });
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

showSlide(slideIndex);


// plain slider

// let slideIndex = 0;
const slideHeight = document.documentElement.style.getPropertyValue('--slide-height');
const slider = document.querySelector('.slider');

function showSlide(n) {
  if (n < 0) {
    slideIndex = 0;
  } else if (n > 3) {
    slideIndex = 3;
  }

  slider.style.transform = `translateY(-${slideIndex * parseInt(slideHeight)}px)`;
}

function prevSlide() {
  showSlide(slideIndex -= 1);
}

function nextSlide() {
  showSlide(slideIndex += 1);
}


// 

let currentSliderIndex = 0;

function nextSlider() {
  currentSliderIndex++;
  const sliderRow = document.querySelector('.slider-row');
  sliderRow.innerHTML = ''; // Clear existing images

  for (let i = currentSliderIndex * 4; i < (currentSliderIndex + 1) * 4; i++) {
    const sliderItem = document.createElement('div');
    sliderItem.classList.add('col', 'slider-item');
    const img = document.createElement('img');
    img.src = `image${i + 1}.jpg`; // Assuming image names are image1.jpg, image2.jpg, etc.
    img.alt = `Image ${i + 1}`;
    sliderItem.appendChild(img);
    sliderRow.appendChild(sliderItem);
  }
}