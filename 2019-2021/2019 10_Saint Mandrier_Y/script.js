const photos = 
['images_2019_10/IMG_20191011_164431.jpg', 'images_2019_10/IMG_20191011_164513.jpg', 'images_2019_10/IMG_20191011_164620.jpg', 'images_2019_10/IMG_20191012_120948.jpg', 'images_2019_10/IMG_20191012_125752.jpg', 'images_2019_10/IMG_20191012_125910.jpg', 'images_2019_10/IMG_20191012_141114.jpg', 'images_2019_10/IMG_20191012_141420.jpg', 'images_2019_10/IMG_20191012_141953.jpg', 'images_2019_10/IMG_20191012_150010.jpg', 'images_2019_10/IMG_20191012_151915.jpg', 'images_2019_10/IMG_20191012_152142.jpg', 'images_2019_10/IMG_20191012_192718.jpg', 'images_2019_10/IMG_20191013_083648.jpg', 'images_2019_10/IMG_20191013_195556.jpg', 'images_2019_10/IMG_20191013_195612.jpg', 'images_2019_10/IMG_20191013_195646.jpg', 'images_2019_10/IMG_20191013_195725.jpg', 'images_2019_10/IMG_20191013_213000_1.jpg', 'images_2019_10/IMG_20191013_213032.jpg', 'images_2019_10/IMG_20191013_225217.jpg'] 

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