import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'ag-gestao-escolar-app';
  menu:boolean = true;

  fecharMenu()
  {
    this.menu =!this.menu;
  }
}
