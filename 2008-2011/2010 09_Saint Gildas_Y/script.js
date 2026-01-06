const photos = 
['images_2010_09/P1000442[1].JPG', 'images_2010_09/P1000443[2].JPG', 'images_2010_09/P1000448[1].JPG', 'images_2010_09/P1000485[2].JPG']
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