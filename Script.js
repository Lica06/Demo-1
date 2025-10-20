// Menangani peristiwa klik pada tautan navigasi
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // Mencegah perilaku default tautan
    const targetId = this.getAttribute("href"); // Mendapatkan ID target
    const targetElement = document.querySelector(targetId); // Mencari elemen target
    targetElement.scrollIntoView({ behavior: "smooth" }); // Menggulung ke elemen target
  });
});
