import { ContactChannel } from '../interfaces/contact.interface';

export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    id: 1,
    type: 'Correo',
    value: 'soporte@cliente-angular.com',
    note: 'Respuesta estimada en menos de 24 horas.'
  },
  {
    id: 2,
    type: 'Telefono',
    value: '+57 300 123 4567',
    note: 'Disponible en horario laboral.'
  },
  {
    id: 3,
    type: 'Horario',
    value: 'Lunes a viernes, 8:00 AM - 5:00 PM',
    note: 'Atencion en linea y por llamada.'
  }
];
