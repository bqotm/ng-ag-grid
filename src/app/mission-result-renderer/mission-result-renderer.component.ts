import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import {
  ICellRendererParams,
} from 'ag-grid-community';

@Component({
  selector: 'app-mission-result-renderer',
  templateUrl: './mission-result-renderer.component.html',
  styleUrls: ['./mission-result-renderer.component.css']
})
export class MissionResultRendererComponent implements ICellRendererAngularComp {
  // Init Cell Value
  public value!: string;
  agInit(params: ICellRendererParams): void {
    this.value = params.value ? 'tick-in-circle' : 'cross-in-circle';
  }

  // Return Cell Value
  refresh(params: ICellRendererParams): boolean {
    this.value = params.value;
    return true;
  }
}
