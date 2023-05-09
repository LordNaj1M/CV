// Event listener saat halaman selesai dimuat atau selesai di-refresh
window.addEventListener("load", function () {
  alert("Gunakan tampilan desktop(>1320x835px , 100% scale), mohon maaf responsive belum dibuat");
  // Mengatur posisi scroll ke atas halaman
  window.scrollTo(0, 0);
});

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("nav-button").style.display = "none";
  document.getElementById("homepage").style.opacity = "0.7";
  document.getElementById("about").style.opacity = "0.7";
  document.getElementById("portfolio").style.opacity = "0.7";
  document.getElementById("contact").style.opacity = "0.7";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("nav-button").style.display = "block";
  document.getElementById("homepage").style.opacity = "1";
  document.getElementById("about").style.opacity = "1";
  document.getElementById("portfolio").style.opacity = "1";
  document.getElementById("contact").style.opacity = "1";
}

$(".sidenav-choice a").click(function (e) {
  closeNav();
});

document.addEventListener("DOMContentLoaded", function () {
  var sections = document.querySelectorAll("section"); // Mengambil semua elemen <section>
  var navigationLinks = document.querySelectorAll("nav a"); // Mengambil semua tautan navigasi

  // Fungsi untuk mengaktifkan indikator sub bab
  function activateIndicator(sectionId) {
    // Menghapus kelas "active" dari semua indikator sub bab dan menambahkan pada yang sesuai
    navigationLinks.forEach(function (link) {
      link.classList.remove("active");
    });

    var indicator = document.querySelector('a[href="#' + sectionId + '"]');
    indicator.classList.add("active");
  }

  // Fungsi untuk mendapatkan section yang paling dekat dengan atas viewport
  function getClosestSection() {
    var closestSection = sections[0];
    var closestDistance = Math.abs(sections[0].getBoundingClientRect().top);

    sections.forEach(function (section) {
      var distance = Math.abs(section.getBoundingClientRect().top);
      if (distance < closestDistance) {
        closestSection = section;
        closestDistance = distance;
      }
    });

    return closestSection;
  }

  // Event listener untuk memicu fungsi saat scroll
  window.addEventListener("scroll", function () {
    var closestSection = getClosestSection();
    var sectionId = closestSection.getAttribute("id");
    activateIndicator(sectionId);
  });

  // Event listener untuk memicu fungsi saat berpindah section
  sections.forEach(function (section) {
    section.addEventListener("click", function () {
      var sectionId = section.getAttribute("id");
      activateIndicator(sectionId);
    });
  });
});

/* js for add and remove class with click "a"
$(".sidenav-choice a").click(function (e) {
  $(".sidenav-choice a").removeClass("sidenav-current-page");
  $(this).addClass("sidenav-current-page");
});
*/
