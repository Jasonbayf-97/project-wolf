import { Component } from '@angular/core';
import { ABOUT_ME } from '../../shared/models/about-me.model';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  profileImage: string = 'jasonbayford.png';
  aboutMe = ABOUT_ME;
}
