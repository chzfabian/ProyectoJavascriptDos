import {productosTienda} from "./cherisbuba" 
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
        "ᴜsᴛᴇᴅ ᴇsᴛᴀ ᴇɴ ʟᴀ ᴄᴀᴛᴇɢᴏʀɪᴀ ᴅᴇ ᴘʀᴏᴅᴜᴄᴛᴏs ᴅᴇ: " +
        tipoPasillo +
        ". 🌟 ʟᴏs ᴘʀᴏᴅᴜᴄᴛᴏs ᴅɪsᴘᴏɴɪʙʟᴇs sᴏɴ: \n";
      let salida =
        mensaje +
        productosFiltrados
          .map((producto) => {
            return `ID: ${producto.id}  ${producto.nombre} $${producto.precioUnitario} 💸`;
          })
          .join("\n");
      alert(salida);
    }
  };
  switch (opcion) {
    case 1:
        alert("ᴜsᴛᴇᴅ ᴅᴇᴄɪᴅɪᴏ ʟᴀ ᴄᴀᴛᴇɢᴏʀɪᴀ ᴅᴇᴛᴇ-sᴇʀɪᴇs ✨");
        identificador("ᴛᴇ-sᴇʀɪᴇs");
        break;
    case 2:
        alert("ᴜsᴛᴇᴅ ᴅᴇᴄɪᴅɪᴏ ʟᴀ ᴄᴀᴛᴇɢᴏʀɪᴀ ᴅᴇ ɪᴄᴇ-ᴅʀɪɴᴋ ✨✔️");
        identificador("Ice-Drink");
        break;
    case 3:
        alert("ᴜsᴛᴇᴅ ᴅᴇᴄɪᴅɪᴏ ʟᴀ ᴄᴀᴛᴇɢᴏʀɪᴀ ᴅᴇ ᴄᴏғғᴇ-sᴇʀɪᴇs ✨💯");
        identificador("ᴄᴏғғᴇ-sᴇʀɪᴇs");
        break;
         case 4:
        alert("ᴜsᴛᴇᴅ ᴅᴇᴄɪᴅɪᴏ ʟᴀ ᴄᴀᴛᴇɢᴏʀɪᴀ ᴅᴇ ᴄʜᴏᴄᴏ-sᴇʀɪᴇs ✨🎉");
        identificador("ᴄʜᴏᴄᴏ-sᴇʀɪᴇs");
        break; 
    case 5:
        alert("ᴜsᴛᴇᴅ ᴅᴇᴄɪᴅɪᴏ ʟᴀ ᴄᴀᴛᴇɢᴏʀɪᴀ ᴅᴇ ʙᴏʙᴀᴡᴀʀ ✨🌈");
        identificador("ʙᴏʙᴀᴡᴀʀ");
        break;
    case 6:
      alert("ᴜsᴛᴇᴅ ᴅᴇᴄɪᴅɪᴏ ʟᴀ ᴄᴀᴛᴇɢᴏʀɪᴀ ᴅᴇ ᴛᴏᴘᴘɪɴɢ ✨❤️"); 
      identificador("ᴛᴏᴘᴘɪɴɢ");  
      break;      
    default:
      alert(
        "ᴇʟɪɢᴀ ᴜɴ ᴘʀᴏᴅᴜᴄᴛᴏ ᴘᴀʀᴀ ᴄᴏɴᴛɪɴᴜᴀʀ ᴄᴏɴ sᴜ ᴄᴏᴍᴘʀᴀ ❤️"
      );
  }
  
  let productoASeleccionar = prompt(
    "¿ǫᴜᴇ ᴄʜᴇʀɪsʙᴜʙᴀ ɪᴛᴇᴍ ᴅᴇsᴇᴀ?.  \n ᴘᴀʀᴀ ᴇʟᴇɢɪʀ ᴜɴ ɪᴛᴇᴍ sᴏʟᴏ ᴇsᴄʀɪʙᴀ ᴇʟ ɪᴅ ǫᴜᴇ ʟᴇ ᴄᴏʀʀᴇsᴘᴏɴᴅᴀ. 💲"
  );
  
  function selecccionDeProductos() {
    if (productoASeleccionar) {
      let productoElegido = productosTienda.find(
        (producto) => producto.id == productoASeleccionar
      );
      let comunicado = `ᴜsᴛᴇᴅ ʜᴀ ᴇʟᴇɢɪᴅᴏ ᴇʟ ᴘʀᴏᴅᴜᴄᴛᴏ: ${productoElegido.nombre}😵‍💫\n ᴄᴏɴ ᴘʀᴇᴄɪᴏ ᴜɴɪᴛᴀʀɪᴏ: $${productoElegido.precioUnitario}\n Con ID ${productoElegido.id}`;
      alert(comunicado);
    }
  }
  selecccionDeProductos();
  
  let pregunta;
  
  do {
    pregunta = Number(prompt("ᴅᴇsᴇᴀ ʟʟᴇᴠᴀʀ ᴄᴏɴsᴜᴍɪʀ ᴇɴ ᴇʟ ʟᴏᴄᴀʟ ᴏ ᴘᴀʀᴀ ʟʟᴇᴠᴀʀ? 🤩 \n ᴇsᴄʀɪʙᴀ 1 sɪ ᴅᴇsᴇᴀ ᴄᴏɴsᴜᴍɪʀ ᴇɴ ᴇʟ ʟᴏᴄᴀʟ. ❤️🤘\n ᴇsᴄʀɪʙᴀ 2 sɪ ᴅᴇsᴇᴀ ʟʟᴇᴠᴀʀ sᴜ ʙᴇʙɪᴅᴀ. 😜"));

    if (pregunta !== 1 && pregunta !== 2) {
        alert("ʀᴇsᴘᴜᴇsᴛᴀ ɴᴏ ᴠáʟɪᴅᴀ. ᴘᴏʀ ғᴀᴠᴏʀ, ɪɴɢʀᴇsᴇ ᴜɴ ɴᴜᴍᴇʀᴏ 🤪🤥");
        }
    } while (pregunta !== 1 && pregunta !== 2);

    if (pregunta === 1) {
        alert("ɢʀᴀᴄɪᴀs ᴘᴏʀ ᴄᴏᴍᴘʀᴀʀ ᴇɴ ᴄʜᴇʀɪs ʙᴜʙᴀ 💜💜😜")
    } else if (pregunta === 2) {
            alert ("ɢʀᴀᴄɪᴀs ᴘᴏʀ sᴜ ᴠɪsɪᴛᴀ ᴠᴜᴇʟᴠᴀ ᴘʀᴏɴᴛᴏ ᴀ ᴄʜᴇʀɪs ʙᴜʙᴀ 🎉👋")
        } else {
            alert("ʀᴇsᴘᴜᴇsᴛᴀ ɴᴏ ᴠáʟɪᴅᴀ. ᴘᴏʀ ғᴀᴠᴏʀ, ɪɴɢʀᴇsᴇ ᴜɴ ɴᴜᴍᴇʀᴏ 😊");
        } 