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
  allMovie: any;
  filteredData: any[] = [];
  ytData = [
    {   link: "https://www.youtube.com/embed/8EPJiFfWRfw",
        id1: 1
    },
    {
        link: "https://www.youtube.com/embed/QJ67Pf8PLdk",
        id1: 2
    },
    {
        link: "https://www.youtube.com/embed/y8ZbYM3fbqU",
        id1: 3
    },
    {
        link: "https://www.youtube.com/embed/scNmYjoR-qM",
        id1: 4
    },
    {
        link: "https://www.youtube.com/embed/X7WXHhokylc",
        id1: 5
    },
    {
        link: "https://www.youtube.com/embed/jprhe-cWKGs",
        id1: 6
    },
    {
        link: "https://www.youtube.com/embed/cLthAiz_PnQ",
        id1: 7
    },
    {
        link: "https://www.youtube.com/embed/hXzcyx9V0xw",
        id1: 8
    },
  ]

  constructor(public dp: DataSupplyService, public dialog: MatDialog) { }

  ngOnInit() {
    this.allMovie = this.dp.sendMovieData();
  }

  openDialog(item: any) {
    const dialogRef = this.dialog.open(Dialog1Component, {
      data: this.ytData.filter(data => data.id1 === item.id)
    });
  }
  
}