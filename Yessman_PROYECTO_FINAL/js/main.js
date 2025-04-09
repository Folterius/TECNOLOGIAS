// Alerta al cargar
window.addEventListener('load', () => {
  console.log("Página cargada correctamente");
});

// Hover e interacción sobre imágenes
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('mouseenter', () => {
    img.style.filter = 'brightness(1.1)';
  });
  img.addEventListener('mouseleave', () => {
    img.style.filter = 'brightness(1)';
  });
  img.addEventListener('click', () => {
    alert(`${img.alt || "Este producto"} está en promoción especial!`);
  });
});

// Año automático en el footer
const footer = document.querySelector("footer p");
if (footer) {
  const año = new Date().getFullYear();
  footer.innerHTML = `&copy; ${año} Yessman. Todos los derechos reservados.`;
}

// Validación de formulario
const formulario = document.getElementById('formularioContacto');
const respuesta = document.getElementById('respuestaFormulario');

if (formulario) {
  formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
    
    if (nombre === '' || email === '' || mensaje === '') {
      respuesta.style.color = 'red';
      respuesta.textContent = 'Por favor, completa todos los campos.';
    } else {
      respuesta.style.color = 'green';
      respuesta.textContent = '¡Mensaje enviado correctamente!';
      formulario.reset();
    }
  });
}
