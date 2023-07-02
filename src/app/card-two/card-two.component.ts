import { Component } from '@angular/core';

@Component({
  selector: 'app-card-two',
  templateUrl: './card-two.component.html',
  styleUrls: ['./card-two.component.css']
})
export class CardTwoComponent {
  currentMovie: any

  sendData(data: any) {
    this.movie = data;
  }


  movie = [

    { src: 'assets/n1.jpg', movieName: 'INSIDIOUS THE RED DOOR', type: 'ENGLISH | DRAMA' , date: 'Releasing on Fri Jul 07' },


    { src: 'assets/n2.jpg', movieName: 'VAR PADHARO SAVDHAN', type: 'GUJARATI | DRAMA' , date: 'Releasing on Fri Jul 07' },

    { src: 'assets/n3.jpg', movieName: 'NEEYAT', type: 'HINDI | DRAMA' , date: 'Releasing on Fri Jul 07' },


    { src: 'assets/n4.jpg', movieName: 'RANGABALI ', type: 'TELUGU | (U) | COMEDY' , date: 'Releasing on Fri Jul 07' },

    {
      src: 'assets/n5.jpg', movieName: 'THE FIRST SLAM DUNK', type: 'JAPANESE | ANIME'
    , date: 'Releasing on Fri Jul 07' },

    { src: 'assets/n6.jpg', movieName: 'PAST LIVES', type: 'ENGLISH | ROMANCE' , date: 'Releasing on Fri Jul 07' },

    {
      src: 'assets/n7.jpg', movieName: '72 HOORAIN', type: 'HINDI | CRIME'
    , date: 'Releasing on Fri Jul 07' },

    { src: 'assets/n8.jpg', movieName: 'O SAATHIYA', type: 'TELUGU | COMEDY' , date: 'Releasing on Fri Jul 07' },
  ]
}
