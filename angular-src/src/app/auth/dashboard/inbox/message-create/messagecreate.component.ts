import { Component } from '@angular/core';
import { MessageService } from 'src/app/auth/dashboard/inbox/services/message.service';

@Component({
  selector: 'app-messagecreate',
  templateUrl: './messagecreate.component.html',
  styleUrls: ['./messagecreate.component.scss']
})

export class MessagecreateComponent {
  message: any;
  messages: any[] = [];

  constructor(
    private messageService: MessageService
  ) {}

  onMessageSubmit() { 
    // Get message content from form input
    const messageData = {
      message: this.message
    }
    console.log(messageData);

    // Store message content Locally
    this.messageService.storeMessageData(messageData).subscribe((data:any) => {
      console.log(data);
      // Clear message input field if message is successfully stored
      if(data.success) this.message = '';
      // Refresh message list
      // if(data.success) this.messageService.refreshMessageList();
    });

    refreshPage();
  }
}

function refreshPage() {
  window.location.reload();
}