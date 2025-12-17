import { Component } from '@angular/core';
import { ButtonModule, ButtonPassThrough } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { FileUpload, FileUploadPassThrough } from 'primeng/fileupload';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';
import { exportButtonPT, importButtonPT } from './dashboard-shift-tables-styled-components';
import { ShiftTableComponent } from "./shift-table-component/shift-table-component";


@Component({
  selector: 'app-dashboard-shift-tables',
  imports: [IconField, InputIcon, InputTextModule, ToolbarModule, ButtonModule, FileUpload, DividerModule, ShiftTableComponent],
  templateUrl: './dashboard-shift-tables.html',
  styles: `
  .p-inputtext {
    background-color: #1F1D2B;
    border: none;
    width: 100%;
  }

  p-button button {
    box-shadow: 0px 1px 1px 0px #02001799;
  }
  `,
})
export class DashboardShiftTables {
  exportButtonPT: ButtonPassThrough = exportButtonPT
  importButtonPT: FileUploadPassThrough = importButtonPT
}
