const photos = 
['images_2017_06/DSC03784.jpg', 'images_2017_06/DSC03785.jpg', 'images_2017_06/DSC03786.jpg', 'images_2017_06/DSC03787.jpg', 'images_2017_06/DSC03790.jpg', 'images_2017_06/DSC03791.jpg', 'images_2017_06/DSC03794.jpg', 'images_2017_06/DSC03795.jpg', 'images_2017_06/DSC03796.jpg', 'images_2017_06/DSC03797.jpg', 'images_2017_06/DSC03799.jpg', 'images_2017_06/DSC03800.jpg', 'images_2017_06/DSC03802.jpg', 'images_2017_06/DSC03804.jpg', 'images_2017_06/DSC03806.jpg', 'images_2017_06/DSC03808.jpg', 'images_2017_06/DSC03809.jpg', 'images_2017_06/DSC03813.jpg', 'images_2017_06/DSC03814.jpg', 'images_2017_06/DSC03818.jpg', 'images_2017_06/DSC03819.jpg', 'images_2017_06/DSC03820.jpg', 'images_2017_06/DSC03821.jpg', 'images_2017_06/DSC03823.jpg', 'images_2017_06/DSC03824.jpg']

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