function mostrarRecuerdo(id) {
    const recuerdos = {
        '1': `
      <h2>Un día especial en familia</h2>
      <p>Fuimos cerca del parque y comimos rico un dia de comida y felizidad.</p>
      <img src="imagenes/foto1.jpg" width="100%">
      <br><br>
      <button onclick="cerrarPopup()">⬅ Volver</button>
    `,
        '2': `
      <h2>Mi primer dibujo digital</h2>
      <p>Este dibujo lo hice usando una tableta gráfica. ¡Estaba muy feliz!</p>
      <img src="imagenes/foto2.jpg" width="100%">
      <br><br>
      <button onclick="cerrarPopup()">⬅ Volver</button>
    `,
        '3': `
      <h2>Vacaciones inolvidables</h2>
      <p>Playa, sol y muchas risas. Uno de mis recuerdos favoritos.</p>
      <img src="imagenes/foto3.jpg" width="100%">
      <br><br>
      <button onclick="cerrarPopup()">⬅ Volver</button>
    `,
    };

    document.getElementById('contenido-recuerdo').innerHTML = recuerdos[id];
    document.getElementById('popup').style.display = 'flex';
}

function cerrarPopup() {
    document.getElementById('popup').style.display = 'none';
}
