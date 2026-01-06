     const docum = [
"Fpdf/CanardOrangeMaminka.pdf", 
"Fpdf/FiletMign_tapenade_Vazeille.pdf", 
"Fpdf/Poivron_Boursin_Verrine.pdf", 
"Fpdf/PouletOranGingeHS.pdf",
"Fpdf/Reine de saba HS.pdf", 
"Fpdf/Sal.Pois-chiche-orientale_PP.pdf", 
"Fpdf/T.amandine_poires.pdf", 
"Fpdf/Tiramisu_Citron_HS.pdf", 
"Fpdf/TruffesChocoWhisky.pdf"]


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