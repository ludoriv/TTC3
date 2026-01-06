const photos = 
['images_2009/Grèbe huppée.JPG', 'images_2009/P1000344.JPG', 'images_2009/P1000347.JPG', 'images_2009/P1000357.JPG', 'images_2009/P1000358.JPG', 'images_2009/P1000359.JPG', 'images_2009/P1000365.JPG', 'images_2009/P1000367.JPG', 'images_2009/P1000368.JPG', 'images_2009/P1000372.JPG', 'images_2009/P1000373.JPG', 'images_2009/P1000374.JPG', 'images_2009/P1000377.JPG', 'images_2009/P1000379.JPG', 'images_2009/P1000380.JPG', 'images_2009/P1000384.JPG', 'images_2009/P1000385.JPG', 'images_2009/P1000386.JPG', 'images_2009/P1000387.JPG', 'images_2009/P1000391.JPG', 'images_2009/P1000392.JPG', 'images_2009/P1000393.JPG', 'images_2009/P1000394.JPG', 'images_2009/P1000395.JPG', 'images_2009/P1000396.JPG', 'images_2009/P1000397.JPG', 'images_2009/P1000401.JPG', 'images_2009/P1000402.JPG', 'images_2009/P1000403.JPG', 'images_2009/P1000405.JPG', 'images_2009/P1000406.JPG', 'images_2009/P1000407.JPG']

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