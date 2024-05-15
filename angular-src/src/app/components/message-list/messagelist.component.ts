import { Component } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { AgGridAngular } from "ag-grid-angular";
import { ColDef, GridReadyEvent } from "ag-grid-community";

// Row Data Interface
interface IMessageData {
  time: Date | string | number,
  username: string,
  message: string
}

@Component({
  standalone: true,
  imports: [AgGridAngular],
  selector: 'app-messagelist',
  templateUrl: './messagelist.component.html',
  styleUrls: ['./messagelist.component.scss'],
})

export class MessagelistComponent {
  messages: any = [];
  themeClass = "ag-theme-quartz";
  rowData!: IMessageData[];

  colDefs: ColDef<IMessageData>[] = [
    { headerName: "Timestamp", field: "time", flex: 0.8 },
    { headerName: "Username", field: "username", flex: 0.8 },
    { headerName: "Message", field: "message", flex: 1.4 }
  ];

  defaultColDef: ColDef = {
    flex: 1,
  };

  constructor(
    private messageService: MessageService
  ) { }
  
  // Get message list
  loadMessages(params: GridReadyEvent<IMessageData>) {
    this.messageService.getMessages().subscribe((records: any) => {
      // Convert time to local time
      records.forEach((record:any) => {
        let date = new Date(record.time);
        let formattedDate = date.toLocaleString();        
        record.time = formattedDate;
      })
      this.rowData = records;
    });
  }

  onRowClicked(event: any) {
    console.log('Row clicked: ', event.data);
    console.log('Time Sent: ', event.data.time);
    console.log('Sent By: ', event.data.username);
    console.log('Message Content: ', event.data.message);
  }
}

