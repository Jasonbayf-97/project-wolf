import { Component } from '@angular/core';
import { BtnLabels } from '../../shared/models/projects.modal';
import { Card } from '../../shared/components/card/card';

@Component({
  selector: 'app-projects',
  imports: [Card],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  btnLabels = BtnLabels;
}
