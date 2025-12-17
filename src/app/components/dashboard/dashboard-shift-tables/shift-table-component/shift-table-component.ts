import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService, SelectItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-shift-table-component',
  imports: [FormsModule, TableModule, ToastModule, CommonModule, TagModule, SelectModule, ButtonModule, InputTextModule, AvatarModule],
  templateUrl: './shift-table-component.html',
  styles: `
  .custom-select {
      background-color: transparent;
      border: 2px solid #464353;
  }
  `,
})
export class ShiftTableComponent implements OnInit {
  products: any[] = [];
  newProductsColumns: any[] = [];

  newlyAddedColumns: string[] = [];
  // newlyAddedColumnsValues: any[] = [];
  statuses!: SelectItem[];
  clonedProducts: { [s: string]: any } = {};
  messageService: MessageService = inject(MessageService);

  showColumnNameInput: boolean = false;
  newColumnName: string = '';

  ngOnInit() {
    this.products = [
      {
        Vehicle: 'Bus-9264',
        PlateNumber: '04321',
        Odometer: '55,956 KM',
        GPS: '3-Nov-2024 13:05:50',
        Device: ['Teltonika', 'C03-96321'],
        SIM: ['Allowance', '1.5GB'],
        Fleet: 'Q22',
        Status: 'active',
      },
      {
        Vehicle: 'Bus-9265',
        PlateNumber: '04301',
        Odometer: '55,956 KM',
        GPS: '3-Nov-2024 13:05:50',
        Device: ['Teltonika', 'C03-96321'],
        SIM: ['Allowance', '1.5GB'],
        Fleet: 'Q22',
        Status: 'active',
      },
      {
        Vehicle: 'Bus-9266',
        PlateNumber: '04370',
        Odometer: '55,956 KM',
        GPS: '3-Nov-2024 13:05:50',
        Device: ['Teltonika', 'C03-96321'],
        SIM: ['Allowance', '1.5GB'],
        Fleet: 'Q22',
        Status: 'active',
      },
    ];

    this.statuses = [
      { label: 'Active', value: 'active' },
      { label: 'Inactive', value: 'inactive' },
    ];
  }

  onRowEditInit(product: any) {
    this.clonedProducts[product.id as string] = { ...product };
  }

  onRowEditSave(product: any) {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Product is updated' });
  }

  onRowEditCancel(product: any, index: number) {
    this.products[index] = this.clonedProducts[product.id as string] as never;
    delete this.clonedProducts[product.id as string];
  }

  onAddColumn() {
    this.showColumnNameInput = true;
    this.newColumnName = '';
  }

  onConfirmColumnName() {
    this.showColumnNameInput = false;
    this.newlyAddedColumns.push(this.newColumnName);

    this.products.map((item, index) => {
      return { ...item, ...{ [this.newColumnName]: '' } };
    })

    this.newColumnName = '';
  }

  cancelColumnName() {
    this.showColumnNameInput = false;
    this.newColumnName = '';
  }
}
