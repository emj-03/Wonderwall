const howToSection = document.getElementById("how-to");
const progressBar = document.getElementById("progress-bar");
const progressBarContainer = document.getElementById("progress-bar-container");

function updateProgressBar() {
  console.log('updateProgressBar function is called'); // Add this line
  const howToSection = document.getElementById('how-to');
  const progressBar = document.getElementById('progress-bar');
  const sectionTop = howToSection.offsetTop;
  const sectionHeight = howToSection.offsetHeight;
  const windowHeight = window.innerHeight;
  const scrollPosition = window.scrollY;

  const sectionVisibleTop = Math.max(0, sectionTop - scrollPosition);
  const sectionVisibleBottom = Math.min(sectionTop + sectionHeight, scrollPosition + windowHeight);

  if (sectionVisibleBottom <= sectionVisibleTop) {
    progressBar.style.opacity = 0;
  } else {
    progressBar.style.opacity = 1;
    const visibleHeight = sectionVisibleBottom - sectionVisibleTop;
    const progress = (visibleHeight / sectionHeight) * 100;
    progressBar.style.height = progress + '%';
  }
}
window.addEventListener("scroll", updateProgressBar);
