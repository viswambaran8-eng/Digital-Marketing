// Hamburger Menu Functionality
const hamburger = document.querySelector(".hamburger");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active"); // Animate hamburger
  sidebar.classList.toggle("active"); // Toggle sidebar
  overlay.classList.toggle("active"); // Toggle overlay
  document.body.classList.toggle("no-scroll"); // Disable body scroll
});

overlay.addEventListener("click", () => {
  hamburger.classList.remove("active");
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("no-scroll"); // Enable body scroll
});

// Tabs Functionality
const tabs = document.querySelectorAll(".tabs button");
const contents = document.querySelectorAll(".tab-content .desc");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove active from all tabs
    tabs.forEach((t) => t.classList.remove("active"));
    contents.forEach((c) => c.classList.remove("active"));

    // Activate clicked tab
    tab.classList.add("active");

    // Show related content
    const target = tab.getAttribute("data-tab");
    document.getElementById(target).classList.add("active");
  });
});
