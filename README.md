# Sensores

## Funciones

- Actualización Dinámica de Datos:
  * La información de los sensores debe actualizarse cada minuto.
- Visualización de Todos los Sensores:
    * Se mostrará la información de todos los sensores disponibles.
- Detalles de Cada Sensor:
Para cada sensor, se mostrará:
    * Nombre: Compuesto por las variables "sucursal", "sector" y "nombre_sensor".
    * Último Valor Registrado: Basado en la variable "prom" del array "data". La selección del último valor debe considerar la fecha más reciente, no el orden en el array.
- Interacción con los Sensores:
  Al hacer clic en un sensor, se debe desplegar:
  * Información Detallada del Sensor: Nombre, temperatura máxima y mínima del día.
  * Registros Históricos del Sensor: Una tabla con los registros del sensor, mostrando fecha y temperatura, ordenada ascendentemente.
- Manejo de Sensores Sin Datos:
  * Si un sensor no tiene información, se mostrará el mensaje "S/D".

## Tecnologías Utilizadas

### Framework Web
- [Nuxt](https://nuxt.com/)

### Estilos
- [UnoCSS](https://unocss.dev/)

### Utilidades
- [VueUse](https://vueuse.org/)

### Librerías de Data Fetching
- [TanStack Vue Query](https://tanstack.com/query/latest/docs/vue/overview)
- [Axios](https://axios-http.com/docs/intro)

### Componentes

- [VCalendar](https://vcalendar.io/)
- [Headless UI](https://headlessui.com/)
