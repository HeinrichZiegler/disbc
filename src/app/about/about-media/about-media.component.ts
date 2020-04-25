import { Component, OnInit } from '@angular/core';
import { LoadGalerieService } from '../load-galerie.service';


@Component({
  selector: 'app-about-media',
  templateUrl: './about-media.component.html',
  styleUrls: ['./about-media.component.css']
})
export class AboutMediaComponent implements OnInit {
  public myFiles;
  public counter = 0;

  constructor(private loadGalerieService: LoadGalerieService) {
  }

  ngOnInit() {
    // listFiles('assets/images').then(files => {
    //   this.myFiles = files;
    // })
    this.loadGalerieService.getJSON().subscribe(data => {
      console.log(data);
      for (let g = 0; g < data.galleries.length; ++g) {
        for (let i = 0; i < data.galleries[g].files.length; ++i) {
          data.galleries[g].files[i].file = "assets/galleries/" + data.galleries[g].folder + "/" + data.galleries[g].files[i].file;
        }
      }
      this.myFiles = data;
    });
  }


}
