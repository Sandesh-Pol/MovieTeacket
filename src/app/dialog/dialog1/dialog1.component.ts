import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog1',
  templateUrl: './dialog1.component.html',
  styleUrls: ['./dialog1.component.css']
})
export class Dialog1Component {
    constructor(@Inject(MAT_DIALOG_DATA) public data: any,private sanitizer: DomSanitizer){
        console.log(data,"Rasponse");
    }

    
  getYoutubeEmbedUrl(link: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(link);
  }
}
