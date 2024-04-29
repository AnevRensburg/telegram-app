import { Component } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})

export class MessageComponent {
  message: any;

  constructor(
    private messageService: MessageService
  ) { }

  onMessageSubmit() { // On Submit, clear form
    // const messageInput = this.message;
    // console.log(messageInput);
    // this.message = '';

    // Get message content from form and time
    const messageData = {
      message: this.message
    }
    console.log(messageData);

    // Store Message Data Locally      
    this.messageService.storeMessageData(messageData).subscribe((data:any) => {
      console.log(data);
      if(data.success) this.message = '';
    });
  }
}