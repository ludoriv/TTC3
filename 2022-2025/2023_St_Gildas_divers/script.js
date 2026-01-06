const photos = 
["images_2023s/2023-06-27_180634.jpg",
"images_2023s/20230623_121032.jpg",
"images_2023s/20230623_143251.jpg",
"images_2023s/20230623_143253.jpg",
"images_2023s/20230623_143300.jpg",
"images_2023s/20230623_153926.jpg",
"images_2023s/20230623_153934.jpg",
"images_2023s/20230623_154006.jpg",
"images_2023s/20230623_154008.jpg",
"images_2023s/20230623_175709.jpg",
"images_2023s/20230623_175716.jpg",
"images_2023s/20230623_181308.jpg",
"images_2023s/20230623_194927.jpg",
"images_2023s/20230625_081124.jpg",
"images_2023s/20230625_081429.jpg",
"images_2023s/20230625_081534.jpg",
"images_2023s/20230625_081543.jpg",
"images_2023s/20230625_081616.jpg",
"images_2023s/20230625_082835.jpg",
"images_2023s/20230625_090308.jpg",
"images_2023s/20230625_090335.jpg",
"images_2023s/20230625_110339.jpg",
"images_2023s/20230625_125900.jpg",
"images_2023s/F_V_Y_C.jpg",
"images_2023s/Y_H_C_P.jpg"];

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