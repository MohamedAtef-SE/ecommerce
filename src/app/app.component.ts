import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import {  NgxSpinnerComponent } from 'ngx-spinner';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgxSpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ecommerce';
}
