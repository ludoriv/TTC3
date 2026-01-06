const photos = 
['images_2023_06/IMG-20230624-WA0003.jpg', 'images_2023_06/IMG-20230624-WA0005.jpg', 'images_2023_06/IMG-20230624-WA0008.jpg', 'images_2023_06/IMG-20230625-WA0010.jpg', 'images_2023_06/IMG-20230626-WA0004.jpg', 'images_2023_06/IMG-20230626-WA0006.jpg', 'images_2023_06/IMG-20230626-WA0007.jpg', 'images_2023_06/IMG-20230626-WA0010.jpg', 'images_2023_06/IMG-20230626-WA0011.jpg', 'images_2023_06/IMG-20230626-WA0012.jpg', 'images_2023_06/IMG_20230622_172052_edit_22411133439287.jpg', 'images_2023_06/IMG_20230623_201031.jpg', 'images_2023_06/IMG_20230625_084102_edit_51388637977053.jpg', 'images_2023_06/IMG_20230625_090305_edit_50963890722951.jpg', 'images_2023_06/IMG_20230625_090352.jpg', 'images_2023_06/IMG_20230625_091109_edit_50904294215668.jpg']

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