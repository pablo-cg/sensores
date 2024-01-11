import axios from 'axios';

export const useApi = () => {
  const runtimeConfig = useRuntimeConfig();

  const baseUrl = runtimeConfig.public.SENSORS_API;

  const sensorsApi = axios.create({
    baseURL: baseUrl,
  });

  return {
    sensorsApi,
  };
};
