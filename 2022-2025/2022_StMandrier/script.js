const photos = 
["2022_Kayak/IMG-20221016-WA0009.jpg", "2022_Kayak/IMG-20221016-WA0010.jpg", "2022_Kayak/IMG-20251204-WA0000.jpg"]
;
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