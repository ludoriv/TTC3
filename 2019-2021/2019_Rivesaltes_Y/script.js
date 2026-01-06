const photos = 
['images_2019_03/20190322_111105_HDR.jpg', 'images_2019_03/Hélène et Yves_Rivesaltes.jpg', 'images_2019_03/IMG_20190322_142053.jpg', 'images_2019_03/IMG_20190322_181026.jpg', 'images_2019_03/IMG_20190322_183356.jpg', 'images_2019_03/IMG_20190322_183443.jpg', 'images_2019_03/IMG_20190322_214946.jpg', 'images_2019_03/IMG_20190323_110054.jpg', 'images_2019_03/IMG_20190323_134324.jpg', 'images_2019_03/IMG_20190323_134546.jpg', 'images_2019_03/IMG_20190323_162711.jpg', 'images_2019_03/IMG_20190323_162903.jpg', 'images_2019_03/IMG_20190323_163006.jpg', 'images_2019_03/IMG_20190323_163042.jpg', 'images_2019_03/IMG_20190323_171116.jpg', 'images_2019_03/IMG_20190324_111746.jpg', 'images_2019_03/IMG_20190324_114742.jpg', 'images_2019_03/IMG_20190324_121146.jpg', 'images_2019_03/IMG_20190324_132237.jpg', 'images_2019_03/IMG_20190324_132425.jpg', 'images_2019_03/J1-CT6_Hélène et Yves.jpg']
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