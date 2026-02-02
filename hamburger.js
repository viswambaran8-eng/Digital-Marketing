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

      tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
          tabs.forEach((t) => t.classList.remove("active"));
          tab.classList.add("active");
        });
      });