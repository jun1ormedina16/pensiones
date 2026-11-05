// Abrir WhatsApp con mensaje específico
function openWhatsApp(serviceName) {
  const phoneNumber = "573000000002"; // Reemplazar por tu número real de WhatsApp
  const message = `Hola, quisiera información y asesoría jurídica sobre: ${serviceName}`;
  const encodedMessage = encodeURIComponent(message);
  
  window.location.href = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}

// LÓGICA DE SUBMENÚ DESPLEGABLE (ACORDEÓN)
function toggleAccordion(headerElement) {
  const accordion = headerElement.parentElement;
  const content = accordion.querySelector(".accordion-content");
  
  document.querySelectorAll(".service-accordion").forEach((item) => {
    if (item !== accordion) {
      item.classList.remove("open");
      item.querySelector(".accordion-content").style.maxHeight = null;
    }
  });

  if (accordion.classList.contains("open")) {
    accordion.classList.remove("open");
    content.style.maxHeight = null;
  } else {
    accordion.classList.add("open");
    content.style.maxHeight = content.scrollHeight + "px";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // EFECTO RIPPLE
  const ripples = document.querySelectorAll(".ripple");
  ripples.forEach((element) => {
    element.addEventListener("click", function (e) {
      const circle = document.createElement("span");
      const diameter = Math.max(this.clientWidth, this.clientHeight);
      const radius = diameter / 2;

      const rect = this.getBoundingClientRect();
      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${e.clientX - rect.left - radius}px`;
      circle.style.top = `${e.clientY - rect.top - radius}px`;
      circle.classList.add("ripple-effect");

      const existingRipple = this.querySelector(".ripple-effect");
      if (existingRipple) {
        existingRipple.remove();
      }

      this.appendChild(circle);
    });
  });

  // ANIMACIÓN REVEAL SCROLL
  const reveals = document.querySelectorAll(".reveal");
  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    const elementVisible = 20;

    reveals.forEach((reveal) => {
      const elementTop = reveal.getBoundingClientRect().top;
      if (elementTop < windowHeight - elementVisible) {
        reveal.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});