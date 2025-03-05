import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';

import { BoletimRoutingModule } from './boletim-routing.module';
import { BoletimFormComponent } from './boletim-form/boletim-form.component';
import { BoletimFormModule } from './boletim-form/boletim-form.module';
import { BoletimListModule } from './boletim-list/boletim-list.module';
import { FormsModule } from '@angular/forms';
import { BoletimListComponent } from './boletim-list/boletim-list.component';


@NgModule({
  declarations: [
    BoletimFormComponent,
    BoletimListComponent

  ],
  imports: [
    CommonModule,
    BoletimRoutingModule,
    FormsModule


  ]
})
export class BoletimModule { }
