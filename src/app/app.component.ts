import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  sentAudio: File[] = [];
  audiosInDiv: File[] = [];
  photoInDiv!: File;
  handleReceivedMedia($event: File) {
    if ($event.type.startsWith('audio/')) {
      this.sentAudio.push($event);
    } else if ($event.type.startsWith('image/')) {
      this.photoInDiv = $event;
    }
  }
  title = 'alzkr-al7kym';
}
