const nav = document.getElementById("siteNav");

if (nav) {
  let lastY = window.scrollY;
  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    nav.style.transform = y > lastY && y > 120 ? "translateY(-110%)" : "translateY(0)";
    lastY = y;
  }, { passive: true });
}

const revealTargets = document.querySelectorAll(".work-item, .timeline-item, .about-grid");

if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.transition = "opacity 0.7s ease, transform 0.7s ease";
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealTargets.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(16px)";
    io.observe(el);
  });
}
