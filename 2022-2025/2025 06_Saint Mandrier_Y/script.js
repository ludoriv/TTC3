const photos = 
['images_2025_06/20250614_174554.jpg', 'images_2025_06/20250615_201903.jpg', 'images_2025_06/20250615_202021.jpg', 'images_2025_06/20250615_202023.jpg', 'images_2025_06/IMG-20250613-WA0002.jpg', 'images_2025_06/IMG-20250613-WA0004.jpg', 'images_2025_06/IMG-20250613-WA0006.jpg', 'images_2025_06/IMG-20250613-WA0018.jpg']

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