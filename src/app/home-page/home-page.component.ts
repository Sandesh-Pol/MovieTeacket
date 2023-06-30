import { Component } from '@angular/core';
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
    {value: 'imax-1', viewValue: 'IMAX'},
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
}
