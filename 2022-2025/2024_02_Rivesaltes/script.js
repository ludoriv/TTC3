const photos = 
["images_2024_02_Riv/20240203_perpignan_8.jpg",
"images_2024_02_Riv/20240203_perpignan_église_st_jean.jpg",
"images_2024_02_Riv/20240203_restau_le_17_perpignan.jpg",
"images_2024_02_Riv/Huit_2024-février.jpg",
"images_2024_02_Riv/IMG_20240201_184817.jpg",
"images_2024_02_Riv/IMG_20240201_185637.jpg",
"images_2024_02_Riv/IMG_20240201_185741.jpg",
"images_2024_02_Riv/IMG_20240202_090731.jpg",
"images_2024_02_Riv/IMG_20240202_110803.jpg",
"images_2024_02_Riv/IMG_20240202_111553.jpg",
"images_2024_02_Riv/IMG_20240202_111607.jpg",
"images_2024_02_Riv/IMG_20240202_111640.jpg",
"images_2024_02_Riv/IMG_20240202_111659.jpg",
"images_2024_02_Riv/IMG_20240202_160520.jpg",
"images_2024_02_Riv/IMG_20240202_162833.jpg",
"images_2024_02_Riv/IMG_20240202_170516.jpg",
"images_2024_02_Riv/IMG_20240202_175351.jpg",
"images_2024_02_Riv/IMG_20240202_180300.jpg",
"images_2024_02_Riv/IMG_20240202_180855.jpg",
"images_2024_02_Riv/IMG_20240202_184820.jpg",
"images_2024_02_Riv/IMG_20240202_195019.jpg",
"images_2024_02_Riv/IMG_20240202_223557.jpg",
"images_2024_02_Riv/IMG_20240202_savonettes.jpg",
"images_2024_02_Riv/IMG_20240203_111725.jpg",
"images_2024_02_Riv/IMG_20240203_112110.jpg",
"images_2024_02_Riv/IMG_20240203_114138.jpg",
"images_2024_02_Riv/IMG_20240203_115145.jpg",
"images_2024_02_Riv/IMG_20240203_115446.jpg",
"images_2024_02_Riv/IMG_20240203_115924.jpg",
"images_2024_02_Riv/IMG_20240203_120620.jpg",
"images_2024_02_Riv/IMG_20240203_121901.jpg",
"images_2024_02_Riv/IMG_20240203_122350.jpg",
"images_2024_02_Riv/IMG_20240203_124737.jpg",
"images_2024_02_Riv/IMG_20240203_130318.jpg",
"images_2024_02_Riv/IMG_20240203_145938.jpg",
"images_2024_02_Riv/IMG_20240203_145949.jpg",
"images_2024_02_Riv/IMG_20240203_151320.jpg",
"images_2024_02_Riv/IMG_20240203_153517.jpg",
"images_2024_02_Riv/IMG_20240203_155927.jpg",
"images_2024_02_Riv/IMG_20240203_155949.jpg",
"images_2024_02_Riv/IMG_20240203_160020.jpg"];

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