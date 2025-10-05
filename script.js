const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('MenuItems');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  });
}

if (close) {
  close.addEventListener('click', () => {  // fixed here
    nav.classList.remove('active');
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById('carouselTrack');

  // Duplicate content for seamless infinite loop
  const clone = track.innerHTML;
  track.innerHTML += clone;

  // To make it ultra-smooth: dynamically match animation distance
  const totalWidth = track.scrollWidth / 2;
  track.style.animation = `scroll ${totalWidth / 40}s linear infinite`;

  console.log("Carousel width:", totalWidth, "Animation speed:", totalWidth / 40, "s");
});


