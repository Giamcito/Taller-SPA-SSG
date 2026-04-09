import type { ContactChannel } from "@interfaces/Contact";

export const CONTACT_CHANNELS: ContactChannel[] = [
{ id: 1, type: "Correo", value: "soporte@astro-ssg.com", note: "Respuesta en menos de 24 horas." },
{ id: 2, type: "Telefono", value: "+57 300 123 4567", note: "Horario laboral." },
{ id: 3, type: "Horario", value: "Lunes a viernes, 8:00 AM - 5:00 PM", note: "Atencion en linea y por llamada." }
];