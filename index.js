const toggleBtn = document.getElementById('toggle-theme');

toggleBtn.addEventListener('click', () => {
  // Check current theme
  const currentTheme = document.documentElement.getAttribute('data-theme');

  if (currentTheme === 'dark') {
    // Switch to light
    document.documentElement.removeAttribute('data-theme');
  } else {
    // Switch to dark
    document.documentElement.setAttribute('data-theme', 'dark');
  }
});
