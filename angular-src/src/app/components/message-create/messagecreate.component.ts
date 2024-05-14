import { Component } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-messagecreate',
  templateUrl: './messagecreate.component.html',
  styleUrls: ['./messagecreate.component.scss']
})

export class MessagecreateComponent {
  message: any;
  messages: any[] = [];

  constructor(
    private messageService: MessageService,
    private snackBar: MatSnackBar
  ) {}

  onMessageSubmit() { 
    // Get message content from form input
    const messageData = {
      message: this.message
    }
    // Store message content Locally
    this.messageService.storeMessageData(messageData).subscribe((data:any) => {
      if(data.success) {
        this.message = '';
        this.snackBar.open('Message sent successfully!', 'Close', {
          duration: 3000
        });
        // refreshPage();
      } else{
        this.snackBar.open('Failed to send Message!', 'Close');
      }
    });
  }

}

function refreshPage() {
  window.location.reload();
}