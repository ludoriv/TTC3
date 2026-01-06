const photos = 
['images_2018_10/20181021_103255.jpg', 'images_2018_10/IMG_20181019_174538.jpg', 'images_2018_10/IMG_20181019_175045.jpg', 'images_2018_10/IMG_20181019_181128.jpg', 'images_2018_10/IMG_20181019_181146.jpg', 'images_2018_10/IMG_20181019_183555.jpg', 'images_2018_10/IMG_20181019_183705.jpg', 'images_2018_10/IMG_20181019_183739.jpg', 'images_2018_10/IMG_20181019_183827.jpg', 'images_2018_10/IMG_20181021_103059.jpg', 'images_2018_10/IMG_20181021_124545.jpg', 'images_2018_10/IMG_20181021_124630.jpg', 'images_2018_10/IMG_20181021_130309.jpg', 'images_2018_10/IMG_20181021_131228.jpg', 'images_2018_10/IMG_20181021_131349.jpg', 'images_2018_10/IMG_20181021_132956.jpg', 'images_2018_10/IMG_20181021_133013.jpg', 'images_2018_10/IMG_20181021_133028.jpg', 'images_2018_10/IMG_20181021_133138.jpg', 'images_2018_10/IMG_20181021_133730.jpg', 'images_2018_10/IMG_20181021_134128.jpg', 'images_2018_10/IMG_20181021_134741.jpg', 'images_2018_10/IMG_20181021_140051.jpg', 'images_2018_10/IMG_20181021_141607.jpg', 'images_2018_10/IMG_20181021_142237.jpg', 'images_2018_10/IMG_20181021_142818.jpg', 'images_2018_10/IMG_20181021_165236.jpg', 'images_2018_10/IMG_20181021_165410.jpg', 'images_2018_10/IMG_20181021_190312.jpg', 'images_2018_10/IMG_20181021_190313.jpg', 'images_2018_10/IMG_20181021_190625.jpg', 'images_2018_10/IMG_20181021_190655.jpg']
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