import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoletimFormRoutingModule } from './boletim-form-routing.module';
import { BoletimFormComponent } from './boletim-form.component';


@NgModule({
  declarations: [
    BoletimFormComponent
  ],
  imports: [
    CommonModule,
    BoletimFormRoutingModule
  ]
})
export class BoletimFormModule { }
