import { Component, OnInit } from '@angular/core';
import { LoadLiveService } from '../load-live.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit {
  public liveEvents;
  public liveTitle;
  public counter = 0;
  public youtubeUrl = "https://www.youtube.com/watch?v=2dZT9GShJ3A&t=190s";
  public youtubeId: String; // = "nLhsCutSrag";
  public embedUrl = "https://www.youtube.com/embed/";

  videoUrl: string;

  constructor(private loadSermonService: LoadLiveService) { 
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
    });
  }

  showVideo(levent) {
        this.youtubeId = levent.liveStreamId
        this.videoUrl =  this.embedUrl + this.youtubeId;
        this.liveTitle = levent.title;
  }

}
