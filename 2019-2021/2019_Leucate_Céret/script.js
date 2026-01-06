const photos = 
["images_2019_LeucateC/Fdub-Céret (10).jpg",
"images_2019_LeucateC/Fdub-Céret (11).jpg",
"images_2019_LeucateC/Fdub-Céret (12).jpg",
"images_2019_LeucateC/Fdub-Céret (13).jpg",
"images_2019_LeucateC/Fdub-Céret (14).jpg",
"images_2019_LeucateC/Fdub-Céret (15).jpg",
"images_2019_LeucateC/Fdub-Céret (16).jpg",
"images_2019_LeucateC/Fdub-Céret (17).jpg",
"images_2019_LeucateC/Fdub-Céret (19).jpg",
"images_2019_LeucateC/Fdub-Céret (2).jpg",
"images_2019_LeucateC/Fdub-Céret (20).jpg",
"images_2019_LeucateC/Fdub-Céret (3).jpg",
"images_2019_LeucateC/Fdub-Céret (4).jpg",
"images_2019_LeucateC/Fdub-Céret (5).jpg",
"images_2019_LeucateC/Fdub-Céret (6).jpg",
"images_2019_LeucateC/Fdub-Céret (7).jpg",
"images_2019_LeucateC/Fdub-Céret (8).jpg",
"images_2019_LeucateC/Fdub-Céret (9).jpg",
"images_2019_LeucateC/Fdub_leucate (10).jpg",
"images_2019_LeucateC/Fdub_leucate (11).jpg",
"images_2019_LeucateC/Fdub_leucate (12).jpg",
"images_2019_LeucateC/Fdub_leucate (13).jpg",
"images_2019_LeucateC/Fdub_leucate (2).jpg",
"images_2019_LeucateC/Fdub_leucate (3).jpg",
"images_2019_LeucateC/Fdub_leucate (4).jpg",
"images_2019_LeucateC/Fdub_leucate (5).jpg",
"images_2019_LeucateC/Fdub_leucate (6).jpg",
"images_2019_LeucateC/Fdub_leucate (7).jpg",
"images_2019_LeucateC/Fdub_leucate (8).jpg",
"images_2019_LeucateC/Fdub_leucate (9).jpg"]
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