import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-lm-header',
  templateUrl: './lm-header.component.html',
  styleUrls: ['./lm-header.component.css']
})
export class LmHeaderComponent implements OnInit {
  @Input() title: string;;
  constructor() { 
    this.title = 'Welcome to Loadman!';
  }

  ngOnInit(): void {
  }

}
