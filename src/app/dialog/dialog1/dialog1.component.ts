import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-dialog1',
  templateUrl: './dialog1.component.html',
  styleUrls: ['./dialog1.component.css']
})
export class Dialog1Component {
    constructor(private sanitizer: DomSanitizer){}
  
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
  getYoutubeEmbedUrl(link: string): SafeResourceUrl {
    
    return this.sanitizer.bypassSecurityTrustResourceUrl(link);
  }
}
