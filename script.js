const bar = document.getElementById('bar');
const nav = document.getElementById('MenuItems');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  });
}