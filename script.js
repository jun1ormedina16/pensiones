// Redirección directa a WhatsApp según el tema o servicio seleccionado
function openWhatsApp(serviceName) {
  const phoneNumber = "573000000002"; // Reemplaza con tu número principal de WhatsApp
  const message = `Hola, quisiera información y asesoría sobre: ${serviceName}`;
  const encodedMessage = encodeURIComponent(message);
  
  window.location.href = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}

document.addEventListener("DOMContentLoaded", () => {
  // 1. EFECTO RIPPLE (Onda de agua al dar clic o tap)
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

  // 2. ANIMACIÓN REVEAL (Entrada suave de tarjetas al scroll)
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

  // Ejecutar al cargar inmediatamente y al hacer scroll
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});