import { Component } from '@angular/core';
import { CONTACT_INFO, CONTACT_INFO_LABELS } from '../../models/modal.model';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.html',
  styleUrl: './modal.scss',
})
export class Modal {
  labelHeadings = CONTACT_INFO_LABELS;
  contactInfo = CONTACT_INFO;
}
