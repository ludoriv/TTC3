const photos = 
['2022_Ceret/IMG_20220402_132109', '2022_Ceret/TTC_ceret_2022_tous.jpg', '2022_Ceret/TTC_ceret_2022_tous2.jpg', '2022_Ceret/TTC_ceret_val.jpg'];
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