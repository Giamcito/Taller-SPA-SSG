import { Routes } from '@angular/router';
import { ContactoPage } from './pages/contacto/contacto.page';
import { DatePage } from './pages/date/date.page';
import { EquipoPage } from './pages/equipo/equipo.page';
import { ProductsPage } from './pages/products/products.page';
import { ServiciosPage } from './pages/servicios/servicios.page';
import { UsersPage } from './pages/users/users.page';

/**
 * Definición de las rutas principales de la aplicación.
 *
 * @remarks
 * Este archivo contiene la configuración de enrutamiento
 * utilizada por Angular Router para mapear las URLs
 * a los componentes correspondientes.
 *
 * Incluye:
 * - Rutas de navegación principales
 * - Redirección por defecto para rutas no existentes
 *
 * @see {@link UsersPage}
 * @see {@link ProductsPage}
 */
export const routes: Routes = [

  /**
   * Ruta de usuarios.
   *
   * @remarks
   * Renderiza el componente `UsersPage`, encargado
   * de mostrar y gestionar el listado de usuarios.
   */
  { path: 'users', component: UsersPage },

  /**
   * Ruta de productos.
   *
   * @remarks
   * Renderiza el componente `ProductsPage`, encargado
   * de mostrar y gestionar el listado de productos.
   */
  { path: 'products', component: ProductsPage },

  /**
   * Ruta de la fecha.
   *
   * @remarks
   * Renderiza el componente `DatePage`, encargado
   * de mostrar la fecha actual del sistema.
   */
  { path: 'date', component: DatePage },

  /**
   * Ruta de contacto.
   *
   * @remarks
   * Renderiza el componente `ContactoPage`, encargado
   * de mostrar la información de contacto.
   */

  { path: 'contact', component: ContactoPage },

  /**
   * Ruta de servicios.
   *
   * @remarks
   * Renderiza el componente `ServiciosPage`, encargado
   * de mostrar la información de los servicios ofrecidos.
   */

  { path: 'services', component: ServiciosPage },

  /**
   * Ruta del equipo.
   *
   * @remarks
   * Renderiza el componente `EquipoPage`, encargado
   * de mostrar la información del equipo.
   */

  { path: 'equip', component: EquipoPage },

  /**
   * Ruta comodín.
   *
   * @remarks
   * Captura cualquier ruta no definida y redirige
   * automáticamente a la ruta de usuarios.
   */
  { path: '**', redirectTo: 'users' },
];