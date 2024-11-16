// Variables y objetos

const usuarios = []; 

class Usuario {

    constructor (nombre, edad, email, contraseña){
        this.nombre = nombre;
        this.edad = edad;
        this.email = email;
        this.contraseña = contraseña;
        this.suscrito = false;
    }
}





// Función para registrar un usuario

function registrarUsuario() {

    let nombre = prompt("Ingrese su nombre:");
    while (nombre == '' || !isNaN(nombre)) {
        alert("Por favor, ingrese un nombre válida.");
        nombre = prompt("Ingrese su nombre:");
    }
    let edad = parseInt(prompt("Ingrese su edad:"));
    while (isNaN(edad) || edad <= 0) {
        alert("Por favor, ingrese una edad válida.");
        edad = parseInt(prompt("Ingrese su edad:"));
    }
    let email = prompt("Ingrese su email:");
    while (!email.includes('@')) {
        alert("Su email no contien @, ingrese un email valido.");
        email = prompt("Ingrese su email:");
    }
    let contraseña = prompt("Ingrese una contraseña de 4 digitos:");
    while (isNaN(contraseña) || contraseña.length!=4 ) {
        console.log(contraseña)
        alert("Su contraseña no es valida.");
        contraseña = prompt("Ingrese una contraseña de 4 digitos:");
        }
    
    usuarios.push(new Usuario(nombre, edad, email, contraseña))
    alert(`Usuario registrado:\nNombre: ${nombre}\nEdad: ${edad}\nEmail: ${email}`);
    return
}


function suscribirse() { 
    const indiceUsuario = iniciarSesion(); // obtener índice del usuario
    
    // Verificar si la sesión se inició correctamente
    if (indiceUsuario === undefined) {
        alert("No se pudo iniciar sesión. Volviendo al menú principal.");
        return; // Salir de la función y volver al menú
    }

    const usuario = usuarios[indiceUsuario]; // Obtener el usuario desde el array

    // Verificar si ya está suscrito
    if (usuario.suscrito) {
        alert(`¡Hola, ${usuario.nombre}! Ya estás suscrito.`);
    } else {
        usuario.suscrito = true;
        alert(`Bienvenido, ${usuario.nombre}, a nuestra suscripción!`);
    }
}


function mostrarUsuarios() {
    if (usuarios.length === 0) {
        alert("No hay usuarios registrados.");
    } else {
        alert("Usuarios registrados:")
        for (const usuario of usuarios){
            alert(`Nombre, ${usuario.nombre}, email: ${usuario.email}`)
        }
    }
}



// Función terciaria


function iniciarSesion() {
    //Busca el usuario por el nombre, si lo encuenta, devuelve el index de su posicion en el array, caso contrario devuelve undefined
    let usuario;
    let nombre = prompt("Ingresa tu nombre:");

    for (let u of usuarios) {
        if (u.nombre === nombre) {
            usuario = u;
            break;
        }
    }
    if (!usuario) {  // Si no se encuentra el usuario
        alert("No tenemos ese nombre almacenado.");
        return undefined;
    }
    let intentos = 0; 
    while (intentos < 5) { 
        let contraseña = prompt("Ingresa tu contraseña:");
        if (contraseña === usuario.contraseña) {
            alert("¡Bienvenido a la suscripción!");
            return usuarios.indexOf(usuario);  // Devuelve el índice del usuario en la lista guardada
        } else {
            alert("Contraseña incorrecta, vuelva a intentar.");
            intentos++;
        }
    }
    alert("Has superado el límite de intentos. Vuelve a intentarlo más tarde.");
    return undefined;
}




function menu() {
    let opcion;
    do {
        opcion = prompt(
            "Seleccione una opción:\n" +
            "1. Registrar un usuario\n" +
            "2. Iniciar sesión y suscribirse\n" +
            "3. Mostrar todos los usuarios registrados\n" +
            "4. Salir"
        );
        
        if (opcion < "1" || opcion > "4") {
            alert("Por favor, ingrese una opción válida.");
            continue;
        }

        switch (opcion) {
            case "1":
                registrarUsuario();
                break;
            case "2":
                suscribirse();
                break;
            case "3":
                mostrarUsuarios();
                break;
            case "4":
                alert("Saliendo del programa. ¡Hasta luego!");
                break;
            default:
                alert("Por favor, ingrese una opción válida.");
        }
    } while (opcion !== "4");
}

menu ();