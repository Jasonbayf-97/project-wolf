import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  RouterLink,
  RouterOutlet,
  RouterLinkActive,
  Router,
} from '@angular/router';
import { INavbar } from '../shared/interfaces/navbar.interface';
import { navbarItems } from '../shared/models/navbar.model';
import { About } from './about/about';
import { Experience } from './experience/experience';
import { Projects } from './projects/projects';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    About,
    Experience,
    Projects,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  fullName: string = 'Jason Bayford';
  jobTitle: string = 'Software Engineer';
  profileImage: string = 'jasonbayford.png';
  links: { label: string }[] = [
    { label: 'Download CV' },
    { label: 'Contact info' },
  ];

  tabs: INavbar[] = navbarItems;

  constructor(public router: Router) {}
}
