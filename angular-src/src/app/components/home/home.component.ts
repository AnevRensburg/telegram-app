import { Component } from '@angular/core';
// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-quartz.css";
// import { AgGridAngular } from "ag-grid-angular";
// import { ColDef } from "ag-grid-community";

// Row Data Interface
// interface IRow {
//   make: string;
//   model: string;
//   price: number;
//   electric: boolean;
// }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // standalone: true,
  // imports: [AgGridAngular], // Add Angular Data Grid Component
  // template: `
  //   <div class="content" style="width: 100%; height: 100%;">
  //     <!-- The AG Grid component, with Dimensions, CSS Theme, Row Data, and Column Definition -->
  //     <ag-grid-angular
  //       style="width: 100%; height: 100%;"
  //       [class]="themeClass"
  //       [rowData]="rowData"
  //       [columnDefs]="colDefs"
  //       [defaultColDef]="defaultColDef"
  //     >
  //     </ag-grid-angular>
  //   </div>
  // `
})
export class HomeComponent {
  // themeClass =
  //   "ag-theme-quartz";

  // // Row Data: The data to be displayed.
  // rowData: IRow[] = [
  //   { make: "Tesla", model: "Model Y", price: 64950, electric: true },
  //   { make: "Ford", model: "F-Series", price: 33850, electric: false },
  //   { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  //   { make: "Mercedes", model: "EQA", price: 48890, electric: true },
  //   { make: "Fiat", model: "500", price: 15774, electric: false },
  //   { make: "Nissan", model: "Juke", price: 20675, electric: false },
  // ];

  // // Column Definitions: Defines & controls grid columns.
  // colDefs: ColDef<IRow>[] = [
  //   { field: "make" },
  //   { field: "model" },
  //   { field: "price" },
  //   { field: "electric" },
  // ];

  // defaultColDef: ColDef = {
  //   flex: 1,
  // };
}
 