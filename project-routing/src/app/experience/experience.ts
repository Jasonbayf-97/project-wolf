import { Component } from '@angular/core';
import { EXPERIENCE } from '../../shared/models/experience.model';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  experience = EXPERIENCE;
}
