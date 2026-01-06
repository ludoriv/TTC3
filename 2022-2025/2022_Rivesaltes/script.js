const photos = 
['2022_Rivesaltes_FD/IMG-20220403-WA0000.jpg', '2022_Rivesaltes_FD/IMG-20220403-WA0001.jpg', '2022_Rivesaltes_FD/IMG-20220403-WA0002.jpg', '2022_Rivesaltes_FD/IMG-20220403-WA0004.jpg', '2022_Rivesaltes_FD/IMG-20220403-WA0005.jpg', '2022_Rivesaltes_FD/IMG-20220403-WA0006.jpg', '2022_Rivesaltes_FD/IMG-20220403-WA0007.jpg', '2022_Rivesaltes_FD/IMG-20220403-WA0008.jpg', '2022_Rivesaltes_FD/IMG-20220403-WA0012.jpg', '2022_Rivesaltes_FD/IMG-20220403-WA0013.jpg', '2022_Rivesaltes_FD/IMG-20220403-WA0014.jpg', '2022_Rivesaltes_FD/IMG-20220403-WA0015.jpg', '2022_Rivesaltes_FD/IMG-20220403-WA0016.jpg', '2022_Rivesaltes_FD/IMG-20220403-WA0017.jpg', '2022_Rivesaltes_FD/IMG-20220403-WA0022.jpg', '2022_Rivesaltes_FD/IMG-20220403-WA0024.jpg', '2022_Rivesaltes_FD/IMG-20220403-WA0026.jpg', '2022_Rivesaltes_FD/IMG-20220403-WA0028.jpg', '2022_Rivesaltes_FD/IMG-20220403-WA0029.jpg', '2022_Rivesaltes_FD/IMG-20220403-WA0030.jpg', '2022_Rivesaltes_FD/IMG-20220403-WA0031.jpg', '2022_Rivesaltes_FD/IMG-20220403-WA0032.jpg', '2022_Rivesaltes_FD/IMG-20220403-WA0033.jpg', '2022_Rivesaltes_FD/IMG-20220403-WA0035.jpg', '2022_Rivesaltes_FD/IMG-20220403-WA0036.jpg', '2022_Rivesaltes_FD/IMG-20220403-WA0043.jpg', '2022_Rivesaltes_FD/IMG-20220403-WA0044.jpg', '2022_Rivesaltes_FD/IMG-20220403-WA0045.jpg', '2022_Rivesaltes_FD/IMG-20220403-WA0062.jpg', '2022_Rivesaltes_FD/IMG-20220403-WA0064 (1).jpg'];
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