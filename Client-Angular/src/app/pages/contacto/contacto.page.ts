import { Component, inject } from '@angular/core';
import { AlertComponent } from '../../components/alert/alert.component';
import { ContactChannel } from '../../interfaces/contact.interface';
import { State } from '../../interfaces/state.interface';
import { ContactService } from '../../services/contact/contact.service';

@Component({
  selector: 'app-contacto',
  imports: [AlertComponent],
  templateUrl: './contacto.page.html',
  styleUrl: './contacto.page.scss',
})
export class ContactoPage {
  channels: ContactChannel[] = [];
  state: State = 'init';

  private contactService = inject(ContactService);

  ngOnInit(): void {
    this.state = 'loading';
    this.contactService.getAllContactChannels().subscribe({
      next: (channels) => {
        this.channels = channels;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error);
        this.state = 'error';
      },
    });
  }

}
