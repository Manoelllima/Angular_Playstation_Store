import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {

  @Input()
  imgUrl:string = "";

  @Input()
  titleCard:string = "";

  @Input()
  price:string = "";

  ngOnInit(): void {

  }

}
