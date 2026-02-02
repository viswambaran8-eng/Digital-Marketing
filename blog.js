const blogGrid = document.querySelector('.blog-grid');

function loadMoreBlogs() {
  const blogHTML = `
    <!-- Blog 4 -->
    <div class="blog-card" data-aos="fade-up">
      <div class="blog-img">
        <img src="./Assets/c11.webp" alt="Conversion Optimization">
      </div>
      <div class="blog-content">
        <span class="blog-tag">CRO</span>
        <h3>How Conversion Rate Optimization Boosts ROI</h3>
        <p>
          Learn how small UX and data-driven changes can dramatically improve conversions.
        </p>
        <a href="./error.html" class="read-more">Read More →</a>
      </div>
    </div>

    <!-- Blog 5 -->
    <div class="blog-card" data-aos="fade-up" data-aos-delay="100">
      <div class="blog-img">
        <img src="./Assets/blog5.avif" alt="Email Marketing Automation">
      </div>
      <div class="blog-content">
        <span class="blog-tag">Email Marketing</span>
        <h3>Email Automation Strategies That Drive Sales</h3>
        <p>
          Discover how automated email flows increase retention, engagement, and repeat purchases.
        </p>
        <a href="./error.html" class="read-more">Read More →</a>
      </div>
    </div>

    <!-- Blog 6 -->
    <div class="blog-card" data-aos="fade-up" data-aos-delay="200">
      <div class="blog-img">
        <img src="./Assets/blog6.avif" alt="Marketing Analytics">
      </div>
      <div class="blog-content">
        <span class="blog-tag">Analytics</span>
        <h3>Using Marketing Analytics to Scale Campaigns</h3>
        <p>
          Learn how data-driven decisions help brands optimize performance and maximize ROI.
        </p>
        <a href="./error.html" class="read-more">Read More →</a>
      </div>
    </div>
  `;

  blogGrid.insertAdjacentHTML('beforeend', blogHTML);

  // Optional: prevent multiple clicks adding duplicates
  document.querySelector('.load-more-btn')?.remove();
}
