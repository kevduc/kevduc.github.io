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
