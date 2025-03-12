import { Component, NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';

import { BoletimFormRoutingModule } from './boletim-form-routing.module';

import { BoletimFormComponent } from './boletim-form.component';
import { FormsModule, NgModel } from '@angular/forms';




@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    FormsModule,
    BoletimFormRoutingModule
  ]
})
export class BoletimFormModule { }
