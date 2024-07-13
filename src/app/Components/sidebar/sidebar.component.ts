import { Component, EventEmitter, Output } from '@angular/core';
import { Group } from '../../Models/Group/group';
import { TruncatePipe } from '../../../pipes/truncate.pipe';
import { CommonModule } from '@angular/common';
import { SweetAlert } from '../../DecoratedAlert/sweet-alert';
import { DeleteFileModalComponent } from '../pop-Up models/delete-music-modal/delete-file-modal.component';
import { DeleteAllMediaComponent } from '../pop-Up models/delete-all-music/delete-all-music.component';
import Swal from 'sweetalert2';
import { AudioSettingsComponent } from '../pop-Up models/audio-settings/audio-settings.component';
import { DeleteFolderComponent } from '../pop-Up models/delete-folder/delete-folder.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  imports: [
    TruncatePipe,
    CommonModule,
    DeleteFileModalComponent,
    DeleteAllMediaComponent,
    TruncatePipe,
    AudioSettingsComponent,
    DeleteFolderComponent
  ],
})
export class SidebarComponent {
  mediaToDeleteIndex: number | null = null;
  DeleteIndexInFolder: number | null = null;
  mediaToDeleteIndexInFolder: {
    folderIndex: number;
    fileIndex: number;
  } | null = { folderIndex: 0, fileIndex: 0 };
  folderDeleteIndex:number=0
  groups: Group[] = [];
  medias: { iconSrc: string; File: File }[] = [];
  fileIconToDelete: string = '';
  folderFileIconToDelete: string = '';
  folderIconToDelete: string = '';
  setFolderToDeleteIndex(folderIndex: number) {
    this.folderDeleteIndex = folderIndex;
  }
  setMediaToDeleteIndex(index: number) {
    this.mediaToDeleteIndex = index;
    this.fileIconToDelete = this.medias[index].iconSrc;
  }
  deleteMedia() {
    if (this.mediaToDeleteIndex !== null) {
      this.medias.splice(this.mediaToDeleteIndex, 1);
      this.mediaToDeleteIndex = null;
    }
  }
  addPhoto($event: Event) {
    const input = $event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      if (file.type.startsWith('image/')) {
        this.medias.unshift({
          File: file,
          iconSrc: '../../../assets/imgs/Img-icon.svg',
        });
      } else {
        SweetAlert.giveAlert('خطا', 'قم باختيار ملف صوره صحيح');
      }
    }
  }
  addAudio($event: Event) {
    const input = $event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      if (file.type.startsWith('audio/')) {
        this.medias.unshift({
          File: file,
          iconSrc: '../../../assets/imgs/music-file-shape.svg',
        });
      } else {
        SweetAlert.giveAlert('خطا', 'قم باختيار ملف صوتي صحيح');
      }
    }
  }
  swapMediaInTheMedias($event: Event) {
    const input = $event.target as HTMLInputElement;
    const file = input.files![0];
    if (input.files && input.files.length > 0) {
      if (file.type.startsWith('image/')) {
        this.medias[this.mediaToDeleteIndex!] = {
          File: file,
          iconSrc: '../../../assets/imgs/Img-icon.svg',
        };
      } else if (file.type.startsWith('audio/')) {
        this.medias[this.mediaToDeleteIndex!] = {
          File: file,
          iconSrc: '../../../assets/imgs/music-file-shape.svg',
        };
      } else {
        SweetAlert.giveAlert('خطا', 'قم باضافه ملف صوره او صوت لا غير');
      }
    }
  }
  addGroup() {
    Swal.fire({
      text: 'قم بكتابه اسم الملف المراد انشائه',
      input: 'text',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        const enteredText = result.value; // Get the entered text
        this.groups.unshift({
          isFilesDisplayed: false,
          name: enteredText,
          medias: [],
        });
      }
    });
  }
  deleteFolder() {
    this.groups.splice(this.folderDeleteIndex!, 1);
  }
  addMediaInTheFolder($event: any, folderIndex: number) {
    const input = $event.target as HTMLInputElement;
    const file = input.files![0];
    if (input.files && input.files.length > 0) {
      if (file.type.startsWith('image/')) {
        this.groups[folderIndex].medias?.unshift({
          File: file,
          iconSrc: '../../../assets/imgs/Img-icon.svg',
        });
      } else if (file.type.startsWith('audio/')) {
        this.groups[folderIndex].medias?.unshift({
          File: file,
          iconSrc: '../../../assets/imgs/music-file-shape.svg',
        });
      } else {
        SweetAlert.giveAlert('خطا', 'قم باضافه ملف صوره او صوت لا غير');
      }
    }
  }
  swapMediaInTheFolder($event: Event) {
    const input = $event.target as HTMLInputElement;
    const file = input.files![0];
    if (input.files && input.files.length > 0) {
      if (file.type.startsWith('image/')) {
        this.groups[this.mediaToDeleteIndexInFolder!.folderIndex].medias[
          this.mediaToDeleteIndexInFolder!.fileIndex
        ] = {
          File: file,
          iconSrc: '../../../assets/imgs/Img-icon.svg',
        };
      } else if (file.type.startsWith('audio/')) {
        this.groups[this.mediaToDeleteIndexInFolder!.folderIndex].medias[
          this.mediaToDeleteIndexInFolder!.fileIndex
        ] = {
          File: file,
          iconSrc: '../../../assets/imgs/music-file-shape.svg',
        };
      } else {
        SweetAlert.giveAlert('خطا', 'قم باضافه ملف صوره او صوت لا غير');
      }
    }
  }
  setMediaToDeleteIndexInFolder(folderIndex: number, fileIndex: number) {
    this.mediaToDeleteIndexInFolder!.folderIndex = folderIndex;
    this.mediaToDeleteIndexInFolder!.fileIndex = fileIndex;
    this.fileIconToDelete =
      this.groups[this.mediaToDeleteIndexInFolder!.folderIndex].medias[
        this.mediaToDeleteIndexInFolder!.fileIndex
      ].iconSrc;
  }
  deleteMediaInFolder() {
    if (this.mediaToDeleteIndexInFolder !== null) {
      this.groups[this.mediaToDeleteIndexInFolder!.folderIndex].medias.splice(
        this.mediaToDeleteIndexInFolder!.fileIndex,
        1
      );
      this.mediaToDeleteIndexInFolder = { fileIndex: 0, folderIndex: 0 };
    }
  }
  deleteFoldarsAndMedias() {
    this.medias = [];
    this.groups = [];
  }
}
