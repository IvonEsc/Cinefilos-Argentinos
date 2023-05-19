//funcionalidad de la pagina//

//--alert--//

function myAlert(message) {//mensaje modificado de alerta
    var alert = document.getElementById('custom-alert');
    alert.innerHTML = message;
    alert.style.display = 'block';
    setTimeout(function() {
    alert.style.display = 'none';
    }, 1000); // Oculta el alert después de 5 segundos
 }


//--script del formulario Concurso--//

// const form1 = document.getElementById("concursoForm");

// form1.addEventListener("submit", async (event) => {
//     event.preventDefault(); // Evita el envío del formulario por defecto.

//     const formData = new FormData(form1); // Recopila los datos del formulario.

//     const response = await fetch(form1.action, {
//         method: form1.method,
//         body: formData,
//         headers: {
//         Accept: "application/json",
//         },
//     }); // Envía los datos del formulario a la URL del formulario.

//     if (response.ok) {
//         myAlert("¡Gracias por enviar tu consulta!"); // Mensaje de confirmación.
//         form1.reset();//vacia el formulario
//     } 
//     else {
//         myAlert("Ha ocurrido un error al enviar el formulario."); // Mensaje de error.
//     }
// });

//--script del formulario Consulta--//

// const form_consulta = document.getElementById("consultaForm");

// form_consulta.addEventListener("submit", async (event) => {
//     event.preventDefault(); // Evita el envío del formulario por defecto.

//     const formData = new FormData(form_consulta); // Recopila los datos del formulario.

//     const response = await fetch(form_consulta.action, {
//         method: form_consulta.method,
//         body: formData,
//         headers: {
//         Accept: "application/json",
//         },
//     }); // Envía los datos del formulario a la URL del formulario.

//     if (response.ok) {
//         myAlert("¡Gracias por enviar tu consulta!"); // Mensaje de confirmación.
//         form_consulta.reset();//vacia el formulario
//     } 
//     else {
//         myAlert("Ha ocurrido un error al enviar el formulario."); // Mensaje de error.
//     }
// });
document.getElementById('consultaForm').addEventListener('submit', function(event) {
    // Evitar que el formulario se envíe por defecto
    event.preventDefault();
  
    // Obtener los datos del formulario
    var formData = new FormData(this);
  
    // Realizar la solicitud POST utilizando fetch
    fetch('https://api.sheetmonkey.io/form/cSDhURv2K8LFvPwU11SMDG', {
      method: 'POST',
      body: formData
    })
    .then(function(response) {
      if (response.ok) {
        myAlert("¡Gracias por enviar tu consulta!"); // Mensaje de confirmación.
        document.getElementById('consultaForm').reset();//vacia el formulario
        console.log(response);
      } else {
        myAlert("Ha ocurrido un error al enviar el formulario."); // Mensaje de error.
        console.error('Error en la solicitud:', response.status);
      }
    })
    .catch(function(error) {
      // Manejar el error de red o cualquier otro error que ocurra
      console.error('Error en la solicitud:', error);
    });
  });
  