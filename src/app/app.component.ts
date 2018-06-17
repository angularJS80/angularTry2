//Appcompoent 자원을 app-root 테그로 사용될 수 있도록 한다.
// index.html 에서 app-root 테그 사용됨.
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}
