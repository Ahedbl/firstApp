import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstApp';
  formatSlider(value : number){
    if(value%60 < 10) return ((value - value%60) / 60) +':0' + (value%60);
    return ((value - value%60) / 60) +':' + (value%60);
  }
}


