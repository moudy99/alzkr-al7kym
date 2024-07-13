import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-audio-settings',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './audio-settings.component.html',
  styleUrls: ['./audio-settings.component.scss'],
})
export class AudioSettingsComponent {
  timeInterval: number = 0;
  repeatCount: number = 0;
  @Output() sendTimingSettings=new EventEmitter<{timeInterval:number,repeatCount:number}>()
  increment(field: 'timeInterval' | 'repeatCount') {
    this[field]++;
  }

  decrement(field: 'timeInterval' | 'repeatCount') {
    this[field]--;
  }
}
