import { Component } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-messagecreate',
  templateUrl: './messagecreate.component.html',
  styleUrls: ['./messagecreate.component.scss']
})
export class MessagecreateComponent{
  message: any;
  modalOpen = false;

  constructor(
    private messageService: MessageService,
    private snackBar: MatSnackBar,
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
        this.modalOpen = false;
        this.snackBar.open('Message sent successfully!', 'Close', {
          duration: 4000, 
          panelClass: ['success-snackbar']
        });
        this.messageService.updateValue();
      }else{
        this.snackBar.open('Failed to send message!', 'Close', {
          panelClass: ['error-snackbar']
        });
      }
    });
  }




}