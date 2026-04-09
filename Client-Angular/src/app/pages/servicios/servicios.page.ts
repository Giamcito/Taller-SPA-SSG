import { Component, inject } from '@angular/core';
import { AlertComponent } from '../../components/alert/alert.component';
import { ServiceItem } from '../../interfaces/services.interface';
import { State } from '../../interfaces/state.interface';
import { ServicesService } from '../../services/services/services.service';

@Component({
  selector: 'app-servicios',
  imports: [AlertComponent],
  templateUrl: './servicios.page.html',
  styleUrl: './servicios.page.scss',
})
export class ServiciosPage {
  services: ServiceItem[] = [];
  state: State = 'init';

  private servicesService = inject(ServicesService);

  ngOnInit(): void {
    this.state = 'loading';
    this.servicesService.getAllServices().subscribe({
      next: (services) => {
        this.services = services;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error);
        this.state = 'error';
      },
    });
  }

}
