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
    
  getData(data:any){
    this.dp.sendData(data)
    {
      this.allMovie = data;
    }
  }
}