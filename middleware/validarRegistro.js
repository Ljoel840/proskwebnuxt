export default (componente) => {
	componente.errorPais= null,
	componente.errorNombre= null,
	componente.errorCorreo= null,
	componente.errorContrasena= null,
	componente.errors = false
	if (!componente.pais) {
		componente.errorPais = 'El País no puede estar vacío'
		componente.errors = true
	}	
	if (!componente.nombre) {
		componente.errorNombre = 'El Nombre no puede estar vacío'
		componente.errors = true
	}
	if (!componente.correo) {
		componente.errorCorreo = 'El Correo no puede estar vacío'
		componente.errors = true
	}else if (!validEmail(componente.correo)){
		componente.errorCorreo = 'Correo Inválido'
		componente.errors = true
	}
	if (!componente.contrasena) {
		componente.errorContrasena = 'Agregue una Contraseña'
		componente.errors = true
	}
	
	function validEmail (email) {
	var re = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
	return re.test(email);
	}
	
}