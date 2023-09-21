const productosTienda = [
        // Te-Series//
    {
      id: 1,
      pasillo: "Tea-Series",
      nombre: "Thai Tea",
      cantidad: 2,
      precioUnitario: 5.99
    },
    {
      id: 2,
      pasillo: "Tea-Series",
      nombre: "Green Tea",
      cantidad: 3,
      precioUnitario: 6.99,
    },
    {
      id: 3,
      pasillo: "Tea-Series",
      nombre: "Lemon Tea",
      cantidad: 1,
      precioUnitario: 6.99,
    },
        //Ice-Drink //   
    {
      id: 4,
      pasillo: "Ice-Drink",
      nombre: "Chocolate",
      cantidad: 5,
      precioUnitario: 9.5,
    },
    {
      id: 5,
      pasillo: "Ice-Drink",
      nombre: "Red Velvet",
      cantidad: 1,
      precioUnitario: 9.5,
    },
    {
      id: 6,
      pasillo: "Ice-Drink",
      nombre: "MILO",
      cantidad: 3,
      precioUnitario: 9.99,
    },
        //Coffe-Series //  
    {
      id: 7,
      pasillo: "Coffe-Series",
      nombre:  "Kopaja",
      cantidad: 2,
      precioUnitario: 9.99,
    },
    {
      id: 8,
      pasillo: "Coffe-Series",
      nombre:  "Kopi Suren",
      cantidad: 12,
      precioUnitario: 10.99,
    },
    {
      id: 9,
      pasillo: "Coffe-Series",
      nombre: "Kopi Suklat",
      cantidad: 1,
      precioUnitario: 11.99,
    },
        //BobaWar//  
    {
      id: 10,
      pasillo: "BobaWar",
      nombre: "Boba Thai Tea",
      cantidad: 2,
      precioUnitario: 14.99,
    },
    {
      id: 11,
      pasillo: "BobaWar",
      nombre: "Boba Chocolate",
      cantidad: 1,
      precioUnitario: 11.99, 
    },
    {
      id: 12,
      pasillo: "BobaWar",
      nombre: "Boba Green Tea",
      cantidad: 4,
      precioUnitario: 9.99, 
    },
    {
      id: 13,
      pasillo: "BobaWar", 
      nombre: "Boba Taro",
      cantidad: 3,
      precioUnitario: 9.99,
    },
    {
      id: 14,
      pasillo: "BobaWar",
      nombre:  "Boba Argentina",
      cantidad: 2,
      precioUnitario: 15.99,  
    },
     //Topping//  
    {
      id: 15,
      pasillo: "Topping",
      nombre: "Choco Cream +4k",
      cantidad: 6,
      precioUnitario: 2,
    },
  ];
  let opcion;
  alert("ʙɪᴇɴᴠᴇɴɪᴅᴏs ᴀ ᴄʜᴇʀɪs ʙᴜʙᴀ ☕");
  do {
    opcion = Number(
      prompt('ᴄʜᴇʀɪs ʙᴜʙʙᴀ ᴛɪᴇɴᴇ ʟᴏ ᴍᴇᴊᴏʀ ᴘᴀʀᴀ ᴛɪ: \n1: ᴛᴇ-sᴇʀɪᴇs. 🍵 \n2: ɪᴄᴇ-ᴅʀɪɴᴋ. 🥛 \n3: ᴄᴏғғᴇ-sᴇʀɪᴇs. ☕ \n4: ᴄʜᴏᴄᴏ-sᴇʀɪᴇs. 🥤 \n5: ʙᴏʙᴀᴡᴀʀ. 🍨 \n6: ᴛᴏᴘᴘɪɴɢ 🍫🍬'
      )
    );
  } while (opcion == 0 || opcion == null || opcion > 6);
  
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
        alert("Usted decidio la categoria de Te-Series");
        identificador("Te-Series");
        break;
    case 2:
        alert("Usted decidio la categoria de Ice-Drink");
        identificador("Ice-Drink");
        break;
    case 3:
        alert("Usted decidio la categoria de Coffe-Series");
        identificador("Coffe-Series");
        break;
    case 4:
        alert("Usted decidio la categoria de Choco-Series");
        identificador("Choco-Series");
        break;
    case 5:
        alert("Usted decidio la categoria de BobaWar");
        identificador("BobaWar");
        break;
    case 6:
        case 6:
            alert("Usted decidio la categoria de Topping"); 
            identificador("Topping");        
    default:
      alert(
        "Eliga un producto para continuar con su compra"
      );
  }
  
  let productoASeleccionar = prompt(
    "¿Que CherisBuBa item desea?. \n Para elegir un item solo escriba el ID que le corresponda."
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
    pregunta = Number(prompt("Desea llevar consumir en el local o para llevar?\nEscriba 1 si desea consumir en el local.\n Escriba 2 si desea llevar su bebida. "));

    if (pregunta !== 1 && pregunta !== 2) {
        alert("Respuesta no válida. Por favor, ingrese un numero");
        }
    } while (pregunta !== 1 && pregunta !== 2);

    if (pregunta === 1) {
        alert("Gracias por comprar en Cheris Buba ❤️")
    } else if (pregunta === 2) {
            alert ("Gracias por su visita vuelva pronto a Cheris Buba")
        } else {
            alert("Respuesta no válida. Por favor, ingrese un numero");
        } 