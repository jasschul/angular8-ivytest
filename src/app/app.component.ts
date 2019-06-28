import { Component } from '@angular/core';
import { DxChartModule } from 'devextreme-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ivy-devextreme-demo-angular8';
  fruits = [
    { fruit: 'Oranges', yield: 10, consumed: 7 },
    { fruit: 'Apples', yield: 15, consumed: 14 },
    { fruit: 'Bananas', yield: 9, consumed: 9 }
  ];
}
