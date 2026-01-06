const photos = 
["images_2020/IMG-20201003-WA0009.jpg",
 "images_2020/IMG-20201003-WA0018.jpg",
 "images_2020/IMG-20201003-WA0022.jpg",
 "images_2020/IMG-20201004-WA0005.jpg",
 "images_2020/IMG-20201004-WA0007.jpg",
 "images_2020/IMG-20201004-WA0009.jpg"];
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