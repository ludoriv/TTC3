const photos = 
["images_2024/20241113_105936.jpg",
"images_2024/20241127_160509.jpg",
"images_2024/20241130_124828.jpg",
"images_2024/20241130_162228.jpg",
"images_2024/20241130_170524.jpg",
"images_2024/20241201_100053.jpg",
"images_2024/20241201_100101.jpg",
"images_2024/20241201_100316.jpg",
"images_2024/20241201_100320.jpg",
"images_2024/20241201_100322.jpg",
"images_2024/20241201_121108.jpg",
"images_2024/20241201_123152.jpg",
"images_2024/20241201_124818.jpg",
"images_2024/20241201_125212.jpg",
"images_2024/20241201_130046.jpg",
"images_2024/20241201_130208.jpg",
"images_2024/20241201_130224.jpg"];

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