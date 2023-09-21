const productosTienda = [
    {
      id: 1,
      pasillo: "Carnes",
      nombre: "Filete de res",
      cantidad: 2,
      precioUnitario: 10.99,
    },
    {
      id: 2,
      pasillo: "Carnes",
      nombre: "Pechuga de pollo",
      cantidad: 3,
      precioUnitario: 7.99,
    },
    {
      id: 3,
      pasillo: "Carnes",
      nombre: "Salchichas",
      cantidad: 1,
      precioUnitario: 4.49,
    },
    {
      id: 4,
      pasillo: "Vegetales",
      nombre: "Tomates",
      cantidad: 5,
      precioUnitario: 1.99,
    },
    {
      id: 5,
      pasillo: "Vegetales",
      nombre: "Lechuga",
      cantidad: 1,
      precioUnitario: 2.49,
    },
    {
      id: 6,
      pasillo: "Vegetales",
      nombre: "Zanahorias",
      cantidad: 3,
      precioUnitario: 0.99,
    },
    {
      id: 7,
      pasillo: "Aseo",
      nombre: "Jabón de manos",
      cantidad: 2,
      precioUnitario: 3.29,
    },
    {
      id: 8,
      pasillo: "Aseo",
      nombre: "Papel higiénico",
      cantidad: 12,
      precioUnitario: 0.79,
    },
    {
      id: 9,
      pasillo: "Aseo",
      nombre: "Detergente",
      cantidad: 1,
      precioUnitario: 5.99,
    },
    {
      id: 10,
      pasillo: "Lácteos",
      nombre: "Leche",
      cantidad: 2,
      precioUnitario: 2.49,
    },
    {
      id: 11,
      pasillo: "Lácteos",
      nombre: "Queso cheddar",
      cantidad: 1,
      precioUnitario: 4.99,
    },
    {
      id: 12,
      pasillo: "Lácteos",
      nombre: "Yogur",
      cantidad: 4,
      precioUnitario: 1.25,
    },
    {
      id: 13,
      pasillo: "Granos",
      nombre: "Arroz",
      cantidad: 3,
      precioUnitario: 1.49,
    },
    {
      id: 14,
      pasillo: "Granos",
      nombre: "Frijoles",
      cantidad: 2,
      precioUnitario: 2.99,
    },
    {
      id: 15,
      pasillo: "Granos",
      nombre: "Pasta",
      cantidad: 2,
      precioUnitario: 1.79,
    },
  ];
  let opcion;
  alert(
    "Bienvenido a nuestra tienda.\n Por favor recargue la pagina para poder ver el fondo(si no lo ve)."
  );
  do {
    opcion = Number(
      prompt(
        `En Valley tenemos diferentes secciones en las cuales son:\n1: Pasillo de Carnes.\n2: Pasillo de Vegetales.\n3: Pasillo de Granos.\n4: Pasillo de Aseo.\n5: Pasillo de Lácteos.`
      )
    );
  } while (opcion == 0 || opcion == null || opcion > 5);
  
  let identificador = (tipoPasillo) => {
    if (opcion) {
      let productosFiltrados = productosTienda.filter(
        (producto) => producto.pasillo == tipoPasillo
      );
      let mensaje =
        "Usted esta en el pasillo: " +
        tipoPasillo +
        ". Los productos disponibles son:\n";
      let salida =
        mensaje +
        productosFiltrados
          .map((producto) => {
            return `ID: ${producto.id}  ${producto.nombre} $${producto.precioUnitario}`;
          })
          .join("\n");
      alert(salida);
    }
  };
  
  switch (opcion) {
    case 1:
      alert("Usted a elegido ir a el pasillo de Carnes.");
      identificador("Carnes");
      break;
    case 2:
      alert("Usted a elegido ir a el pasillo de Vegetales.");
      identificador("Vegetales");
      break;
    case 3:
      alert("Usted a elegido ir a el pasillo de Granos.");
      identificador("Granos");
      break;
    case 4:
      alert("Usted a elegido ir a el pasillo de Aseo.");
      identificador("Aseo");
      break;
    case 5:
      alert("Usted a elegido ir a el pasillo de Lácteos.");
      identificador("Lácteos");
      break;
    default:
      alert(
        "Por favor elija un pasillo para continuar con su recorrido en la tienda"
      );
  }
  
  let productoASeleccionar = prompt(
    "¿Qué producto desea?. \n Para elegir un producto solo escriba el ID que le corresponda."
  );
  
  function selecccionDeProductos() {
    if (productoASeleccionar) {
      let productoElegido = productosTienda.find(
        (producto) => producto.id == productoASeleccionar
      );
      let comunicado = `Usted ha elegido el producto: ${productoElegido.nombre}\n Con precio Unitario: $${productoElegido.precioUnitario}\n Con ID ${productoElegido.id}`;
      alert(comunicado);
    }
  }
  selecccionDeProductos();
  
  let pregunta;
  
  do {
    pregunta = Number(
      prompt(
        "Desea llevar bolsa plástica o ecológica?\nEscriba 1 si desea llevar bolsa ecológica .\nEscriba 2 si no desea llevar bolsa plástica."
      )
    );
  
    if (pregunta !== 1 && pregunta !== 2) {
      alert("Respuesta no válida. Por favor, ingrese un numero");
    }
  } while (pregunta !== 1 && pregunta !== 2);
  
  if (pregunta === 1) {
    alert("Gracias por comprar en Valley y cuidar el medio ambiente, vuelva pronto! 💚💚")
  } else if (pregunta === 2) {
    alert("Gracias por comprar en Valley, vuelva pronto. ❤️‍🔥❤️‍🔥");
  } else {
    alert("Respuesta no válida. Por favor, ingrese un numero");
  }