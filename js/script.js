// =========================================================
// Open Trip Malang — interaksi umum
// =========================================================

document.addEventListener("DOMContentLoaded", function () {
  // Tahun otomatis di footer
  var tahunEl = document.querySelectorAll(".tahun-sekarang");
  tahunEl.forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Tandai menu aktif berdasarkan file halaman saat ini
  var path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".navbar-otm .nav-link").forEach(function (link) {
    var href = link.getAttribute("href");
    if (href === path) {
      link.classList.add("active");
    }
  });

  // Validasi sederhana form kontak (jika ada di halaman)
  var formKontak = document.getElementById("form-kontak");
  if (formKontak) {
    formKontak.addEventListener("submit", function (e) {
      e.preventDefault();
      var nama = document.getElementById("nama").value.trim();
      var whatsapp = document.getElementById("whatsapp").value.trim();
      var pesanEl = document.getElementById("pesan-status");

      if (nama.length < 3 || whatsapp.length < 8) {
        pesanEl.textContent =
          "Mohon lengkapi nama dan nomor WhatsApp dengan benar.";
        pesanEl.className = "mt-3 text-danger";
        return;
      }

      pesanEl.textContent =
        "Terima kasih, " + nama + "! Tim kami akan segera menghubungi kamu lewat WhatsApp.";
      pesanEl.className = "mt-3 text-success";
      formKontak.reset();
    });
  }
});
