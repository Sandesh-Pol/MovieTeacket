import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSupplyService {
 
  constructor() { }
  
  sendData(data: any) {
    this.currentMovie = data;
  }

  currentMovie = [

    { src: 'assets/img1.jpg', movieName: 'Satyaprem Ki Katha', type: 'HINDI | (U/A) | DRAMA' },


    { src: 'assets/img2.jpg', movieName: 'Carry on Jatta 3', type: 'PUNJABI | (U/A) | DRAMA' },

    { src: 'assets/img3.jpg', movieName: 'INDIANA JONES PART 4', type: 'ENGLISH | HINDI | (U/A) | ACTION' },


    { src: 'assets/img4.jpg', movieName: 'ADIPURUSH ', type: 'HINDI | (U) | ACTION' },

    {
      src: 'assets/img5.jpg', movieName: 'ZARA HATKE ZARA BACHKE', type: 'HINDI | (U/A) | ROMANCE'
    },

    { src: 'assets/img6.jpg', movieName: 'THE FLASH', type: 'ENGLISH | HINDI | (U/A) | ACTION' },

    {
      src: 'assets/img7.jpg', movieName: '1920 HORRORS', type: 'HINDI | (A) | HORROR'
    },

    { src: 'assets/img8.jpg', movieName: 'ELEMENTAL', type: 'ENGLISH | HINDI | (U/A) | ANIMATION' },
  ]

  sendData1(data: any) {
    this.currentMovie = data;
  }

  upcomingMovie = [

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
