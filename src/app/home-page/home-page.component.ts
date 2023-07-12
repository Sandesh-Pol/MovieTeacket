import { Component } from '@angular/core';
import { DataSupplyService } from '../sercice/data-supply.service';

interface Genre {
  value: string;
  viewValue: string;
}
interface Format{
  value: string;
  viewValue: string;
}
interface Language{
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  selectedLanguage : any;
  selectedFormat : any;
  selectedGenre : any;
  constructor(private movieService : DataSupplyService){}
  genres: Genre[] = [
    {value: 'all-0', viewValue: 'ALL GENRES'},
    {value: 'action-1', viewValue: 'ACTION'},
    {value: 'animation-2', viewValue: 'ANIMATION'},
    {value: 'comedy-3', viewValue: 'COMEDY'},
    {value: 'drama-4', viewValue: 'DRAMA'},
    {value: 'horror-5', viewValue: 'HORROR'},
    {value: 'romance-6', viewValue: 'ROMANCE'},
  ];
  formats: Format[] = [
    {value: 'all-0', viewValue: 'ALL FORMATS'},
    {value: '2d-2', viewValue: '2D'},
    {value: '3d-3', viewValue: '3D'},
  ];
  languages: Language[] = [
    {value: 'all-0', viewValue: 'ALL LANGUAGE'},
    {value: 'english-1', viewValue: 'ENGLISH'},
    {value: 'hindi-2', viewValue: 'HINDI'},
    {value: 'japanse-3', viewValue: 'JAPANESE'},
    {value: 'panjabi-4', viewValue: 'PANJABI'},
    {value: 'telugu-5', viewValue: 'TELUGU'},
  ];

  currentSlide: any

  sendData(data: any) {
    this.slide = data;
  }


  slide = [

    { src: 'assets/Filmy_Pass.jpg'},

    { src: 'assets/Adipurush.jpg'},
    
    { src: 'assets/No_Hard.jpg'},

    { src: 'assets/sl1.jpg'},

    { src: 'assets/sl2.jpg'},

    { src: 'assets/sl3.jpg'},

    { src: 'assets/sl4.jpg'},

    { src: 'assets/sl5.jpg'}
  ]

  someMethod1(id:any){
    this.movieService.genarateDinamicData1(this.selectedGenre);
  }
  someMethod2(format:any){
    this.movieService.genarateDinamicData2(this.selectedFormat);
  }
  someMethod3(language:any){
    this.movieService.genarateDinamicData3(this.selectedLanguage);
  }


}
