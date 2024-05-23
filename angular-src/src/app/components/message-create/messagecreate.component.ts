import { Component } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { ValidateService } from 'src/app/services/validate.service';
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
    private validateService: ValidateService,
    private snackBar: MatSnackBar,
  ) {}

  onMessageSubmit() { 
    // Get message content from form input
    const messageData = {
      message: this.message
    }

    // Check if message is valid
    if(this.validateService.validateMessage(messageData.message) === 'Message empty'){
      this.snackBar.open('Please type a message', 'Close', {
          panelClass: ['error-snackbar']
      });
      return false;
    } else if (this.validateService.validateMessage(messageData.message) === 'Message too long'){
      this.snackBar.open('Exceeds 4000 characters', 'Close', {
          panelClass: ['error-snackbar']
      });
      return false;
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
    return false;
  }

  onDiscard(){
    this.message = '';
  }




}