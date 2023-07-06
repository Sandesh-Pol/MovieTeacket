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
    
  getData(data:any){
    this.dp.sendData1(data)
    {
      this.allMovie = data;
    }
  }
}
