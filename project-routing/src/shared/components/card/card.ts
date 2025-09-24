import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  @Input() Title: String = '';
  @Input() Description: String = '';
  @Input() buttonLabels = { github: '', liveDemo: '' };
  @Output() github = new EventEmitter<void>();
  @Output() liveDemo = new EventEmitter<void>();

  Github() {
    this.github.emit();
  }

  LiveDemo() {
    this.liveDemo.emit();
  }
}
