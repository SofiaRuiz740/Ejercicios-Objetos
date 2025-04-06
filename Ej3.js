// ♡♡♡♡ EJERCICIO 3: Carrito de compras ♡♡♡♡ 

// Accesorios disponibles
const productos = new Map();
productos.set("gorra", { precio: 20, stock: 10 });
productos.set("pulseras", { precio: 15, stock: 12 });
productos.set("anillos", { precio: 10, stock: 15 });
productos.set("cadenas", { precio: 25, stock: 8 });
productos.set("aretes", { precio: 12, stock: 20 });

// Carrito de compras
const carrito = new Map();

// Función flecha para mostrar productos
const mostrarProductos = () => {
  let lista = "🎁 ACCESORIOS DISPONIBLES:\n";
  let i = 1;
  productos.forEach((valor, clave) => {
    lista += `${i++}. ${clave.toUpperCase()} 💲${valor.precio} (Stock: ${valor.stock})\n`;
  });
  alert(lista);
};

// Función flecha para agregar producto al carrito
const agregarProducto = () => {
  mostrarProductos();

  let producto = prompt("🛒 ¿Qué producto deseas agregar al carrito?").toLowerCase();
  if (!productos.has(producto)) {
    alert("❌ Producto no disponible.");
    return;
  }

  let cantidad = parseInt(prompt("📦 ¿Cuántas unidades deseas agregar?"));
  if (isNaN(cantidad) || cantidad <= 0) {
    alert("⚠️ Cantidad inválida.");
    return;
  }

  const datos = productos.get(producto);
  if (cantidad > datos.stock) {
    alert(`❌ Solo hay ${datos.stock} unidades disponibles.`);
    return;
  }

  // Actualizar stock
  datos.stock -= cantidad;
  productos.set(producto, datos);

  // Si ya está en el carrito, actualizamos
  if (carrito.has(producto)) {
    const enCarrito = carrito.get(producto);
    enCarrito.cantidad += cantidad;
    carrito.set(producto, enCarrito);
  } else {
    carrito.set(producto, { cantidad, precio: datos.precio });
  }

  alert(`✅ Agregaste ${cantidad} ${producto}(s) al carrito.`);
};

// Función para mostrar carrito
const verCarrito = () => {
  if (carrito.size === 0) {
    alert("🛒 El carrito está vacío.");
    return;
  }

  let detalle = "📋 CARRITO DE COMPRAS:\n";
  let total = 0;

  carrito.forEach((valor, clave) => {
    const subtotal = valor.cantidad * valor.precio;
    detalle += `🔹 ${clave.toUpperCase()}: ${valor.cantidad} x 💲${valor.precio} = 💰${subtotal}\n`;
    total += subtotal;
  });

  detalle += `\n🧾 TOTAL A PAGAR: 💵 ${total}`;
  alert(detalle);
};

// Menú principal
const menu = () => {
  let opcion;
  do {
    opcion = prompt(
      "🛍️ MENÚ DE COMPRAS\n1. Ver productos\n2. Agregar producto\n3. Ver carrito\n4. Salir"
    );

    switch (opcion) {
      case "1":
        mostrarProductos();
        break;
      case "2":
        agregarProducto();
        break;
      case "3":
        verCarrito();
        break;
      case "4":
        alert("👋 Gracias por usar el carrito de compras.");
        break;
      default:
        alert("❗ Opción inválida.");
    }
  } while (opcion !== "4");
};

// Iniciar el sistema
menu();
