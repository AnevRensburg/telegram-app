import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ElementRef } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';



@Component({
  selector: 'app-messagecreate',
  templateUrl: './messagecreate.component.html',
  styleUrls: ['./messagecreate.component.scss']
})

export class MessagecreateComponent implements OnInit{
  message: any;
  messages: any[] = [];

  @Output() dismiss = new EventEmitter;

  constructor(
    private messageService: MessageService,
    private snackBar: MatSnackBar,
    private elementRef: ElementRef
  ) {}

  ngOnInit(){
  }

  onComposeClick(){
    console.log("Compose button clicked");
  }

  onMessageSubmit() { 
    // Get message content from form input
    const messageData = {
      message: this.message
    }
    // Store message content Locally
    this.messageService.storeMessageData(messageData).subscribe((data:any) => {
      if(data.success) {
        this.message = '';
        this.messageService.updateValue();
        this.snackBar.open('Message sent successfully!', 'Close', {
          duration: 3000
        })
      }else{
        this.snackBar.open('Failed to send Message!', 'Close');
      }
    });
  }




}