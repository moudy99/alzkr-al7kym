import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-delete-folder',
  standalone: true,
  imports: [],
  templateUrl: './delete-folder.component.html',
  styleUrl: './delete-folder.component.scss'
})
export class DeleteFolderComponent {
  @Output() onClickOk = new EventEmitter()
}
