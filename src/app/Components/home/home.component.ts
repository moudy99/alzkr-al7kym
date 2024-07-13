import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminProfileComponent } from '../pop-Up models/admin-profile/admin-profile.component';
import { DeleteAllMediaComponent } from '../pop-Up models/delete-all-music/delete-all-music.component';
import { DeleteFileComponent } from '../pop-Up models/delete-file/delete-file.component';
import { DeletePhotosComponent } from '../pop-Up models/delete-photos/delete-photos.component';
import { DeleteFileModalComponent } from '../pop-Up models/delete-music-modal/delete-file-modal.component';
import { TruncatePipe } from '../../../pipes/truncate.pipe';
import { SweetAlert } from '../../DecoratedAlert/sweet-alert';
import { DeleteFileInHomeComponent } from '../pop-Up models/delete-files-in-home/delete-file-in-home.component';
import { AudioSettingsComponent } from '../pop-Up models/audio-settings/audio-settings.component';
declare var bootstrap: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    DeleteFileInHomeComponent,
    CommonModule,
    DeleteFileModalComponent,
    DeleteAllMediaComponent,
    DeleteFileComponent,
    AdminProfileComponent,
    DeletePhotosComponent,
    TruncatePipe,
    AudioSettingsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  setVideoSettings($event: any) {
    this.videoSettings = $event;
  }
  videoSettings: { timeInterval: number; repeatCount: number } = {
    timeInterval: 0,
    repeatCount: 0,
  };
  adminName: string = 'مودي رسمي';
  selectedImage: string | ArrayBuffer | null = null;
  AllMusicFiles: File[] = [];
  fileIndexToDelete: number | null = null;

  constructor() {}

  handleAudioUpload() {
    const inputElement = document.getElementById(
      'audio-upload'
    ) as HTMLInputElement;
    if (inputElement) {
      inputElement.click();
    }
    console.log('done');
  }

  handleVideoUpload() {
    const inputElement = document.getElementById(
      'video-upload'
    ) as HTMLInputElement;
    if (inputElement) {
      inputElement.click();
    }
  }

  handleAudioFileInput(event: Event) {
    const target = event.target as HTMLInputElement;
    if (
      target.files &&
      target.files.length > 0 &&
      target.files[0].type.startsWith('audio/')
    ) {
      const file = target.files![0];
      this.AllMusicFiles.unshift(file);
    } else {
      SweetAlert.giveAlert('خطا', 'قم ب اختيار ملف صوتي صحيح');
    }
  }

  handleVideoFileInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedImage = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  eraseAllMusic() {
    this.AllMusicFiles = [];
  }

  swapAudioFileInput($event: Event, fileIndex: number) {
    const target = $event.target as HTMLInputElement;
    if (
      target.files &&
      target.files.length > 0 &&
      target.files[0].type.startsWith('audio/')
    ) {
      const file = target.files[0];
      this.AllMusicFiles[fileIndex] = file;
    } else {
      SweetAlert.giveAlert('خطا', 'قم ب اختيار ملف صوتي صحيح');
    }
  }

  openDeleteModal(index: number) {
    this.fileIndexToDelete = index;
    const deleteModal = new bootstrap.Modal(
      document.getElementById('deleteMusicInHomeModal')!
    );
    deleteModal.show();
  }

  deleteMusicFile(index: number) {
    if (index !== null && index >= 0 && index < this.AllMusicFiles.length) {
      this.AllMusicFiles.splice(index, 1);
    }
  }
}
