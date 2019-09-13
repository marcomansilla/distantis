DESAFIO DISTANTIS
=================

Objetivo
--------

Desarrollar un frontend que pueda interactuar con una API de prueba.

Estructura
----------

- El frontend es sencillo, cuenta con el login correspondiente para validar las credenciales provistas por el usuario.
- Luego de la primera consulta utilizando los datos provistos hace la peticion y el listado de la informacion en una tabla.
- El panel de administracion permite filtrar bookigs en un rango de fechas determinado por el usuario.
- Dentro de la misma tabla se puede intractuar con la informacion adicional de cada registro y sus detalles.
- Se ha seprado la estructura en multiples componentes para mejorar la escalabilidad.

Herramientas utilizadas
-----------------------

Se ha desarrollado en base a lo requerido, utilizando:

- VueJS en su ultima version estable
- Axios para peticiones AJAX
- SCSS
- Pug para templates html
- Buefy para los componentes de la interfaz.
- webpack

todo se ha integrado usando NuxtJS_ .

Instalacion
-----------

Clonar el este repositorio

 *git clone https://github.com/marcomansilla/distantis*

luego

 *cd distantis*

 *npm install*

finalmente para arrancar en modo desarrollo de sebe iniciar la aplicacion con el siguiente comando.

 *npm run dev*

Para poder utilizar la version optimizada para produccion se debe ejecutar los siguientes comandos:

 *npm run build && npm run serve*

Estructura del directorio
-------------------------

- */assets* Contiene elementos sin compilar, stylus, scss o imagenes
- */components* Contiene los componentes VueJS
- */layouts* Contiene los layouts de la aplicacion para poder personalizar los estilos de forma independiente en las vistas.
- */middleware* Contiene el middleware de aplicacion, las funciones que se ejecutan antes que una pagina se cargue.
- */pages* Contiene las vistas y rutas de la aplicacion, basado en los archivos .vue de esta carpera se generan las rutas.
- */plugins* Contiene los plugins de la aplicacion que se ejecutan antes de instancia principal de VueJS.
- */static* Esta mapeado a la raiz del servidor y contiene archivos que no cambiaran.
- */store* Contiene los archivos de Vuex, incluido por defecto en NuxtJS.
- *nuxt.config.js* Contiene toda la configuracion personalizada de NuxtJS.
- *package.json* Contiene los scripts y las dependencias de la aplicacion.

Archivos importantes
--------------------

- /layouts/defaul.vue contiene el layout principal de cada vista, tambien la funcionalidad de logout que trabaja con Vuex limpiando state.auth y las cookies.
- /layouts/auth.vue contiene el layout para el login, sin mas que el formulario de login.
- /components/LoginComponent.vue contiene la logica de autenticacion, escribe las cookies necesarias para interactuar con  la API.
- /components/BookingsComponent.vue lista los datos de la API, pasando como props los datos necesarios a  BookingsTableComponent para generar la tabla, y la paginacion mediante PaginationComponent.
- /views/* aqui las vistas importan los respectivos componentes para interactuar con el usuario.
- /middleware/auth.js verifica que el usuario tenga un login activo para proceder, de no ser asi redirecciona a la pagina de /login.
- /nuxt.config.js contiene los parametros necesarios para webpack, loaders, etc. tambien estan definidas en el mismo las variables de entorno necesarias para las llamadas a la API.

Extras
-----

- En lugar de usar localStorage para almacenar el token JWT se utiliza Cookies para poder interactuar con VUEX.
- Las URLs de la api estan en nuxt.config.js

**NOTA**

*Ante cualquier duda comunicarse por via e-mail o por medio de un pull request*

.. _NuxtJS: https://www.nuxtjs.org
