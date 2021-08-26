import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  i=2;
  arr = ['HAN','SANG','HAN','SANG','HAN','SANG','HAN','SANG','HAN','SANG'];
  cal(index){
    if (index % this.i == 0){
      return 'one';
    } else {
      return 'two';
    }
  }
}
