# MovieReviews - Frontend
Frontend de **MovieReviews**, es una aplicacion web para consultar información de películas, publicar reseñas, administrar películas favoritas y visualizar información cinematrográfica.

La aplicación se comunica con una API REST desarrollada de manera independiente en el backend de MovieReviews.

---

## Tecnologías utilizadas
El frontend fue desarrollado utilizando las siguientes tecnologías:

- React 19
- React DOM
- React Route DOM
- React Icons
- Vite
- JavaScript
- CSS
- ESLint
- npm

La interfaz utiliza una organizacion de estilos basada en una estructura ITCSS = BEM

---
## Requisitos para ejecutar el proyecto

Se deben de tener instalado lo siguiente:

- Node.js 20.19.0  o superior compatible
- npm
- Un navegador web
- El backend de MoviewReviews configurado y ejecutandose

### Comprobar Node.js
```bash
node --version
```
### Comprobar npm
```bash
npm --version
```
Debido a que el frontend fue creado apartir de Vite, se recomienda utilizar:

```text
Node.js >= 20.19.0
```

Tambien son compatibles las versiones indicadas por Vite:

```text
^20.19.0 || >=22.12.0
```

##instalacion
### 1. Tener el proyecto de manera local

Clonar el repositorio

```bash
git clone https://github.com/John03-desing/frontend-MovieReviews.git
```

Entrar al directorio del frontend:

```bash
cd frontend
```

### 2. Instalar las dependencias

Ejecutar:

```bash
npm install
```

Este comando instalará las dependencias definidas en `package.json`.

Ademas creara la carpeta `node_modules`.

---

## Variables de entorno
El proyecto utiliza un archivo:

```text
.env
```
Este archivo contiene la configuración necesaria para que el frontend pueda comunicarse con el backend.

Se recomienda crear también un archivo:

```text
.env.example
```

con las variables necesarias para ejecutar el proyecto, pero sin incluir información privada o sensible.

Ejemplo:

```env
# VITE_API_URL = <URL DE TU API EN EL BACKEND>
```

---

## Ejecutar el proyecto en modo desarrollo

Después de instalar las dependencias y configurar las variables de entorno, ejecutar:

```bash
npm run dev
```

Vite iniciará el servidor de desarrollo.

La terminal mostrará la dirección local en la que se encuentra disponible la aplicación.

Abrir esa dirección desde un navegador web.

---
## Backend requerido
MovieReviews utiliza una arquitectura separada:

```text
Frontend React
      |
      | HTTP / JSON
      v
Backend REST API
      |
      v
PostgreSQL / TMDB
```

Por esta razón, el backend debe estar correctamente configurado y ejecutándose para que las funciones que requieren información externa funcionen correctamente.

### Funciones provinientes del backend:

- Inicio de sesión.
- Registro de usuarios.
- Consulta de películas.
- Consulta de géneros.
- Consulta de actores.
- Creación de reseñas.
- Edición de reseñas.
- Eliminación de reseñas.
- Administración de favoritos.
- Administración de reseñas por parte del administrador.

Consultar el `README.md` del backend para conocer sus instrucciones de instalación y configuración.

---

## Rutas de la aplicación

La aplicación utiliza React Router para manejar la navegación.

### Rutas pública
| Ruta | Descripción |
| --- | --- |
| `/` | Lading page, registro e inicio de sesión |

### Rutas protegidas

Las siguientes rutas requieren que el usuario haya iniciado sesión:

| Ruta | Descripción |
| --- | --- |
| `/inicio` | Página principal de MovieReviews |
| `/reviews/nueva` | Crear una nueva reseña |
| `/mis-reviews` | Consultar las reseñas del usuario |
| `/reviews/:id/editar` | Editar una reseña |

### Ruta del adminsitrador
| Ruta | Descripción |
| --- | --- |
| `/admin` | Administración de reseñas |

La ruta `/admin` está restringida a usuarios cuyo rol sea:

```text
admin
```

Los usuarios sin permisos de administrador no pueden acceder a esta sección.

---

## Autenticación

El frontend utiliza un contexto de React denominado:

```text
AuthContext
```

para mantener la información relacionada con la sesión del usuario.

La aplicación diferencia actualmente entre los roles:

```text
user
admin
```

Las rutas protegidas se administran mediante:

```text
ProtectedRoute
```

mientras que el acceso administrativo utiliza:

```text
AdminRoute
```

---
## Organización del código

### `components`
Contiene componentes reutilizables de la interfaz.

Ejemplos:

```text
Button
Header
TopBar
ReviewItem
ReviewForm
ConfirmDialog
```

### `pages`

Contiene los componentes correspondientes a las diferentes vistas de la aplicación.

Entre ellas:

```text
Landing
Home
CreateReview
MyReviews
EditReview
AdminReviews
```

### `services`

Contiene las funciones encargadas de realizar solicitudes HTTP hacia el backend.

Esta capa permite separar la lógica de comunicación con la API de los componentes visuales.

### `context`

Contiene los contextos globales utilizados por React.

Actualmente se utiliza para administrar la autenticación y sesión del usuario.

### `routes`

Contiene componentes relacionados con la protección de rutas.

Entre ellos:

```text
ProtectedRoute
AdminRoute
```

---

## Organización de estilos

Los estilos del proyecto se encuentran dentro de:

```text
src/styles/
```

y están divididos en las siguientes capas:

```text
1-settings
2-generic
3-elements
4-objects
5-components
6-utilities
```

Esta organización sigue los principios de **ITCSS (Inverted Triangle CSS)**, permitiendo separar los estilos de acuerdo con su nivel de especificidad y responsabilidad.

Los componentes utilizan además una nomenclatura basada en **BEM**, por ejemplo:

```css
.c-header {}
.c-header__logo {}
.c-header__nav {}

.c-review-item {}
.c-review-item__title {}
.c-review-item__actions {}
```

---

## Estado del proyecto

El proyecto incluye actualmente:

- Registro de usuarios.
- Inicio y cierre de sesión.
- Protección de rutas.
- Roles de usuario y administrador.
- Consulta de películas.
- Consulta de reseñas.
- Creación de reseñas.
- Edición de reseñas.
- Eliminación de reseñas.
- Películas favoritas.
- Filtrado de reseñas.
- Vista administrativa.
- Diseño organizado mediante ITCSS y BEM.

---
## Autor

Desarrollado como parte del proyecto **MovieReviews**.