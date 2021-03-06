import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';


@NgModule({
  declarations: [DialogBoxComponent],
  exports:[DialogBoxComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CommonFunctionModule { }
