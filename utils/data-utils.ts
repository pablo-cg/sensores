import type { Datum } from '~/types';

export function getUltimoRegistro(data: Datum[]) {
  let fecha = 'S/D';
  let prom = 'S/D';

  if (!data.length) return { prom, fecha };

  fecha = data[0].fecha;
  prom = data[0].prom;

  for (let i = 1; i < data.length; i++) {
    const fechaActual = data[i].fecha;
    if (fechaActual > fecha) {
      fecha = fechaActual;
      prom = data[i].prom;
    }
  }

  fecha = useDateFormat(fecha, 'H:mm:ss').value;

  return { prom, fecha };
}

export function getDataOrdenada(data: Datum[], orden: 'ASC' | 'DESC') {
  const compare = (a: Datum, b: Datum) => {
    const fechaA = new Date(a.fecha).getTime();
    const fechaB = new Date(b.fecha).getTime();

    if (orden === 'ASC') {
      return fechaA - fechaB;
    } else {
      return fechaB - fechaA;
    }
  };

  return data.slice().sort(compare);
}

export function getMinMaxRegistro(data: Datum[]) {
  let maximoRegistro = { fecha: 'S/D', prom: 'S/D' };
  let minimoRegistro = { fecha: 'S/D', prom: 'S/D' };

  if (!data.length) return { maximoRegistro: null, minimoRegistro: null };

  maximoRegistro = { fecha: data[0].fecha, prom: data[0].prom };
  minimoRegistro = { fecha: data[0].fecha, prom: data[0].prom };

  for (let i = 1; i < data.length; i++) {
    const promActual = data[i].prom;

    if (promActual < minimoRegistro.prom) {
      minimoRegistro = { fecha: data[i].fecha, prom: promActual };
    }

    if (promActual > maximoRegistro.prom) {
      maximoRegistro = { fecha: data[i].fecha, prom: promActual };
    }
  }

  return { maximoRegistro, minimoRegistro };
}
