const photos = [
  "images_2014/photo1.jpg",
  "images_2014/photo2.jpg",
  "images_2014/photo3.jpg",
  "images_2014/photo4.jpg",
  "images_2014/photo5.jpg",
  "images_2014/photo6.jpg",
  "images_2014/photo7.jpg",
  "images_2014/photo8.jpg",
  "images_2014/photo9.jpg",
  "images_2014/photo10.jpg",
  "images_2014/photo11.jpg"
];

let current = 0;
const img = document.getElementById("photo");
document.getElementById("next").addEventListener("click", () => {
  current = (current + 1) % photos.length;
  img.src = photos[current];
});

document.getElementById("prev").addEventListener("click", () => {
  current = (current - 1 + photos.length) % photos.length;
  img.src = photos[current];
});