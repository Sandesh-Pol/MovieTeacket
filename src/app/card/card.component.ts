import { Component, OnInit } from '@angular/core';
import { DataSupplyService } from '../sercice/data-supply.service';
import { MatDialog } from '@angular/material/dialog';
import { Dialog1Component } from '../dialog/dialog1/dialog1.component';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  allMovie : any;

  constructor(public dp: DataSupplyService,public dialog: MatDialog) { }
    
  ngOnInit() {
    this.allMovie = this.dp.sendMovieData();
  }
  openDialog()
{
  this.dialog.open(Dialog1Component)
}


}