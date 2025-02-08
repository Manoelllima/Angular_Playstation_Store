import { Component, OnInit} from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { CommonModule } from '@angular/common';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-home',
  imports: [CardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  ps5:object = dataFake[0];

  ngOnInit(): void {
    console.log(this.ps5);

  }

}
