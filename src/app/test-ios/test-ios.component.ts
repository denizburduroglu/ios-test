import { Component, OnInit } from '@angular/core';
import * as moment from "moment";
@Component({
  selector: 'app-test-ios',
  templateUrl: './test-ios.component.html',
  styleUrls: ['./test-ios.component.css']
})
export class TestIOSComponent implements OnInit {

  timestamp;
  constructor() { }

  ngOnInit(): void {
    this.timestamp = moment().format('MM-DD-YYYY HH:mm:ss');
  }

}
