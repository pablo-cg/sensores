export interface Sensor {
  codigo: string;
  sucursal: string;
  sector: string;
  nombre_sensor: string;
  clasificacion: null | string;
  data: Datum[];
}

export interface Datum {
  fecha: string;
  prom: string;
}

export interface LimitMessage {
  resp: {
    status: string;
  };
}
