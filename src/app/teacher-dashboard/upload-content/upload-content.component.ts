import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-upload-content',
  templateUrl: './upload-content.component.html',
  styleUrls: ['./upload-content.component.scss']
})
export class UploadContentComponent {

  content = {
    title: '',
    comments: ''
  };

  fileSelected = false;

  onFileChange(event: any): void {
    if (event.target.files.length > 0) {
      this.fileSelected = true;
    } else {
      this.fileSelected = false;
    }
  }

  submitForm(): void {
    console.log('Form Data:', this.content);
  }
}

