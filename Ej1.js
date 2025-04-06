// ♡♡♡♡ EJERCICIO 1: Estadísticas de atención universitaria ♡♡♡♡

const personas = []; // Array vacío donde guardaremos los datos

// Función flecha para registrar una persona
const registrar = () => {
  let cedula; // Variable para guardar la cédula
  let tipo; // Variable para el tipo de atención
  let quien; // Variable para saber si es estudiante o directivo
  let transferido = false; // Variable para saber si se transfirió asesoría a llamada


  // Validar que la cédula sea un número
  while (true) {
    cedula = parseInt(prompt("¿Cuál es tu cédula?"));
    if (isNaN(cedula)) {
      alert("Por favor, ingrese los dígitos de su cédula.");
    } else {
      break; // Sale del ciclo si la cédula es válida
    }
  }

  // Validar que el tipo de atención sea "llamada" o "asesoria"
  while (true) {
    tipo = prompt("¿Qué tipo de atención necesitas? (llamada o asesoria)").toLowerCase();
    if (tipo !== "llamada" && tipo !== "asesoria") {
      alert("Tipo de atención inválido.");
    } else {
      break; // Sale del ciclo si el tipo es válido
    }
  }

  // Si el tipo es "asesoria", preguntar si es estudiante o directivo
  if (tipo === "asesoria") {
    while (true) {
      quien = prompt("¿Eres estudiante o directivo?").toLowerCase();
      if (quien !== "estudiante" && quien !== "directivo") {
        alert("Por favor, indique si es estudiante o directivo.");
      } else {
        break;
      }
    }

    // Pregunta si desea transferir la asesoría a llamada
    const respuesta = parseInt(prompt("¿Deseas transferir esta asesoría a una llamada telefónica?\n 1.si\n 2.no\n"));
    if (respuesta === 1) {
     transferido = true; // Solo si respondió que sí
    }
  }

  // Agregamos la persona al array
  personas.push({
    cedula: cedula,
    tipo: tipo,
    quien: quien,
    transferido: transferido
  });

  alert("Persona registrada con éxito.");
};

// Función flecha para mostrar estadísticas
const mostrarEstadisticas = () => {
  let total = personas.length;
  let llamadas = 0;
  let asesorias = 0;
  let estudiantes = 0;
  let directivos = 0;
  let transferencias = 0;

  // Usamos forEach() para contar
  personas.forEach((u) => {
    if (u.tipo === "llamada") {
      llamadas++;
    } else if (u.tipo === "asesoria") {
      asesorias++;
      if (u.quien === "estudiante") {
        estudiantes++;
      } else if (u.quien === "directivo") {
        directivos++;
      }
      if (u.transferido) {
        llamadas++; // También cuenta como llamada
        transferencias++; // Contamos la transferencia
      }
    }
  });

  // Mostramos los resultados con alert
  alert(`📊 Estadísticas:
- Total de usuarios: ${total}
- Llamadas telefónicas: ${llamadas}
- Asesorías: ${asesorias}
  • Estudiantes: ${estudiantes}
  • Directivos: ${directivos}
- Transferencias de asesoría a llamada: ${transferencias}`);
};

// Función flecha para el menú principal con do...while
const menu = () => {
  let opcion;
  do {
    opcion = prompt(
      "📋 MENÚ DE ATENCIÓN\n1. Registrar usuario\n2. Mostrar estadísticas\n3. Salir"
    );

    // Estructura switch para el menú
    switch (opcion) {
      case "1":
        registrar();
        break;
      case "2":
        personas.length > 0
          ? mostrarEstadisticas()
          : alert("❗ No hay usuarios registrados aún.");
        break;
      case "3":
        alert("👋 Saliendo del sistema. ¡Hasta luego!");
        break;
      default:
        alert("❌ Opción inválida. Intente nuevamente.");
    }
  } while (opcion !== "3");
};

// Llamamos al menú principal
menu();


   

