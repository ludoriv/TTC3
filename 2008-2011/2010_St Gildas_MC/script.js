const photos = 
["images_2010/P1000439.JPG",
"images_2010/P1000444.JPG",
"images_2010/P1000448.JPG",
"images_2010/P1000449.JPG",
"images_2010/P1000473.JPG",
"images_2010/P1000488.JPG",
"images_2010/P1000497.JPG",
"images_2010/P1000504.JPG",
"images_2010/rossetbretagneg09.JPG",
"images_2010/rossetbretagneg11.JPG",
"images_2010/rossetbretagneg24.JPG",
"images_2010/rossetmissionsg04.JPG"]

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