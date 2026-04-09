import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CONTACT_CHANNELS } from '../../data/contact.interface';
import { ContactChannel } from '../../interfaces/contact.interface';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  getAllContactChannels(): Observable<ContactChannel[]> {
    return of(CONTACT_CHANNELS);
  }
}
