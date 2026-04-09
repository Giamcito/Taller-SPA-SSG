import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TEAM_MEMBERS } from '../../data/team.interface';
import { TeamMember } from '../../interfaces/team.interface';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  getAllTeamMembers(): Observable<TeamMember[]> {
    return of(TEAM_MEMBERS);
  }
}
