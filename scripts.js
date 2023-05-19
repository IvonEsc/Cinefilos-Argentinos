//funcionalidad de los formularios//

//--alert--//

function myAlert(message) {//mensaje modificado de alerta
    var alert = document.getElementById('custom-alert');
    alert.innerHTML = message;
    alert.style.display = 'block';
    setTimeout(function() {
    alert.style.display = 'none';
    }, 1500); // Oculta el alert después de 1.5 segundos
 }

 //--Zona Horaria--//
 
 var currentDateTime = new Date().toLocaleString("es-AR", { timeZone: "America/Argentina/Buenos_Aires" });
 document.getElementsByName("Created")[0].value = currentDateTime;//acomoda la zona horaria



//--script del formulario Concurso--//

var concursoForm = document.getElementById('concursoForm');
if (concursoForm) {
  concursoForm.addEventListener('submit', function(event) {
    event.preventDefault();//envio de datos por default truncado

    var dniInput = document.getElementById("dni");
    var dniError = document.getElementById("dniError");

    var telefonoInput = document.getElementById("telefono");
    var telefonoError = document.getElementById("telefonoError");

    //Validacion de datos

    var dniValue = dniInput.value;
    dniInput.value = dniValue.replace(/\D/g, "");
    dniError.textContent = "";
    telefonoError.textContent = "";

    if (isNaN(dniValue)) {
      myAlert("Por favor, ingrese solo números en el campo del DNI.");
      dniError.textContent = "Por favor, ingrese solo números en el campo del DNI.";
      return;
    }

    var telefonoRegex = /^\d{10}$/;
    if (!telefonoRegex.test(telefonoInput.value)) {
      myAlert("Por favor, ingrese un número de teléfono válido XXXXXXXXXX.");
      telefonoInput.value = "";
      return;
    }

    var formData = new FormData(this);

    if (dniValue === "" || telefonoInput.value === "") {
      myAlert("Por favor, complete todos los campos obligatorios.");
      return;
    }

    // Realizar la solicitud POST utilizando fetch
    fetch('https://api.sheetmonkey.io/form/srq7oRMsFpPb5XA8VXVUhc', {
      method: 'POST',
      body: formData
    })
      .then(function(response) {
        if (response.ok) {
          myAlert("¡SUERTE!");
          document.getElementById('concursoForm').reset();//Vacia el form
          console.log(response);
        } else {
          myAlert("Ha ocurrido un error al enviar el formulario.");
          console.error('Error en la solicitud:', response.status);
        }
      })
      .catch(function(error) {
        console.error('Error en la solicitud:', error);
      });
  });
}




//--script del formulario Consulta--//
var consultaForm = document.getElementById('consultaForm');
if (consultaForm) {
  consultaForm.addEventListener('submit', function(event) {
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
        document.getElementById('consultaForm').reset();//vacia el form
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
  
}
