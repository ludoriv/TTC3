const photos = 
['Photos/HS_discours.jpg', 'Photos/HS_equipe_TTC.jpg', 'Photos/HS_poster.jpg', 'Photos/HS_poster_mcl.jpg', 'Photos/HS_tobin_cadeau.jpg', 'Photos/HS_tobin_livredor.jpg']

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