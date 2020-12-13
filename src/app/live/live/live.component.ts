import { Component, OnInit } from '@angular/core';
import { LoadLiveService } from '../load-live.service';
import { DomSanitizer } from '@angular/platform-browser';
import {Router} from '@angular/router'; // import router from angular router

@Component({
  selector: 'app-',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit {
  public liveEvents;
  public liveTitle;
  public youtubeUrl = "https://www.youtube.com/watch?v=2dZT9GShJ3A&t=190s";
  public youtubeId: String; // = "nLhsCutSrag";
  public embedUrl = "https://www.youtube.com/embed/";
  public videoEventsForDisplay = new Array();

  videoUrl: string;

  constructor(private loadSermonService: LoadLiveService,
    private router:Router) { 
    this.videoUrl =  this.embedUrl + this.youtubeId;
  }

  ngOnInit() {
    this.loadSermonService.getJSON().subscribe(data => {
      console.log(data);
     for (let g = 0; g < 1; ++g) {  // just read out the first (hopefully the latest event)
        this.youtubeId = data.liveEvents[g].liveStreamId
        this.videoUrl =  this.embedUrl + this.youtubeId;
        this.liveTitle = data.liveEvents[g].title;
       }
      this.liveEvents = data.liveEvents;

      // now restructure data
      console.log("Before conversion");
      for (let g = 0; g < data.liveEvents.length; ++g) { 
        if (g%3 === 0){
          this.videoEventsForDisplay.push(new Array());
        }
        this.videoEventsForDisplay[Math.floor(g/3)].push(data.liveEvents[g]);
      }
      console.log("After conversion");
      console.log(this.videoEventsForDisplay);
    });
  }

  showVideo(levent) {
        this.youtubeId = levent.liveStreamId
        this.videoUrl =  this.embedUrl + this.youtubeId;
        this.liveTitle = levent.title;
  }

  gotoXmas() {
    this.router.navigate(['/christmas']);
  }

}
