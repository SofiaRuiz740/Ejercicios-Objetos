// ♡♡♡♡ EJERCICIO 2: Sistema de gestión de turnos para un banco ♡♡♡♡ 

const cola = []; // Arreglo que guarda los números de turnos (solo el número, no un objeto)
let contador = 0; // Lleva la cuenta de cuántos turnos se han entregado

// Toma un nuevo turno y lo agrega a la cola
const tomarTurno = () => {
  contador++; // Aumentamos el contador
  const turno = `T-${contador}`; // Creamos un turno como texto
  cola.push(turno); // Lo metemos en la cola
  alert(`✅ Turno asignado: ${turno}`);
};

// Llama al siguiente cliente en la cola
const llamarCliente = () => {
  if (cola.length === 0) {
    alert("⚠️ No hay clientes en espera.");
    return;
  }

  const turnoLlamado = cola.shift(); // Sacamos el primer turno de la cola
  alert(`📢 Cliente con turno ${turnoLlamado}, pase a la ventanilla.`);
};

// Muestra todos los turnos que están en espera
const mostrarCola = () => {
  if (cola.length === 0) {
    alert("✅ No hay turnos en espera.");
    return;
  }

  let mensaje = "📋 Turnos en espera:\n";
  cola.forEach((turno, i) => {
    mensaje += `#${i + 1}: ${turno}\n`;
  });

  alert(mensaje);
};

// Muestra el total de turnos que se han generado
const mostrarContador = () => {
  alert(`📊 Turnos generados hasta ahora: ${contador}`);
};

// Menú principal con do...while y switch
const menu = () => {
  let opcion;

  do {
    opcion = prompt(
      "🏦 MENÚ DEL BANCO\n1. Tomar turno\n2. Llamar cliente\n3. Ver cola de espera\n4. Ver total de turnos\n5. Salir"
    );

    switch (opcion) {
      case "1":
        tomarTurno();
        break;
      case "2":
        llamarCliente();
        break;
      case "3":
        mostrarCola();
        break;
      case "4":
        mostrarContador();
        break;
      case "5":
        alert("👋 Gracias por usar el sistema. ¡Hasta pronto!");
        break;
      default:
        alert("❌ Opción inválida. Intenta de nuevo.");
    }
  } while (opcion !== "5");
};

// Iniciamos el programa
menu();




