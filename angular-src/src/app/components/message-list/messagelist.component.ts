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
  date!: String;
  time!: String;
  dateAndTime!: String;

  colDefs: ColDef<IMessageData>[] = [
    { headerName: "Timestamp", field: "time", flex: 1 },
    { headerName: "Username", field: "username", flex: 0.7 },
    { headerName: "Message", field: "message", flex: 1.7 }
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
        let newDate = new Date(record.time);
        this.dateAndTime = newDate.toLocaleString(); 
        record.time = this.dateAndTime;

        this.time = newDate.toLocaleTimeString();

        const options: Intl.DateTimeFormatOptions = {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        };
        this.date = newDate.toLocaleDateString(undefined, options); 
      })
      this.rowData = records;
    });
  }

  onRowClicked(event: any) {
    this.selectedMessage = event.data;
    this.modalOpen = !this.modalOpen;
  }
}

