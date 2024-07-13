import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-delete-file',
  standalone: true,
  imports: [],
  templateUrl: './delete-file.component.html',
  styleUrl: './delete-file.component.scss'
})
export class DeleteFileComponent {
@Output() onClickOk = new EventEmitter()
}
