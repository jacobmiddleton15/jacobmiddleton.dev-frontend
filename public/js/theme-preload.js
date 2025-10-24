(function() {
  try {
    const cookieMatch = document.cookie.match(/theme=(light|dark)/);
    const saved = cookieMatch ? cookieMatch[1] : null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = saved || (prefersDark ? 'dark' : 'light');

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch (e) {
    console.error('Theme preload error:', e);
  }
})();
