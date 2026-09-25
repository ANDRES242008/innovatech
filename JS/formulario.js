
    // Guardar y recuperar datos en localStorage
    const formulario = document.getElementById("formulario");
    const campos = ["nombre", "email", "telefono", "motivo", "comentario"];
    campos.forEach(campo => {
        const input = document.getElementById(campo);
        input.value = localStorage.getItem("form_" + campo) || "";
        input.addEventListener("input", () => {
            localStorage.setItem("form_" + campo, input.value);
        });
    });

    // Validación visual
    function mostrarError(id, mensaje) {
        const div = document.getElementById("error-" + id);
        div.textContent = mensaje;
        div.style.display = mensaje ? "block" : "none";
    }

    function limpiarErrores() {
        campos.forEach(campo => mostrarError(campo, ""));
    }

    // MEJORA 1: Formateo y Límite de teléfono a 8 dígitos
    document.getElementById("telefono").addEventListener("input", function() {
        let valor = this.value.replace(/[^\d]/g, ''); // Solo permite dígitos
        
        // Limita a 8 dígitos
        if (valor.length > 8) {
            valor = valor.substring(0, 8);
        }

        // Aplica el formato xxxx xxxx
        if (valor.length > 4) {
            this.value = valor.replace(/(\d{4})(\d{1,4})/, '$1 $2');
        } else {
            this.value = valor;
        }
        
        // Opcional: Si tienes el atributo maxlength en tu HTML, asegúrate de que sea 9 (8 dígitos + 1 espacio)
        // Por ejemplo: <input type="text" id="telefono" maxlength="9">
    });

    // Botón limpiar
    document.getElementById("btnLimpiar").addEventListener("click", function() {
        formulario.reset();
        limpiarErrores();
        campos.forEach(campo => localStorage.removeItem("form_" + campo));
        document.getElementById("archivo").value = "";
    });

    // Confirmación antes de enviar
    formulario.addEventListener("submit", function(e) {
        e.preventDefault();
        limpiarErrores();

        let valido = true;
        // Honeypot anti-spam
        if (document.getElementById("website").value !== "") return;

        // Validación personalizada
        if (!formulario.nombre.value.trim()) {
            mostrarError("nombre", "El nombre es obligatorio.");
            valido = false;
        }
        if (!formulario.email.value.trim() || !/^[^@]+@[^@]+\.[a-z]{2,}$/i.test(formulario.email.value)) {
            mostrarError("email", "Correo electrónico inválido.");
            valido = false;
        }
        
        // MEJORA 2: Validación estricta para 8 dígitos
        const telefonoLimpio = formulario.telefono.value.replace(/\s/g, ''); // Remueve espacios para contar
        if (formulario.telefono.value.trim() && !/^\d{8}$/.test(telefonoLimpio)) {
             mostrarError("telefono", "El número de teléfono debe tener exactamente 8 dígitos.");
             valido = false;
        }
        
        if (!formulario.motivo.value) {
            mostrarError("motivo", "Selecciona un motivo.");
            valido = false;
        }
        if (!formulario.comentario.value.trim()) {
            mostrarError("comentario", "El comentario es obligatorio.");
            valido = false;
        }

        // Confirmación antes de enviar
        if (!valido) return;
        if (!confirm("¿Deseas enviar el formulario?")) return;

        // Loader
        document.getElementById("loader").style.display = "block";
        document.getElementById("btnEnviar").disabled = true;

        // Simulación de envío (aquí iría tu lógica de envío real)
        setTimeout(() => {
            formulario.reset();
            limpiarErrores();
            campos.forEach(campo => localStorage.removeItem("form_" + campo));
            document.getElementById("archivo").value = "";
            document.getElementById("loader").style.display = "none";
            document.getElementById("btnEnviar").disabled = false;

            const mensaje = document.getElementById("mensaje");
            mensaje.style.display = "block";
            mensaje.classList.add("mostrar");
            mensaje.innerHTML = "🎉 ¡Gracias, tu mensaje fue enviado correctamente!";
            mensaje.style.background = "linear-gradient(to right, #d0ffe4, #cafff7)";
            mensaje.style.color = "#008080";

            setTimeout(() => {
                mensaje.classList.remove("mostrar");
                mensaje.style.display = "none";
                window.location.href = "index.html";
            }, 3000);
        }, 2000);
    });