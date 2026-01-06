const docum = [
"chansons_pdf/Butte_parolesTTC_2023.pdf",
"chansons_pdf/FD_70_ans.pdf",
"chansons_pdf/Hélène_79 ans_St Mandrier.pdf",
"chansons_pdf/Les 70 ans de Françoise à St Mandrier.pdf",
"chansons_pdf/Palpitations.pdf",
"chansons_pdf/paroles_soustons2024.pdf",
"chansons_pdf/Soustons_2024.pdf",
"chansons_pdf/StMandrier_2025.pdf"
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