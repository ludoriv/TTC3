const photos = 
["images_2015/DSCN2465.JPG",
"images_2015/DSCN2466.JPG",
"images_2015/DSCN2467.JPG",
"images_2015/DSCN2468.JPG",
"images_2015/DSCN2469.JPG",
"images_2015/DSCN2470.JPG",
"images_2015/DSCN2471.JPG",
"images_2015/DSCN2474.JPG",
"images_2015/DSCN2475.JPG",
"images_2015/DSCN2476.JPG",
"images_2015/DSCN2477.JPG",
"images_2015/DSCN2479.JPG",
"images_2015/DSCN2480.JPG",
"images_2015/DSCN2481.JPG",
"images_2015/DSCN2482.JPG",
"images_2015/DSCN2483.JPG",
"images_2015/DSCN2484.JPG",
"images_2015/DSCN2486.JPG"]

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