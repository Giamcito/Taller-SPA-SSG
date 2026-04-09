import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SERVICES } from '../../data/services.interface';
import { ServiceItem } from '../../interfaces/services.interface';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  getAllServices(): Observable<ServiceItem[]> {
    return of(SERVICES);
  }
}
