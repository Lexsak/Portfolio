import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-portfolio';

  isFadeOut: boolean = false;

  onFadeOutComplete(event: boolean) {
    this.isFadeOut = event;
  }
}
