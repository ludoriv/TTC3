const photos = 
['images_2012_05/IMG_2362.jpg', 'images_2012_05/IMG_2363.JPG', 'images_2012_05/IMG_2364.jpg', 'images_2012_05/IMG_2365.jpg', 'images_2012_05/IMG_2366.JPG', 'images_2012_05/IMG_2368.jpg', 'images_2012_05/P1080098.jpg', 'images_2012_05/P1080287.jpg', 'images_2012_05/P1080335.JPG', 'images_2012_05/TTC_Stmandrier(129).jpg', 'images_2012_05/TTC_Stmandrier(131).JPG']

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