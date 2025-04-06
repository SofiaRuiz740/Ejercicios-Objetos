// ♡♡♡♡ EJERCICIO 4: Sistema de Gestión de Citas Médicas ♡♡♡♡

const citas = []; // Array para guardar las citas médicas programadas

// Función flecha para programar una nueva cita
const programarCita = () => {
  const nombre = prompt("Ingrese el nombre del paciente:");
  const fecha = prompt("Ingrese la fecha de la cita (formato: YYYY-MM-DD):");
  const hora = prompt("Ingrese la hora de la cita (formato: HH:MM):");
  const medico = prompt("Ingrese el nombre del médico:");

  // Validación de la fecha
  const partesFecha = fecha.split("-");
  const año = parseInt(partesFecha[0]);
  const mes = parseInt(partesFecha[1]);
  const dia = parseInt(partesFecha[2]);

  // Validación de la hora
  const partesHora = hora.split(":");
  const horas = parseInt(partesHora[0]);
  const minutos = parseInt(partesHora[1]);

  // Validación con isNaN y rangos válidos
  if (
    !nombre ||
    !fecha ||
    !hora ||
    !medico ||
    partesFecha.length !== 3 ||
    partesHora.length !== 2 ||
    isNaN(año) || isNaN(mes) || isNaN(dia) ||
    isNaN(horas) || isNaN(minutos) ||
    año < 2025 || año > 2025 ||
    mes < 1 || mes > 12 ||
    dia < 1 || dia > 31 ||
    horas < 0 || horas > 23 ||
    minutos < 0 || minutos > 59
  ) {
    alert("❌ Datos inválidos. Asegúrate de escribir la fecha y hora correctamente.");
    return;
  }

  // Agregamos la cita al array usando push()
  citas.push({
    nombre: nombre,
    fecha: fecha,
    hora: hora,
    medico: medico,
  });

  alert("✅ Cita programada con éxito.");
};

// Función flecha para ver las citas programadas
const verCitas = () => {
  if (citas.length === 0) {
    alert("📭 No hay citas programadas.");
    return;
  }

  // Ordenamos las citas por fecha y hora
  const citasOrdenadas = [...citas].sort((a, b) => {
    const fechaA = a.fecha + " " + a.hora;
    const fechaB = b.fecha + " " + b.hora;
    return fechaA.localeCompare(fechaB); // Compara las fechas como strings
  });

  // Mostramos las citas con forEach()
  let mensaje = "📅 Citas programadas:\n\n";
  citasOrdenadas.forEach((cita, i) => {
    mensaje += `${i + 1}. ${cita.nombre} - ${cita.fecha} a las ${cita.hora} con Dr. ${cita.medico}\n`;
  });

  alert(mensaje);
};

// Función flecha para cancelar una cita
const cancelarCita = () => {
  const nombre = prompt("Ingrese el nombre del paciente cuya cita desea cancelar:");

  // Buscamos el índice con findIndex()
  const index = citas.findIndex(cita => cita.nombre.toLowerCase() === nombre.toLowerCase());

  if (index !== -1) {
    citas.splice(index, 1); // Eliminamos la cita con splice()
    alert("🗑️ Cita cancelada exitosamente.");
  } else {
    alert("❌ No se encontró una cita con ese nombre.");
  }
};

// Función flecha para el menú principal con do...while
const menu = () => {
  let opcion;

  do {
    opcion = prompt(
      "🩺 SISTEMA DE CITAS MÉDICAS\n1. Programar cita\n2. Ver citas\n3. Cancelar cita\n4. Salir"
    );

    switch (opcion) {
      case "1":
        programarCita();
        break;
      case "2":
        verCitas();
        break;
      case "3":
        cancelarCita();
        break;
      case "4":
        alert("👋 Gracias por usar el sistema.");
        break;
      default:
        alert("❌ Opción inválida. Intenta nuevamente.");
    }
  } while (opcion !== "4");
};

// Ejecutamos el menú
menu();





