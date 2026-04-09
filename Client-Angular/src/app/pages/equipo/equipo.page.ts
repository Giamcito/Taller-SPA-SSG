import { Component, inject } from '@angular/core';
import { AlertComponent } from '../../components/alert/alert.component';
import { State } from '../../interfaces/state.interface';
import { TeamMember } from '../../interfaces/team.interface';
import { TeamService } from '../../services/team/team.service';

@Component({
  selector: 'app-equipo',
  imports: [AlertComponent],
  templateUrl: './equipo.page.html',
  styleUrl: './equipo.page.scss',
})
export class EquipoPage {
  teamMembers: TeamMember[] = [];
  state: State = 'init';

  private teamService = inject(TeamService);

  ngOnInit(): void {
    this.state = 'loading';
    this.teamService.getAllTeamMembers().subscribe({
      next: (teamMembers) => {
        this.teamMembers = teamMembers;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error);
        this.state = 'error';
      },
    });
  }

}
