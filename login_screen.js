var form = document.getElementById("login_form");
var inputUsername = document.getElementById("username");
var inputPassword = document.getElementById("password");

// Simular el login
var correctUsername = "admin";
var correctPassword = "123";

var showErrorMessage = function (message) {
    // console.log(message);
    // alert(message);
    var messageContainer = document.getElementById("message_danger");
    var messageText = document.getElementById("message_danger_text");

    // Mostrar el mensaje (hacer que el contenedor sea visible)
    if (messageContainer.className.indexOf("visible") === -1) {
        messageContainer.className += " visible";
    }
    // Cambiar el texto del mensaje
    messageText.textContent = message;
}

var validateAndSend = function (e) {
    console.log("validateAndSend");
    // Prevenir la funcionalidad default del submit de un form
    // (Nosotros daremos submit manualmente)
    e.preventDefault();
    var username = inputUsername.value;
    var password = inputPassword.value;

    // Revisar que los campos no estén vacíos
    if (username === "" || password === "") {
        showErrorMessage("Por favor introduce los datos requeridos.");
        return;
    }

    // Intentar iniciar sesión????
    // Simular inicio de sesión
    if (username !== correctUsername || password !== correctPassword) {
        showErrorMessage("Las credenciales introducidas no son válidas, por favor revisa tus datos e inténtalo nuevamente.");
        return;
    } else {
        // Quitar mensaje de error (*)
        // Mandar a otra página (redireccionar a otra página)
        window.location.href = "http://www.google.com";
    }

    // > Por favor introduce los datos requeridos
    // > Por favor llena los campos requeridos
    // 1 Indicar cuáles son los datos requeridos
    // 2 Mostrar el mensaje
}

form.addEventListener("submit", validateAndSend);