const photos = 
['Sept_Dec_2020s/20201002_110600.jpg', 'Sept_Dec_2020s/20201002_115223.jpg', 'Sept_Dec_2020s/20201002_115234.jpg', 'Sept_Dec_2020s/20201002_115237.jpg', 'Sept_Dec_2020s/20201002_131530.jpg', 'Sept_Dec_2020s/20201002_172959.jpg', 'Sept_Dec_2020s/20201002_173004.jpg', 'Sept_Dec_2020s/20201002_173014.jpg', 'Sept_Dec_2020s/20201002_173124.jpg', 'Sept_Dec_2020s/20201002_181955.jpg', 'Sept_Dec_2020s/20201003_184916.jpg', 'Sept_Dec_2020s/20201003_184954.jpg', 'Sept_Dec_2020s/20201004_125940.jpg', 'Sept_Dec_2020s/20201004_130057.jpg', 'Sept_Dec_2020s/20201004_130111.jpg', 'Sept_Dec_2020s/20201004_130137.jpg', 'Sept_Dec_2020s/20201004_155456.jpg', 'Sept_Dec_2020s/20201004_155502.jpg', 'Sept_Dec_2020s/StGildas.jpg'];
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