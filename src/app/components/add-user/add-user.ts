import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from "@angular/router";
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { FileUpload } from 'primeng/fileupload';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { Select } from 'primeng/select';
import { ToggleSwitchModule } from 'primeng/toggleswitch';

@Component({
  selector: 'app-add-user',
  imports: [ReactiveFormsModule, ToggleSwitchModule, FileUpload, Select, IconFieldModule, InputIconModule, DividerModule, RouterLink, ButtonModule],
  templateUrl: './add-user.html',
  styles: ``,
})
export class AddUser {
  private formBuilder = inject(FormBuilder);

  imgPreview = signal<string | ArrayBuffer | null>(null);
  rfidCheck: boolean = false;
  fleetOptions = [
    { name: 'Pearl Cluster', code: 'PC' },
    { name: 'Pack of wolves', code: 'PW' },
    { name: 'Pride of lions', code: 'PL' },
  ]

  userForm = this.formBuilder.group({
    image: ['', Validators.required],
    firstName: ['', Validators.required],
    middleName: [''],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: ['', [Validators.required, Validators.pattern('^\\+?[1-9]\\d{0,3}[-.\\s]?\\d{1,14}$')]],
    rfid: [{ value: '12345', disabled: true }],
    role: ['', Validators.required],
    department: ['', Validators.required],
    fleet: [''],
  });

  rfidToggleChange() {
    this.rfidCheck = !this.rfidCheck;
  }

  onSubmit() {
    console.log(this.userForm.value);
  }

  onFileSelected(event: any): void {
    if (event.files && event.files.length > 0) {
      const file = event.files[0];
      if (file.type.match(/image\/*/)) {
        const reader = new FileReader();

        reader.onload = () => {
          this.imgPreview.set(reader.result);
          this.userForm.patchValue({ image: file });
        };

        reader.readAsDataURL(file);
      }
    }
  }
}
