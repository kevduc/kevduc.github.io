document.addEventListener("DOMContentLoaded", () => {
  console.debug("DOM content loaded");

  // Only show loading spinner when loading time is too long (after a second)
  setTimeout(() => {
    document.querySelector("#spinner").classList.add("show");
  }, 1000);
});

// Wait for all the images to be loaded
window.addEventListener("load", () => {
  console.debug("window loaded");

  // Hide loading spinner
  document.querySelector("#spinner").classList.add("d-none");

  // Start the fadein animation on main
  let main = document.querySelector("main");
  main.classList.add("fadein");
  main.classList.remove("invisible");
});
