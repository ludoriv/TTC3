const photos = 
["images_2014/Photo10.jpg",
"images_2014/Photo11.jpg",
"images_2014/Photo2.jpg",
"images_2014/Photo3.jpg",
"images_2014/Photo4.jpg",
"images_2014/Photo5.jpg",
"images_2014/Photo6.JPG",
"images_2014/Photo7.JPG",
"images_2014/Photo8.JPG",
"images_2014/Photo9.JPG",
"images_2014/Photo_2014_7 121.jpg",
"images_2014/Photo_2014_7 122.jpg",
"images_2014/Photo_2014_7 123.jpg",
"images_2014/Photo_2014_7 129.jpg",
"images_2014/Photo_2014_7 130.jpg",
"images_2014/Photo_2014_7 131.jpg",
"images_2014/Photo_2014_7 132.jpg",
"images_2014/Photo_2014_7 133.jpg",
"images_2014/Photo_2014_7 134.jpg",
"images_2014/Photo_2014_7 135.jpg",
"images_2014/Photo_2014_7 136.jpg",
"images_2014/Photo_2014_7 137.jpg",
"images_2014/Photo_2014_7 138.jpg",
"images_2014/Photo_2014_7 139.jpg"]
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