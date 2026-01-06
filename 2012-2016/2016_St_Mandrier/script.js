const photos = 
["images_2016/DSCN2756.JPG",
"images_2016/DSCN2757.JPG",
"images_2016/DSCN2758.JPG",
"images_2016/DSCN2759.JPG",
"images_2016/DSCN2760.JPG",
"images_2016/DSCN2761.JPG",
"images_2016/DSCN2762.JPG",
"images_2016/DSCN2763.JPG",
"images_2016/DSCN2764.JPG",
"images_2016/DSCN2765.JPG",
"images_2016/DSCN2767.JPG",
"images_2016/DSCN2770.JPG",
"images_2016/DSCN2771.JPG",
"images_2016/DSCN2772.JPG",
"images_2016/DSCN2773.JPG",
"images_2016/DSCN2774.JPG",
"images_2016/DSCN2775.JPG",
"images_2016/DSCN2776.JPG",
"images_2016/DSCN2777.JPG",
"images_2016/DSCN2778.JPG",
"images_2016/DSCN2779.JPG",
"images_2016/DSCN2780.JPG",
"images_2016/DSCN2781.JPG",
"images_2016/DSCN2782.JPG",
"images_2016/DSCN2783.JPG",
"images_2016/DSCN2784.JPG",
"images_2016/DSCN2785.JPG",
"images_2016/DSCN2786.JPG",
"images_2016/DSCN2787.JPG",
"images_2016/DSCN2788.JPG",
"images_2016/DSCN2789.JPG",
"images_2016/DSCN2790.JPG",
"images_2016/DSCN2791.JPG",
"images_2016/DSCN2792.JPG",
"images_2016/DSCN2793.JPG",
"images_2016/DSCN2794.JPG",
"images_2016/DSCN2795.JPG",
"images_2016/DSCN2796.JPG",
"images_2016/DSCN2797.JPG"
]
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