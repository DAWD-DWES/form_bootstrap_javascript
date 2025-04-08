document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registro");

  const mensajesError = {
    usuario: {
      valueMissing: "El nombre de usuario es obligatorio.",
      patternMismatch: "Solo se permiten letras y espacios.",
      tooShort: "Debe tener al menos 3 caracteres."
    },
    password1: {
      valueMissing: "La contraseña es obligatoria.",
      patternMismatch: "Debe tener mayúsculas, minúsculas, número y símbolo.",
      tooShort: "Debe tener al menos 8 caracteres."
    },
    password2: {
      valueMissing: "Debe repetir la contraseña.",
      patternMismatch: "Debe tener mayúsculas, minúsculas, número y símbolo.",
      tooShort: "Debe tener al menos 8 caracteres."
    },
    email: {
      valueMissing: "El correo electrónico es obligatorio.",
      typeMismatch: "Debes introducir un correo válido (ej: usuario@dominio.com)."
    }
  };

  function marcarValido(input) {
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
    const feedback = input.closest(".input-group").querySelector(".invalid-feedback");
    if (feedback) feedback.textContent = "";
  }

  function marcarInvalido(input, mensaje) {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    const feedback = input.closest(".input-group").querySelector(".invalid-feedback");
    if (feedback) feedback.textContent = mensaje;
  }

  function validarCampo(input) {
    const errores = mensajesError[input.name];
    if (!errores) return true;

    for (const tipo in input.validity) {
      if (input.validity[tipo] && errores?.[tipo]) {
        marcarInvalido(input, errores[tipo]);
        return false;
      }
    }

    marcarValido(input);
    return true;
  }

  // Validación en submit
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let formularioValido = true;

    form.querySelectorAll("input").forEach(input => {
      if (!validarCampo(input)) formularioValido = false;
    });

    // Validar coincidencia de contraseñas
    const pw1 = form.password1;
    const pw2 = form.password2;
    const pwFeedback = pw2.closest(".input-group").querySelector(".invalid-feedback");

    if (pw1.value !== pw2.value) {
      pw2.classList.remove("is-valid");
      pw2.classList.add("is-invalid");
      pwFeedback.textContent = "Las contraseñas introducidas deben ser iguales.";
      formularioValido = false;
    }

    if (formularioValido) {
      console.log("Formulario válido. Enviando...");
      form.submit(); // o AJAX
    }
  });

  // Validación en tiempo real
  form.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", () => {
      validarCampo(input);

      // Validar coincidencia de contraseñas si corresponde
      if (input.name === "password1" || input.name === "password2") {
        const pw1 = form.password1;
        const pw2 = form.password2;
        const pwFeedback = pw2.closest(".input-group").querySelector(".invalid-feedback");

        if (pw1.value === pw2.value && pw2.value.length > 0) {
          pw2.classList.remove("is-invalid");
          pw2.classList.add("is-valid");
          pwFeedback.textContent = "";
        }
      }
    });
  });
});
