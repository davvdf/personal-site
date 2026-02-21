const carousels = document.querySelectorAll("[data-carousel]");

carousels.forEach((carousel) => {
  const track = carousel.querySelector(".carousel-track");
  const slides = Array.from(carousel.querySelectorAll(".slide"));
  const dots = Array.from(carousel.querySelectorAll(".dot"));
  const prev = carousel.querySelector("[data-prev]");
  const next = carousel.querySelector("[data-next]");

  if (!track || slides.length === 0) return;

  let index = 0;

  const update = (nextIndex) => {
    index = (nextIndex + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot, i) => dot.classList.toggle("is-active", i === index));
  };

  prev?.addEventListener("click", (e) => {
    e.preventDefault();
    update(index - 1);
  });

  next?.addEventListener("click", (e) => {
    e.preventDefault();
    update(index + 1);
  });

  dots.forEach((dot, i) =>
    dot.addEventListener("click", (e) => {
      e.preventDefault();
      update(i);
    })
  );

  update(0);
});
