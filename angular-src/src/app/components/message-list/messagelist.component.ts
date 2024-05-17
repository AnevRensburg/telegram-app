import { Component, OnInit } from '@angular/core';
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
  selector: 'app-messagelist',
  templateUrl: './messagelist.component.html',
  styleUrls: ['./messagelist.component.scss'],
})

export class MessagelistComponent implements OnInit{
  messages: any = [];
  themeClass = "ag-theme-quartz";
  rowData!: IMessageData[];
  modalOpen = false;
  selectedMessage: any;

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

  ngOnInit() {
    // Subscribe to latestMessages BehaviorSubject
    this.messageService.latestMessages.subscribe((data: number) => {
      this.loadMessages();
    });
  }  
  
  // Get message list
  loadMessages(){
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
    this.selectedMessage = event.data;
    this.modalOpen = !this.modalOpen;
  }
}

