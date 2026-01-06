const photos = 
['images_2014_10/chez MCL_2014 (34).jpg', 'images_2014_10/chez MCL_2014 (36).jpg', 'images_2014_10/chez MCL_2014 (40).jpg', 'images_2014_10/chez MCL_2014 (42).jpg', 'images_2014_10/chez MCL_2014 (66).jpg', 'images_2014_10/chez MCL_2014 (68).jpg', 'images_2014_10/chez MCL_2014 (69).jpg', 'images_2014_10/chez MCL_2014 (79).jpg', 'images_2014_10/DSC01216.jpg', 'images_2014_10/DSC01217.jpg', 'images_2014_10/DSC01219.jpg', 'images_2014_10/DSC01221.jpg', 'images_2014_10/DSC01222.jpg', 'images_2014_10/DSC01223.jpg', 'images_2014_10/DSC01224.jpg', 'images_2014_10/DSC01225.jpg', 'images_2014_10/DSC01226.jpg', 'images_2014_10/DSC01227.jpg', 'images_2014_10/DSC01228.jpg', 'images_2014_10/DSC01229.jpg', 'images_2014_10/DSC01230.jpg', 'images_2014_10/DSC01231.jpg', 'images_2014_10/DSC01232.jpg', 'images_2014_10/DSC01233.jpg', 'images_2014_10/DSC01234.jpg', 'images_2014_10/DSC01236.jpg', 'images_2014_10/DSC01237.jpg', 'images_2014_10/DSC01238.jpg', 'images_2014_10/DSC01239.jpg', 'images_2014_10/DSC01240.jpg', 'images_2014_10/DSC01241.jpg', 'images_2014_10/DSC01243.jpg', 'images_2014_10/DSC01244.jpg', 'images_2014_10/DSC01245.jpg', 'images_2014_10/DSC01246.jpg', 'images_2014_10/DSC01247.jpg', 'images_2014_10/Photo_2014_7 117.jpg', 'images_2014_10/Photo_2014_7 119.jpg', 'images_2014_10/Photo_2014_7 120.jpg', 'images_2014_10/Photo_2014_7 121.jpg', 'images_2014_10/Photo_2014_7 122.jpg', 'images_2014_10/Photo_2014_7 124.jpg', 'images_2014_10/Photo_2014_7 125.jpg', 'images_2014_10/Photo_2014_7 126.jpg', 'images_2014_10/Photo_2014_7 127.jpg', 'images_2014_10/Photo_2014_7 129.jpg', 'images_2014_10/Photo_2014_7 131.jpg', 'images_2014_10/Photo_2014_7 132.jpg', 'images_2014_10/Photo_2014_7 134.jpg', 'images_2014_10/Photo_2014_7 136.jpg', 'images_2014_10/Photo_2014_7 137.jpg', 'images_2014_10/Photo_2014_7 139.jpg']

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