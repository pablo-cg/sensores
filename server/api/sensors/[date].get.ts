import type { LimitMessage, Sensor } from '~/types';

import { useApi } from '~/composables/use-api';

export default defineEventHandler(async (event) => {
  const date = getRouterParam(event, 'date');

  const { sensorsApi } = useApi();
  const { data } = await sensorsApi.get<Sensor[]>(date!);

  return data;
});
