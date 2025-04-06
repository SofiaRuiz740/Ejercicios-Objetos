// ♡♡♡♡ EJERCICIO 2: Sistema de gestión de turnos para un banco ♡♡♡♡ 

const cola = []; // Array para almacenar los turnos en espera
let contador = 0; // Contador total de turnos

// Función flecha para tomar un nuevo turno
const tomarTurno = () => {
  contador++; // Aumentamos el contador

  // Creamos el turno como objeto
  const nuevoTurno = {
    numero: `T-${contador}`,
    atendido: false
  };

  // push() para agregar al final de la cola
  cola.push(nuevoTurno);

  alert(`✅ Turno asignado: ${nuevoTurno.numero}`);
};

// Función flecha para llamar al siguiente cliente
const llamarCliente = () => {
  if (cola.length === 0) {
    alert("⚠️ No hay clientes en espera.");
    return;
  }

  // shift() para sacar el primero de la cola
  const siguiente = cola.shift();
  siguiente.atendido = true;

  alert(`📢 Cliente con turno ${siguiente.numero}, pase a la ventanilla.`);
};

// Función flecha para mostrar la cola de espera
const mostrarCola = () => {
  const enEspera = cola.map((turno, index) => `#${index + 1}: ${turno.numero}`);

  const mensaje = enEspera.length > 0
    ? `📋 Turnos en espera:\n${enEspera.join("\n")}`
    : "✅ No hay turnos en espera.";

  alert(mensaje);
};

// Función flecha para mostrar la cantidad de turnos tomados
const mostrarContador = () => {
  alert(`📊 Turnos generados hasta ahora: ${contador}`);
};

// Menú principal con do...while, prompt, alert, switch
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

// Ejecutamos el menú
menu();



