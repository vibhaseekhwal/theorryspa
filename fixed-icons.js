  const socialContainer = document.getElementById('socialContainer');
  const mainBtn = document.getElementById('mainBtn');
  const closeBtn = document.getElementById('closeBtn');

  mainBtn.addEventListener('click', () => {
    socialContainer.classList.toggle('active');
  });

  closeBtn.addEventListener('click', () => {
    socialContainer.classList.remove('active');
  });