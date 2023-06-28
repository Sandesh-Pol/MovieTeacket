import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  constructor() { }

  currentMovie: any

  sendData(data: any) {
    this.movie = data;
  }


  movie = [

    { src: 'assets/img1.jpg', movieName: 'Satyaprem Ki Katha', type: 'HINDI | (U/A) | DRAMA' },


    { src: 'assets/img2.jpg', movieName: 'Carry on Jatta 3', type: 'PUNJABI | (U/A) | DRAMA' },

    { src: 'assets/img3.jpg', movieName: 'INDIANA JONES AND THE DIAL OF DESTINY', type: 'ENGLISH | HINDI | (U/A) | ACTION' },


    { src: 'assets/img4.jpg', movieName: 'ADIPURUSH ', type: 'HINDI | (U) | ROMANCE' },

    {
      src: 'assets/img5.jpg', movieName: 'ZARA HATKE ZARA BACHKE', type: 'HINDI | (U/A) | ROMANCE'
    },

    { src: 'assets/img6.jpg', movieName: 'THE FLASH', type: 'ENGLISH | HINDI | (U/A) | ACTION' },

    {
      src: 'assets/img7.jpg', movieName: '1920 HORRORS OF THE HEART', type: 'HINDI | (A) | HORROR'
    },

    { src: 'assets/img8.jpg', movieName: 'ELEMENTAL', type: 'ENGLISH | HINDI | (U/A) | ANIMATION' },
  ]
}