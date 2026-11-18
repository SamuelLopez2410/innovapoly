/* Configuración del relay (TURN) para jugar entre redes distintas (datos móviles + Wi-Fi).
   Rellena SOLO UNA de las dos opciones. Este archivo debe estar en la misma carpeta que index.html. */

/* OPCIÓN A (recomendada): URL de credenciales de Metered.
   Pega entre las comillas la URL completa que te muestra tu panel de Metered (la de "credentials API",
   termina en ?apiKey=TU_CLAVE). */
window.ICE_URL = "https://innovapoly.metered.live/api/v1/turn/credentials?apiKey=0f39696b58fd5913526891422383cc79a0f1";

/* OPCIÓN B: servidores fijos (por ejemplo ExpressTURN u otro proveedor). Ejemplo:
   window.ICE_SERVERS = [
     { urls: "turn:SERVIDOR:3478", username: "USUARIO", credential: "CLAVE" }
   ];
*/
window.ICE_SERVERS = [];
