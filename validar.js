const formRegistro = document.getElementById('registro');
formRegistro.addEventListener('submit', validaForm);

const password1 = formRegistro.querySelector('#password1');
const password2 = formRegistro.querySelector('#password2');
const errorPassword2 = formRegistro.querySelector('#password2 ~ .invalid-feedback');

// Escucha en tiempo real para corregir el error visual si los campos coinciden
password2.addEventListener('input', comprobarPasswords);
password1.addEventListener('input', comprobarPasswords);

function comprobarPasswords() {
    if (password1.value === password2.value) {
        password2.classList.remove('is-invalid');
        errorPassword2.textContent = ""; // Limpia el mensaje
    }
}

function validaForm(e) {
    const form = e.target;

    const errPassword = password1.value !== password2.value;

    // Limpiar estado de validación previo
    password2.classList.remove('is-invalid');
    errorPassword2.textContent = "";

    if (errPassword) {
        password2.classList.add('is-invalid');
        errorPassword2.textContent = "Los passwords introducidos deben de ser iguales";
        e.preventDefault();
        e.stopImmediatePropagation();
    }

    // Validación general del formulario
    if (!form.checkValidity()) {
        e.preventDefault();
        e.stopImmediatePropagation();
    }

    form.classList.add('was-validated');
}
