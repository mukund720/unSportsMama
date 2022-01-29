import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { FormsModule } from '@angular/forms';
import { CommonFunctionModule } from '../common/common-function.module';


@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    FormsModule,
    CommonFunctionModule,
    SignupRoutingModule
  ],
  exports:[SignupComponent]
})
export class SignupModule { }
