import { Component } from '@angular/core';
import { BtnLabels } from '../../shared/models/projects.modal';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  btnLabels = BtnLabels;
}
