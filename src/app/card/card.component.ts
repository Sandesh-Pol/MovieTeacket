import { Component, OnInit } from '@angular/core';
import { DataSupplyService } from '../sercice/data-supply.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  allMovie : any;

  constructor(public dp: DataSupplyService) { }
    
  ngOnInit() {
    this.allMovie = this.dp.sendMovieData();
    console.log();
    
  }


}