# Workshop 01 — Signals y datos reactivos

Angular 22. Catálogo de eventos con filtros locales, Signal Forms y `httpResource`.

## Instalación

```bash
npm ci
```

## Ejecución

Abrir dos terminales.

Terminal 1:

```bash
npm run api
```

Terminal 2:

```bash
npm start
```

## URLs

```text
App: http://localhost:4200
API health: http://127.0.0.1:3000/api/health
```

Angular consume la API mediante `/api` y no debe apuntar directamente a `http://localhost:3000` desde el código de la aplicación.

## Tags

```text
w01-start     UI + dataset + API local
w01-local     Signals + computed
w01-forms     Signal Form + debounce en search
w01-solution  httpResource
```

El starter oficial es `w01-start`.

La API Node ya viene en el starter. No se desarrolla en el taller.

## Filtros

- búsqueda por `event.name` (`trim`, case-insensitive)
- city / category / modality
- `all` y `q` vacío los ignora el backend
- debounce 350 ms solo en search, desde `w01-forms`

## Scripts

```bash
npm start
npm run api
npm run build
```
