import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-delete-file-modal',
  standalone: true,
  imports: [],
  templateUrl: './delete-file-modal.component.html',
  styleUrl: './delete-file-modal.component.scss',
})
export class DeleteFileModalComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
   this.fileIcon = changes['fileIcon'].currentValue
    if (this.fileIcon == '../../../assets/imgs/music-file-shape.svg') {
      this.fileIcon = '../../../assets/imgs/music-shap.svg';
      this.headLine='حذف الملف الصوتي'
      this.content='هل تريد حذف هذا الملف الصوتي'
    } else if (this.fileIcon == '../../../assets/imgs/folderIcon.svg') {
      this.fileIcon = '../../../assets/imgs/delete-file.svg';
      this.headLine='حذف المجلد'
      this.content='هل تريد حذف هذا المجلد'
    } else if (this.fileIcon == '../../../assets/imgs/Img-icon.svg') {
      this.fileIcon = '../../../assets/imgs/delete-photo.svg';
      this.headLine='حذف الصورة'
      this.content='هل تريد حذف هذه الصورة'
    }
  }
  @Input() fileIcon: string = '';
  @Output() onClickOk = new EventEmitter<void>();
  headLine:string=''
  content:string=''
}
