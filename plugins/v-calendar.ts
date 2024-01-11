import { setupCalendar, Calendar, DatePicker } from 'v-calendar';
import 'v-calendar/style.css';

export default defineNuxtPlugin((nuxt) => {
  nuxt.vueApp.use(setupCalendar, {});

  nuxt.vueApp.component('VCalendar', Calendar);
  nuxt.vueApp.component('DatePicker', DatePicker);
});
