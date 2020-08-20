let showSpinnerTimeout = null;

document.addEventListener("DOMContentLoaded", () => {
  console.debug("DOM content loaded");

  // Only show loading spinner when loading time is too long (after a second)
  showSpinnerTimeout = setTimeout(() => {
    let spinner = document.querySelector("#spinner");
    spinner.classList.add("show");
    spinner.classList.remove("invisible");
  }, 1000);
});

// Wait for all the images to be loaded
window.addEventListener("load", () => {
  console.debug("window loaded");

  // Hide loading spinner
  clearTimeout(showSpinnerTimeout);
  let spinner = document.querySelector("#spinner");
  spinner.classList.remove("show");

  setTimeout(() => {
    spinner.classList.add("d-none");

    // Start the fadein animation on main
    let main = document.querySelector("main");
    main.classList.add("fadein");
    main.classList.remove("invisible");
  }, 500);
});
