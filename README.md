# flask-vue-crud
Proyecto de desarrollo web con flask y VueJS


*configuracion de flask en windows*

previo a instalar python y agregas a las variables de entorno y ver instalado pip segimos los siguientes pasos:
- instalamos virtualenv con el siguiente comando: pip install virtualenv
- a continuacion agregamos el siguiente comando: pip install virtualenvwrapper-win
- creamos un entorno virtual con: "virtualenv nombreDelEntorno"
- para activarlo usamos el comando workon nombreDelEntorno
- ahora instalamos flask con el comando: pip install Flask
- el puerto a utilizar es el siguiente  http://127.0.0.1:5000/


*configuracion de vuejs en windows*

- instalamos globalmente vue con el comando: npm install -g @vue-cli
- creamos nuestro proyecto con el comando: vue init webpack NombreProyecto
- contestamos las siguientes preguntas de la forma que se presenta:
     Project name client
     Project description A Vue.js project
     Author Michael Herman michael@mherman.org
     Vue build standalone
     Install vue-router? Yes
     Use ESLint to lint your code? Yes
     Pick an ESLint preset Airbnb
     Set up unit tests No
     Setup e2e tests with Nightwatch? No
     Should we run `npm install` for you after the project has been created? (recommended) npm
- el puerto para el proyecto sera: http://localhost:8080/