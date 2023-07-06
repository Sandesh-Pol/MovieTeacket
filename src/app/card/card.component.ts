import { Component } from '@angular/core';
import { DataSupplyService } from '../sercice/data-supply.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  allMovie : any;

  constructor(private dp: DataSupplyService) { }
    
  ngOnInit() {
    this.allMovie = this.dp.sendMovieData();
  }
}