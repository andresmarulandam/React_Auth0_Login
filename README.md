1. Crear cuenta en Auth0
2. En la pagina de Auth0 en applications/applications: +create Application
3. Colocar el nombre de la app y seleccionar Single Page Web
4. Entrar a esa App creada y configurar en settings: Allowed Callbacks URLs, Allowed Logout URLs y Allowed Web Origins: colocar la Url de donde correra el proyecto en este caso de Vite: http://localhost:5173
5. Volver a Quickstart, seleccionar la tecnología en este caso React,
6. En consola del proyecto: npm install @auth0/auth0-react
7. En main.jsx: import { Auth0Provider } from '@auth0/auth0-react';
8. Crear un .env y crear la variable y colocar el domain que sale en settings: REACT_API_AUTH0_DOMAIN=
9. Crear otra variable en el .env y colocar el client id: REACT_APP_AUTH0_CLIENT_ID=
10. Con import.meta.env leemos las variables
11. en main.jsx: const domain = import.meta.env.VITE_API_AUTH0_DOMAIN;
    const clientId = import.meta.env.VITE_APP_AUTH0_CLIENT_ID;

envolver el App en Auth0Provider
domain={domain}
clientId={clientId}
authorizationParams={{ redirect_uri: window.location.origin }} >

12. crear el componente del boton
13. isAuthenticated es necesario en el profile
14. Crear el componente del boton logout
