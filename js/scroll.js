// Calculate the progress bar's top position in the viewport
function getElementTopRelativeToViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top;
}

// Update the progress bar as the user scrolls
function updateProgressBar() {
  const progressBarContainer = document.querySelector("#progress-bar-container");
  const progressBar = document.querySelector("#progress-bar");

  const containerTop = getElementTopRelativeToViewport(progressBarContainer);
  const containerBottom = containerTop + progressBarContainer.offsetHeight;
  const windowHeight = window.innerHeight;

  if (containerTop > windowHeight / 2) {
    progressBar.style.height = "0%";
  } else if (containerTop <= windowHeight / 2 && containerBottom >= windowHeight / 2) {
    const progressPercentage = (1 - (containerBottom - windowHeight / 2) / progressBarContainer.offsetHeight) * 100;
    progressBar.style.height = progressPercentage + "%";
  } else {
    progressBar.style.height = "100%";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Add event listeners for scroll and resize events
  window.addEventListener("scroll", updateProgressBar);
  window.addEventListener("resize", updateProgressBar);

  // Initialize the progress bar when the page loads
  updateProgressBar();
});

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function fadeInOnScroll() {
  const fadeIns = document.querySelectorAll(".fade-in");

  for (const fadeIn of fadeIns) {
    if (isElementInViewport(fadeIn)) {
      fadeIn.classList.add("visible");
    }

    // else {
    //   fadeIn.classList.remove("visible");
    // }
  }
}

window.addEventListener("scroll", fadeInOnScroll);
window.addEventListener("resize", fadeInOnScroll);
window.addEventListener("load", fadeInOnScroll);
