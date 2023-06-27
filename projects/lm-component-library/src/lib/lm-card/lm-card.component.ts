import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-lm-card',
  templateUrl: './lm-card.component.html',
  styleUrls: ['./lm-card.component.css']
})
export class LmCardComponent implements OnInit {
  @Input() cardTitle: string;
  @Input() cardContent:string;
  @Input() imageUrl: string;
    constructor() { 
    this.cardTitle = "Add card title here...";
    this.cardContent = "Add card content  here...";
    this.imageUrl = '';
  }

  ngOnInit(): void {
    console.log(this.imageUrl);
  }

}
