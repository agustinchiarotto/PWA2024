const classes = (classesNames) => {};

// console.log('Inicio');

// setTimeout(() => {
//   console.log('Procesado después de 2 segundos');
// }, 2000);

// console.log('Fin');

// const fetchTareas = async () => {
//     try {
//       const result = await fetch("https://jsonplaceholder.typicode.com/users");
//       if (!result.ok) {
//         throw new Error(`HTTP error! status: ${result.status}`);
//       }
//       const parsed = await result.json();
//       console.log("parsed: ", parsed);
//     } catch (e) {
//       console.error("Error fetching tasks:", e);
//     }
//   };

//https://jsonplaceholder.typicode.com/users

//let promesa = new Promise((resolve, reject) => {
// Simular un código asíncrono
//   let condicion = true;
//   if (condicion) {
//     resolve('Promesa cumplida');
//   } else {
//     reject('Promesa rechazada');
//   }
// });

// promesa
//   .then(result => console.log(result)) // Manejar el éxito
//   .catch(error => console.log(error)); // Manejar el error

//function procesarUsuario(id, callback) {
//     const usuario = obtenerDatosDeUsuario(id); // Simula obtener datos de algún lugar
//     if (usuario) {
//         callback(null, usuario); // Invoca la función callback con los datos del usuario
//     } else {
//         callback('No se encontró el usuario');
//     }
// }

// function mostrarUsuario(error, usuario) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('Usuario encontrado:', usuario);
//     }
// }

// // Uso de la función con un callback
// procesarUsuario(101, mostrarUsuario);
