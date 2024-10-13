setInterval(() => {
    const element = document.getElementById('blink');
    element.style.visibility = (element.style.visibility === 'hidden') ? 'visible' : 'hidden';
  }, 500);
  