import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-delete-file-in-home',
  standalone: true,
  imports: [],
  templateUrl: './delete-file-in-home.component.html',
  styleUrl: './delete-file-in-home.component.scss',
})
export class DeleteFileInHomeComponent {
  @Output() onClickOk = new EventEmitter<number>();
  @Input() fileIndexToDelete: number | null = null;

  confirmDelete() {
    if (this.fileIndexToDelete !== null) {
      this.onClickOk.emit(this.fileIndexToDelete);
    }
  }
}
