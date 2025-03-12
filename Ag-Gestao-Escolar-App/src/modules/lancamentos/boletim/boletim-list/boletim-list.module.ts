import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';

import { BoletimListRoutingModule } from './boletim-list-routing.module';

import { BoletimListComponent } from './boletim-list.component';
import { FormsModule } from '@angular/forms';
import { BoletimFormComponent } from '../boletim-form/boletim-form.component';





@NgModule({
  declarations: [],

  imports: [
    CommonModule,
     FormsModule,

    BoletimListRoutingModule
  ]
})
export class BoletimListModule { }
