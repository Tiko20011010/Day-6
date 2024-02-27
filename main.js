let currentIndex = 0;
let images = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
];

let sliderImage = document.getElementById("slider-image");

function showImage() {
  sliderImage.src = images[currentIndex];
}

function nextImage() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0; 
  }
  showImage();
}

function prevImage() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1; 
  }
  showImage();
}

showImage();
