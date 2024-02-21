import { Component } from '@angular/core';
import {
  CellValueChangedEvent,
  ColDef,
  GridReadyEvent,
  SelectionChangedEvent,
  GridApi,
} from 'ag-grid-community';
import { HttpClient } from '@angular/common/http';
import { CompanyLogoRendererComponent } from './company-logo-renderer/company-logo-renderer.component';
import { MissionResultRendererComponent } from './mission-result-renderer/mission-result-renderer.component';

interface IRow {
  mission: string;
  company: string;
  location: string;
  date: string;
  time: string;
  rocket: string;
  price: number;
  successful: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  gridApi!: GridApi;
  title: string = "ag-grid-ng"
  defaultColDef: ColDef = {
    filter: true,
    editable: true,
  };
  rowData: IRow[] = [];
  colDefs: ColDef[] = [
    {
      field: 'mission',
      checkboxSelection: true,
      headerCheckboxSelection: true,
    },
    { field: 'company', cellRenderer: CompanyLogoRendererComponent },
    { field: 'location' },
    {
      field: 'date',
      valueFormatter: (params) => {
        return new Date(params.value).toLocaleDateString('fr-FR', {
          weekday: 'long',
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        });
      },
    },
    {
      field: 'price',
      valueFormatter: (params) => {
        return '£' + params.value.toLocaleString();
      },
    },
    { field: 'successful', cellRenderer: MissionResultRendererComponent },
    { field: 'rocket' },
  ];

  constructor(private http: HttpClient) {}

  // Load data into grid when ready
  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    this.http
      .get<any[]>(
        'https://www.ag-grid.com/example-assets/space-mission-data.json'
      )
      .subscribe((data) => (this.rowData = data));
  }

  // Handle cell editing event
  onCellValueChanged = (event: CellValueChangedEvent) => {
    console.log(`New Cell Value: ${event.value}`);
  };

  // Handle row selection changed event
  onSelectionChanged = (event: SelectionChangedEvent) => {
    const selectedRows = this.gridApi.getSelectedRows();
    const allRowsSelected = selectedRows.length === this.rowData.length;
    console.log(`Row Selected! All Rows Selected: ${allRowsSelected}`);
  };
}
