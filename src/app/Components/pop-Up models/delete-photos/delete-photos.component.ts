import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-delete-photos',
  standalone: true,
  imports: [],
  templateUrl: './delete-photos.component.html',
  styleUrl: './delete-photos.component.scss'
})
export class DeletePhotosComponent {
  @Output() onClickOk = new EventEmitter<void>();
}
