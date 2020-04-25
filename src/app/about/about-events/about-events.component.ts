import { Component, OnInit } from '@angular/core';
import { LoadGalerieService } from '../load-galerie.service';
import { LoadEventsService } from '../load-events.service';

@Component({
  selector: 'app-about-events',
  templateUrl: './about-events.component.html',
  styleUrls: ['./about-events.component.css']
})
export class AboutEventsComponent implements OnInit {
  public myFiles;
  public counter = 0;

  constructor(private loadEventsService: LoadEventsService) {
  }

  ngOnInit() {
    // listFiles('assets/images').then(files => {
    //   this.myFiles = files;
    // })
    this.loadEventsService.getJSON().subscribe(data => {
      console.log(data);
      for (let g = 0; g < data.events.length; ++g) {
        for (let i = 0; i < data.events[g].files.length; ++i) {
          data.events[g].files[i].file = "assets/events/" + data.events[g].folder + "/" + data.events[g].files[i].file;
        }
      }
      this.myFiles = data;
    });
  }


}
