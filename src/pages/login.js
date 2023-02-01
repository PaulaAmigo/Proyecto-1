export const login = () => {
  const container = document.createElement("div");
  const html = `
    <div>
        <div id="titulo">
          <h1>Bienvenido</h1>
          <h2>Iniciar sesión</h2>
        </div>
        <div id="inicioSesion">
          <div id="usuario">
            <h2>Usuario</h2>
            <div id="boxOne"></div>
          </div>
          <div id="contraseña">
            <h2>Contraseña</h2>
            <div id="boxTwo"></div>
          </div>
          <button id="ingresar">ingresar</button>
        </div>
      </div> `;
  container.innerHTML = html;
  return container;
};
