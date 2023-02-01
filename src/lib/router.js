//importamos las vistas
import { login } from "../pages/login.js";
import { search } from "../pages/search.js";
import { profile } from "../pages/profile";

// const rootDiv = document.getElementById('root');

//creamos una variable con objetos y se colocaron las rutas, que importamos en main.js
export const routes = {
  "/": login(),
  "/search": search(),
  "/profile": profile(),
};
