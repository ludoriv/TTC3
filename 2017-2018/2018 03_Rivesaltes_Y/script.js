const photos = 
['images_2018_03/1 paulilles FD (30).jpg', 'images_2018_03/3 Prunet CT (28).jpg', 'images_2018_03/4 La Trinité CT (38).jpg', 'images_2018_03/5 Serrabona CT (15).jpg', 'images_2018_03/HY1 Leucate.jpg', 'images_2018_03/HY51 Serrabona.jpg', 'images_2018_03/HY52 Serrabona.jpg']
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