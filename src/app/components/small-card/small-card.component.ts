import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  @Input()
  cardPhoto:string = ''
  @Input()
  cardDate:string = ''
  @Input()
  cardTitle:string = ''
  @Input()
  Id:string = ''
  constructor() { }

  ngOnInit(): void {
  }

}
