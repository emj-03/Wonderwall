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
