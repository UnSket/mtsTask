import {Component, OnInit} from '@angular/core';
import {DataGeneratorService} from '../service/data-generator.service';
import {Widget} from './Widget';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  widgets: Array<Widget>;

  constructor( private dataGenerator: DataGeneratorService) {}

  ngOnInit(): void {
    this.widgets = [];
  }

  addWidget() {
    this.widgets.push(this.dataGenerator.generateWidget());
  }

}
