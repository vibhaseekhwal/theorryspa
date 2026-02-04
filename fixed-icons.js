document.addEventListener("DOMContentLoaded", () => {
  const socialContainer = document.getElementById("socialContainer");
  const mainBtn = document.getElementById("mainBtn");
  const closeBtn = document.getElementById("closeBtn");

  if (!socialContainer || !mainBtn || !closeBtn) {
    console.error("Social buttons elements not found!");
    return;
  }

  // Open / Toggle social icons
  mainBtn.addEventListener("click", () => {
    socialContainer.classList.toggle("active");
  });

  // Close social icons
  closeBtn.addEventListener("click", () => {
    socialContainer.classList.remove("active");
  });
});
