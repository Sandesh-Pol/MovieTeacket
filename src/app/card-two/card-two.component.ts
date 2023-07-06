import { Component } from '@angular/core';
import { DataSupplyService } from '../sercice/data-supply.service';

@Component({
  selector: 'app-card-two',
  templateUrl: './card-two.component.html',
  styleUrls: ['./card-two.component.css']
})
export class CardTwoComponent {
  allMovie : any;

  constructor(private dp: DataSupplyService) { }
    
  ngOnInit() {
    this.allMovie = this.dp.sendMovieData1();
  }
}
