// Responsive Navbar
// menyeleksi class .hamburger dan nav-menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

//membuat event click
hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Membuat event untuk remove pada saat di klik
document.querySelectorAll('.nav-link').forEach(function (n) {
  n.addEventListener('click', function () {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// ====================================================================
// smooth scroll
// menseleksi seluruh kelas nav-item dan melakukan perulangan menggunakan forEach
document.querySelectorAll('.nav-item a[href^="#"]').forEach(function (link) {
  // membuat event menggunakan addEventListener
  link.addEventListener('click', function (e) {
    e.preventDefault();
    let href = this.getAttribute('href');
    let target = document.querySelector(href);
    let headerOffset = 80;
    let elementPosition = target.offsetTop;
    let offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  });
});

// =====================================================
// scroll aktif
// menseleksi article dan nav ul li
const articles = document.querySelectorAll('article');
const navLi = document.querySelectorAll('nav ul li');

// membuat event
window.addEventListener('scroll', function () {
  // variabel current diisikan string kosong
  let current = '';
  // melakukan perulangan articles
  articles.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 150) {
      current = section.getAttribute('id');
    }
  });

  // melakukan perulangan navLi
  navLi.forEach((li) => {
    li.classList.remove('aktif');
    // kondisi untuk menambahkan kelas aktif
    if (li.classList.contains(current)) {
      li.classList.add('aktif');
    }
  });
});
