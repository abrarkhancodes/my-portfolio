// Smooth Scroll for Navbar Links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});
// Reveal on Scroll
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  
  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const revealTop = element.getBoundingClientRect().top;
    const revealPoint = 100; // Trigger point from bottom of screen

    if (revealTop < windowHeight - revealPoint) {
      element.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Trigger on load
