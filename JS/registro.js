document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registerForm');
  const passwordInput = document.getElementById('reg-password');
  const togglePassword = document.getElementById('toggleRegPassword');

  // Mostrar/Ocultar contraseña
  togglePassword.addEventListener('click', () => {
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;
    togglePassword.textContent = type === 'password' ? '👁️' : '🙈';
  });

  // Envío con mensaje elegante y redirección
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = passwordInput.value.trim();

    if (!name || !email || password.length < 6) {
      alert('Por favor completa todos los campos y usa una contraseña de al menos 6 caracteres.');
      return;
    }

    // Crea pantalla de éxito
    const box = document.querySelector('.register-box');
    box.innerHTML = `
      <h2>✅ ¡Registro exitoso!</h2>
      <p>Redirigiendo a inicio de sesión...</p>
      <div class="loader"></div>
    `;

    // Redirige automáticamente
    setTimeout(() => {
      window.location.href = 'inicio.html'; // 🠖 Asegurate que esta ruta esté bien escrita
    }, 3000);
  });
});