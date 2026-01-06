const photos = [
"Images_2017_sup/70ans_Christine_St mandrier (106).JPG",
"Images_2017_sup/70ans_Christine_St mandrier (116).JPG",
"Images_2017_sup/70ans_Christine_St mandrier (128).JPG",
"Images_2017_sup/70ans_Christine_St mandrier (130).JPG",
"Images_2017_sup/70ans_Christine_St mandrier (14).JPG",
"Images_2017_sup/70ans_Christine_St mandrier (25).JPG",
"Images_2017_sup/70ans_Christine_St mandrier (63).JPG",
"Images_2017_sup/70ans_Christine_St mandrier (65).JPG",
"Images_2017_sup/70ans_Christine_St mandrier (78).JPG",
"Images_2017_sup/70ans_Christine_St mandrier (92).JPG",
"Images_2017_sup/70ans_Christine_St mandrier-mcl.JPG",
"Images_2017_sup/70ans_stmandrier (3).JPG",
"Images_2017_sup/70ans_stmandrier (32).JPG",
"Images_2017_sup/70ans_stmandrier (37).JPG",
"Images_2017_sup/70ans_stmandrier (62).JPG",
"Images_2017_sup/70ans_stmandrier_40aine.JPG",
"Images_2017_sup/les angles_janvier17 (2).JPG",
"Images_2017_sup/les angles_janvier17 (3).JPG",
"Images_2017_sup/les angles_janvier17 (4).JPG",
"Images_2017_sup/les angles_janvier17 (6).JPG",
"Images_2017_sup/les embiez (1).JPG",
"Images_2017_sup/ludovic.JPG",
"Images_2017_sup/marie-claude.JPG",
"Images_2017_sup/marie-claude5.JPG",
"Images_2017_sup/mcl-ludovic-hélène.JPG",
"Images_2017_sup/Prieuré de Serrabona(21).JPG",
"Images_2017_sup/soustons_anniversaire dH_l_ne.JPG",
"Images_2017_sup/soustons_hélène et mcl.JPG",
"Images_2017_sup/soustons_ludovic.JPG",
"Images_2017_sup/soustons_mcl et ludovic-001.JPG",
"Images_2017_sup/soustons_mcl7.JPG",
"Images_2017_sup/soustons_mclaude6.JPG",
"Images_2017_sup/soustons_ttc (26).JPG",
"Images_2017_sup/soustons_ttc (64).JPG",
"Images_2017_sup/soustons_ttc (7).JPG",
"Images_2017_sup/soustons_ttc (72).JPG",
"Images_2017_sup/soustons_ttc_les hommes.JPG"
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