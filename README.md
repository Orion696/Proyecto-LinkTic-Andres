# Sistema de Reservas

Este proyecto es un sistema de reservas diseñado para servicios como restaurantes u hoteles. Proporciona una interfaz de usuario para realizar, modificar, cancelar y visualizar reservas, utilizando tecnologías modernas como React.js, Node.js, Express, Redux, y Sagas.

## Tabla de Contenidos

- [Arquitectura de la Aplicación](#arquitectura-de-la-aplicación)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Configuración del Proyecto](#configuración-del-proyecto)
- [Ejecutar el Proyecto Localmente](#ejecutar-el-proyecto-localmente)
- [Documentación de la API](#documentación-de-la-api)
- [Manejo del Estado con Redux y Sagas](#manejo-del-estado-con-redux-y-sagas)
- [Estilización de Componentes](#estilización-de-componentes)
- [Alertas y Notificaciones](#alertas-y-notificaciones)
- [Pruebas con Jest](#pruebas-con-jest)
- [Configuración de CI/CD](#configuración-de-cicd)
- [Despliegue](#despliegue)
- [Contribuciones](#contribuciones)

## Arquitectura de la Aplicación

La arquitectura del sistema está compuesta por un frontend desarrollado en React.js que interactúa con un backend en Node.js y Express, conectado a una API RESTful falsa configurada mediante `json-server` para simular la persistencia de datos.

### Descripción de la Arquitectura

- **Frontend:** Implementado en React.js, utilizando Redux para el manejo del estado global y Redux-Sagas para manejar las operaciones asíncronas. React-Bootstrap se utiliza para el diseño de la interfaz.
- **Backend:** Servido por Node.js y Express, que proporciona endpoints para operaciones CRUD sobre las reservas.
- **API RESTful Falsa:** Configurada con `json-server`, simula una base de datos para las operaciones CRUD.

## Tecnologías Utilizadas

- **React.js:** Biblioteca principal para construir la interfaz de usuario.
- **Redux:** Manejo del estado global de la aplicación.
- **Redux-Sagas:** Manejo de operaciones asíncronas en Redux.
- **Node.js y Express:** Servidor backend que maneja las solicitudes HTTP.
- **json-server:** Simula una API RESTful para el almacenamiento de datos.
- **React-Bootstrap:** Biblioteca de componentes para estilizar la interfaz de usuario.
- **ReactToastify:** Biblioteca para manejar las notificaciones y alertas en la aplicación.
- **Vercel:** Plataforma de despliegue del frontend.
- **GitHub Actions:** Configuración de CI/CD para el proyecto.

## Configuración del Proyecto

### Pre-requisitos

Asegúrate de tener instalados los siguientes programas:

- Node.js (v14 o superior)
- npm (v6 o superior)

### Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/Orion696/Proyecto-LinkTic-Andres.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd Proyecto-LinkTic-Andres
   ```

3. Instala las dependencias del proyecto:

   ```bash
   npm install
   ```

4. Inicia el backend (API Falsa) en el puerto 5000:

   ```bash
   npm run server
   ```

5. Si el puerto 5000 ya está en uso, inicia el backend Express en el puerto 5001:

   ```bash
   node backend/index.js
   ```

6. Inicia la aplicación React en el frontend:

   ```bash
   npm start
   ```

## Ejecutar el Proyecto Localmente

Para ejecutar el proyecto localmente:

1. Asegúrate de que tanto el backend como el frontend estén corriendo.
2. Accede a `http://localhost:3000` en tu navegador para interactuar con la aplicación.

## Documentación de la API

La API RESTful proporciona los siguientes endpoints para gestionar reservas:

- **GET /reservations:** Obtiene todas las reservas.
- **POST /reservations:** Crea una nueva reserva.
- **PUT /reservations/:id:** Actualiza una reserva existente.
- **DELETE /reservations/:id:** Elimina una reserva.

Puedes encontrar la documentación completa de la API, incluyendo ejemplos de uso, en Postman [aquí](https://go.postman.co/workspace/311a1ac0-e1ed-48f4-8065-f7915a448b48/documentation/26741493-d3b87f71-f530-4240-b75f-b44b5bcc1edc?entity=request-06c5698c-9231-4b7a-b00d-a90c8523b373).

## Manejo del Estado con Redux y Sagas

### Configuración de Redux

El estado global de la aplicación está manejado mediante Redux, lo que permite una gestión eficiente del estado de las reservas a lo largo de los distintos componentes de la aplicación.

- **Store:** Configurada en `src/redux/store.js`, donde se combinan los reducers y se integran los middlewares como `redux-saga`.
- **Reducers:** Los reducers para las reservas están ubicados en `src/redux/reducers/reservationsReducer.js`.
- **Actions:** Las acciones que manejan el flujo de datos en la aplicación están definidas en `src/redux/actions/reservationActions.js`.

### Configuración de Redux-Sagas

Redux-Sagas se utiliza para manejar las operaciones asíncronas, como la obtención de datos y la actualización de las reservas.

- **Sagas:** Configuradas en `src/redux/sagas/reservationSagas.js`, gestionan los efectos secundarios como solicitudes HTTP.

## Estilización de Componentes

El diseño de la aplicación se basa en `React-Bootstrap`, con estilos personalizados para garantizar una experiencia de usuario fluida y moderna.

### Componentes Principales

- **HomePage:** Página principal que guía al usuario hacia la gestión de reservas.
- **ReservationsPage:** Página donde los usuarios pueden ver todas las reservas, añadir nuevas, editar o eliminar las existentes.
- **AddReservationForm:** Formulario estilizado para la adición de nuevas reservas.
- **EditReservationForm:** Formulario dentro de un modal para editar reservas existentes.

Todos los formularios y componentes han sido estilizados usando CSS modular, y se encuentran dentro de la carpeta `src/styles`.

## Alertas y Notificaciones

En este proyecto se han implementado notificaciones usando la librería `ReactToastify`. Esta herramienta permite mostrar alertas y notificaciones flotantes que aparecen en la esquina superior derecha de la pantalla cuando un usuario realiza una operación, como agregar, editar o eliminar una reserva.

- **Instalación:** `ReactToastify` está instalado y configurado en el proyecto como dependencia.
- **Uso:** Las notificaciones se disparan tras las acciones del usuario, proporcionando un feedback inmediato sobre el éxito o el fracaso de las operaciones.

Las alertas están diseñadas para ser discretas pero efectivas, mejorando la experiencia de usuario sin interrumpir el flujo de trabajo.

## Pruebas con Jest

Este proyecto incluye pruebas unitarias configuradas con Jest y `@testing-library/react`. La prueba estq diseñadas para garantizar que el componente funcionen como se espera.

### Ejecución de Pruebas

Para ejecutar las pruebas, puedes utilizar el siguiente comando:

```bash
npm test
```

Esta prueba asegura que el texto "Welcome to the Reservation System" aparece en el documento.

## Configuración de CI/CD

El proyecto está configurado para utilizar GitHub Actions para CI/CD. Cada vez que se realiza un `push` o se abre un `pull request` en la rama `main`, se ejecutan las siguientes acciones:

- **Instalación de dependencias:** Verifica que todas las dependencias estén instaladas correctamente.
- **Ejecución de pruebas:** Se ejecutan las pruebas unitarias configuradas con Jest.
- **Construcción del proyecto:** Se genera la build de la aplicación lista para producción.

El archivo de configuración de GitHub Actions se encuentra en `.github/workflows/ci.yml`.

## Despliegue

Este proyecto está desplegado en Vercel. Puedes ver la versión en vivo en el siguiente enlace:

[Ver el proyecto en Vercel](https://proyecto-link-tic-andres.vercel.app/)
