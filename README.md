# Challenge-CRWDR

**Descripción general**

Este repositorio contiene un conjunto de pruebas automatizadas desarrolladas con **Cypress** para validar funcionalidades del flujo de compra en el sitio Saucedemo (Carrito, Login, API ML). Las pruebas se organizan bajo el árbol `cypress/e2e` y cubren escenarios de interfaz de usuario y consultas a la API.
Dentro de la carpeta Doc se encuentra el archivo xlsx que contiene el diseño de casos de prueba de las funcionalidades Login y Agregado de productos al carrito de compras.

---

## Prerrequisitos

1. **Node.js** versión 14 o superior (recomendado 16+).
2. **npm** o **yarn** como gestor de paquetes.
3. Navegadores compatibles instalados (Chrome, Edge, Firefox). Cypress descargará automáticamente una versión empaquetada de Chromium para ejecución headless.

---

## Instalación del framework

1. Clona el repositorio:
   ```bash
   git clone https://github.com/AdrianSP1/Challenge-CRWDR
   cd Challenge-CRWDR
   ```
2. Instala las dependencias con npm :
   ```bash
   npm install

   ```
3. Si ya tenías Cypress instalado globalmente, no es necesario; la ejecución usa la versión definida en `package.json`.

---

## Estructura de carpetas

```
cypress.config.js           # Configuración de Cypress
cypress/
  ├─ e2e/                   # Archivos de pruebas (Carrito.cy.js, Login.cy.js, API)
  ├─ fixtures/              # Datos estáticos para las pruebas
  ├─ reports/               # Resultados generados (HTML, failure screenshot in report)
  ├─ screenshots/           # Capturas de prueba fallida
  └─ support/               # Comandos personalizados y helpers Y pages
``` 

---

## Scripts disponibles

Los scripts definidos en `package.json` permiten ejecutar las pruebas en diferentes modos y navegadores:

| Comando | Descripción |
|--------|-------------|
| `npm run test` | Ejecuta todas las pruebas en el navegador empaquetado (Chromium) en modo headless.
| `npm run open` | Abre la interfaz de Cypress para seleccionar pruebas y navegador interactivo.
| `npm run test:chrome` | Corre las pruebas headless en Chrome (si está instalado).
| `npm run test:edge` | Corre las pruebas headless en Edge.


---

## Cómo ejecutar las pruebas

### Desde la línea de comandos (modo headless)

```bash
npm run test          # usa navegador por defecto (Chromium)
npm run test:chrome    # explícitamente Chrome
npm run test:edge      # explícitamente Edge
```

### Interacción gráfica

```bash
npm run open
```

Se abrirá la ventana de Cypress donde puedes seleccionar tests y navegadores.

---

## Reportes y resultados

- Los informes HTML generados se encuentran en `cypress/reports/html/index.html`.
- Las capturas de pantalla de fallos se guardan en `cypress/screenshots/`.
- Usa `npm run clean` si deseas eliminar resultados previos.

---

