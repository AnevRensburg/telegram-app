import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-messagelist',
  templateUrl: './messagelist.component.html',
  styleUrls: ['./messagelist.component.scss']
})

export class MessagelistComponent implements OnInit{
  messages:any[] = [];

  constructor(
    private messageService: MessageService,
  ){}

  // Get message list
  loadMessages() {
    this.messageService.getMessages().subscribe((records:any) => {
      // Convert time to local time
      records.forEach((record:any) => {
        record.time = new Date(record.time).toLocaleString();
      })
      this.messages = records;
    });
  }

  ngOnInit(): any{
    this.loadMessages();
  }
}




