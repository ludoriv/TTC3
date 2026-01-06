const photos = 
['2008 03 TTC Jura/IMG_0919.JPG', '2008 03 TTC Jura/IMG_0920.JPG', '2008 03 TTC Jura/IMG_0921.JPG']

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