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
    private messageService: MessageService
  ){ }

  // When Page is reloaded
  ngOnInit(): void { 
    this.messageService.getMessages().subscribe((records:any) => {
      records.forEach((record:any) => {
        record.time = new Date(record.time).toLocaleString();
      })
      this.messages = records;
    });
  }

  refresh() {
  }

}
