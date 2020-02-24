const tUbahWarna = document.getElementById("tUbahWarna");
const body = document.getElementsByTagName("body")[0];

// Tombol Ubah Warna
tUbahWarna.addEventListener("click", function() {
  //   body.style.backgroundColor = "coral";
  //   body.setAttribute("class", "coral");
  body.classList.toggle("coral");
});

// menambahkan tombol acakWarna dgn JS & set random warna
const tAcakWarna = document.createElement("button");
const texttAcakWarna = document.createTextNode("Acak Warna");
tAcakWarna.appendChild(texttAcakWarna);
tAcakWarna.setAttribute("type", "button");
tAcakWarna.setAttribute("id", "tAcakWarna");
// body.appendChild(tAcakWarna);
tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener("click", function() {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

// start - ubah warna menggunakan slider
const sMerah = document.querySelector("input[name=sMerah]");
const sHijau = document.querySelector("input[name=sHijau]");
const sBiru = document.querySelector("input[name=sBiru]");
sMerah.addEventListener("input", function() {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

sHijau.addEventListener("input", function() {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

sBiru.addEventListener("input", function() {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});
// end - ubah warna menggunakan slider

// ubah warna sesuai posisi mouse
body.addEventListener("mousemove", function(event) {
  const xPos = Math.round((event.clientX / window.innerWidth) * 255);
  const yPos = Math.round((event.clientY / window.innerHeight) * 255);
  body.style.backgroundColor = "rgb(" + xPos + "," + yPos + ",100)";
});
// ubah warna sesuai posisi mouse
