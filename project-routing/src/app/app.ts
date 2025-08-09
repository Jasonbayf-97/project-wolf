import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { INavbar } from '../shared/interfaces/navbar.interface';
import { navbarItems } from '../shared/models/navbar.model';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  navbarBrand: string = 'Jason Bayford';
  tabs: INavbar[] = navbarItems;
}
