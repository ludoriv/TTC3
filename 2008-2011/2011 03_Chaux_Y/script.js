const photos = 
['images_2011_03/IMG_0655.jpg', 'images_2011_03/IMG_0656.jpg', 'images_2011_03/IMG_0657.jpg', 'images_2011_03/IMG_0658.jpg', 'images_2011_03/IMG_0659.jpg', 'images_2011_03/IMG_0660.jpg', 'images_2011_03/IMG_0661.jpg', 'images_2011_03/IMG_0664.jpg', 'images_2011_03/IMG_0665.jpg', 'images_2011_03/IMG_0666.jpg', 'images_2011_03/IMG_0671.jpg', 'images_2011_03/IMG_0672.jpg', 'images_2011_03/IMG_0673.jpg', 'images_2011_03/IMG_0674.jpg', 'images_2011_03/IMG_0675.jpg', 'images_2011_03/IMG_0677.jpg', 'images_2011_03/IMG_0678.jpg', 'images_2011_03/IMG_0680.jpg', 'images_2011_03/IMG_0681.jpg', 'images_2011_03/IMG_0682.jpg', 'images_2011_03/IMG_0683.jpg', 'images_2011_03/IMG_0686.jpg', 'images_2011_03/IMG_0687.jpg', 'images_2011_03/IMG_0688.jpg', 'images_2011_03/IMG_0689.jpg', 'images_2011_03/IMG_0690.jpg', 'images_2011_03/IMG_0691.jpg', 'images_2011_03/IMG_0693.jpg', 'images_2011_03/IMG_0694.jpg', 'images_2011_03/IMG_0695.jpg', 'images_2011_03/IMG_0698.jpg', 'images_2011_03/IMG_0701.jpg', 'images_2011_03/IMG_0702.jpg', 'images_2011_03/IMG_0703.jpg']

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