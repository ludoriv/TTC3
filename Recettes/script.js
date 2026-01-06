const docum = [
"Recettes_pdf/Claf Aubergine.pdf",
"Recettes_pdf/Claf Courget Noiset.pdf",
"Recettes_pdf/Cobbler pêches_mirabelles.pdf",
"Recettes_pdf/FileMigGingOrangH.pdf",
"Recettes_pdf/PouletMielSceSoja.pdf",
"Recettes_pdf/PouletOranGingeHS.pdf",
"Recettes_pdf/ST Jacques Carpaccio.pdf",
"Recettes_pdf/T.SurimiOeufPomeloHS.pdf",
"Recettes_pdf/Tarte au maroilles.pdf"
]

let current = 0;
const iframe = document.getElementById("Docu");
document.getElementById("next").addEventListener("click", () => {
  current = (current + 1) % docum.length;
 /* <p>- docum[current] -<br></p>  */
  <iframe src=docum[current] width="100%" height="600px"></iframe>

});

document.getElementById("prev").addEventListener("click", () => {
  current = (current - 1 + docum.length) % docum.length;
  <iframe src=docum[current] width="100%" height="600px"></iframe>;
});