function validarLogin(event) {
  event.preventDefault();

  const CLAVE_SECRETA = "ok";
  const pass = document.getElementById("password").value;

  if (pass.toLowerCase() === CLAVE_SECRETA) {
    alert("¡Acceso concedido! 🎉");
    window.location.href = "landingpage.html";
  } else {
    alert("Clave incorrecta ❌");
  }
}
