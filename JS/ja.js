document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const togglePassword = document.getElementById('togglePassword');
  const goRegister = document.getElementById('goRegister');
  const loginBtn = document.querySelector('.login-btn');

  // Botones sociales
  const googleBtn = document.querySelector('.google');
  const facebookBtn = document.querySelector('.facebook');
  const githubBtn = document.querySelector('.github');

   // Modo demo: autenticación real llega en Fase 3 (backend + JWT)H

  // Mostrar/Ocultar contraseña
  togglePassword.addEventListener('click', () => {
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;
    togglePassword.textContent = type === 'password' ? '👁️' : '🙈';
  });

  // Validación en vivo
  function checkFields() {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    loginBtn.disabled = !(username && password.length >= 6);
    loginBtn.style.opacity = loginBtn.disabled ? '0.6' : '1';
  }

  usernameInput.addEventListener('input', checkFields);
  passwordInput.addEventListener('input', checkFields);
  checkFields();

 // Envío del formulario normal
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

       // Modo demo: acepta cualquier usuario con contraseña de 6+ caracteres
    const usuario = { nombre: username };

    if (usuario) {
        // --- 🔑 PASO CLAVE: Limpiar el carrito antes de la nueva sesión ---
        localStorage.removeItem('shoppingCart'); 
        // ------------------------------------------------------------------

        localStorage.setItem('nombreUsuario', usuario.nombre);
        alert(`¡Bienvenido ${usuario.nombre}! Has iniciado sesión correctamente.`);
        window.location.href = 'index.html';
    } else {
        showError('Usuario o contraseña incorrectos');
    }
});

  // Redirección a registro
  goRegister.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'registro.html';
  });

  // Función para mostrar error
  function showError(message) {
    const existing = document.querySelector('.error-message');
    if (existing) existing.remove();

    const msg = document.createElement('div');
    msg.className = 'error-message';
    msg.textContent = message;
    loginForm.insertBefore(msg, loginBtn);
  }



// -------- Funciones de login social (simuladas) --------
googleBtn.addEventListener('click', () => {
    // --- 🔑 PASO CLAVE: Limpiar el carrito ---
    localStorage.removeItem('shoppingCart'); 
    // -----------------------------------------
    
    localStorage.setItem('nombreUsuario', 'Daniel'); // O el nombre que corresponda si fuera real
    alert("Has iniciado sesión con Google ✅");
    window.location.href = 'index.html';
});

facebookBtn.addEventListener('click', () => {
    // --- 🔑 PASO CLAVE: Limpiar el carrito ---
    localStorage.removeItem('shoppingCart'); 
    // -----------------------------------------

    localStorage.setItem('nombreUsuario', 'Daniel');
    alert("Has iniciado sesión con Facebook ✅");
    window.location.href = 'index.html';
});

githubBtn.addEventListener('click', () => {
    // --- 🔑 PASO CLAVE: Limpiar el carrito ---
    localStorage.removeItem('shoppingCart'); 
    // -----------------------------------------

    localStorage.setItem('nombreUsuario', 'Daniel');
    alert("Has iniciado sesión con GitHub ✅");
    window.location.href = 'index.html';
});








});
  