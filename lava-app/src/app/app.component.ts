import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lava-app';
  description = 'This is a description'
  today = new Date()
  magicNumber = 42 
}
