const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("anim-start", entry.isIntersecting);
    });
  },
  {rootMargin: "-30%"}
);

const animElements = document.querySelectorAll(".anim");
animElements.forEach((elem) => {
  observer.observe(elem);
});
