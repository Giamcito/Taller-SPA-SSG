import { ServiceItem } from '../interfaces/services.interface';

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    name: 'Gestion de Usuarios',
    description: 'Consulta, validacion y visualizacion de registros de usuarios.',
    area: 'Usuarios'
  },
  {
    id: 2,
    name: 'Gestion de Productos',
    description: 'Listado de productos con categoria y precio para analisis rapido.',
    area: 'Productos'
  },
  {
    id: 3,
    name: 'Consulta de Fecha',
    description: 'Visualizacion de la fecha actual para control y reportes.',
    area: 'Sistema'
  }
];
