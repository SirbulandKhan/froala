import { Component } from '@angular/core';
declare var FroalaEditor: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  ngOnInit() {
    var editor = new FroalaEditor('#froala');
  }
}
