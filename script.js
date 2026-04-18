const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("visible");

      if (entry.target.classList.contains("skill-card")) {
        const level = entry.target.dataset.level || "0";
        const bar = entry.target.querySelector(".progress span");
        if (bar) {
          bar.style.width = `${level}%`;
        }
      }

      revealObserver.unobserve(entry.target);
    });
  },
  {
    threshold: 0.16,
  }
);

revealElements.forEach((element) => revealObserver.observe(element));
