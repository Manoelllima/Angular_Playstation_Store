import { Component, OnInit, } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { dataFake } from '../../data/dataFake';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  gamesPs5 = dataFake[0].ps5
  ngOnInit(): void {  }
}
