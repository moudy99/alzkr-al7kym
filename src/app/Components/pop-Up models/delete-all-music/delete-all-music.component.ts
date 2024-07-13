import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-delete-all-media',
  standalone: true,
  imports: [],
  templateUrl: './delete-all-music.component.html',
  styleUrl: './delete-all-music.component.scss',
})
export class DeleteAllMediaComponent {
  emit() {
    this.onClickOk.emit();
  }
  @Output() onClickOk = new EventEmitter();
}
