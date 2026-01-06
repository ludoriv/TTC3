const photos = 
['images_2024_05/10-20240602_CT-MCL.jpg', 'images_2024_05/11-20240602_xavier carrere.jpg', 'images_2024_05/12_20240602.jpg', 'images_2024_05/18-20240602_sans VAl.jpg', 'images_2024_05/2-20250531_H&Y.jpg', 'images_2024_05/5-20240601_lud_val_pat-table.jpg', 'images_2024_05/9-20240602_HS_PT.jpg', 'images_2024_05/IMG_20240602_185801.jpg', 'images_2024_05/ttc-soustonsmai24-a 6.jpg', 'images_2024_05/TTC2024-mai-soustons-tous.jpg']

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