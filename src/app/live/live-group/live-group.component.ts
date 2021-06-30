import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadLiveService } from '../load-live.service';

@Component({
  selector: 'app-live-group',
  templateUrl: './live-group.component.html',
  styleUrls: ['./live-group.component.css']
})
export class LiveGroupComponent implements OnInit {
  public liveEvents;
  public liveTitle;
  public youtubeUrl = "https://www.youtube.com/watch?v=2dZT9GShJ3A&t=190s";
  public youtubeId: String; // = "nLhsCutSrag";
  public embedUrl = "https://www.youtube.com/embed/";
  public groupsForDisplay = new Array();
  public groups: string[] = [];

  videoUrl: string;

  constructor(private loadSermonService: LoadLiveService,
    private router: Router) {
    this.videoUrl = this.embedUrl + this.youtubeId;
  }
  ngOnInit(): void {
    this.loadSermonService.getJSON().subscribe(data => {
      console.log(data);
      for (let g = 0; g < 1; ++g) {  // just read out the first (hopefully the latest event)
        this.youtubeId = data.liveEvents[g].liveStreamId
        this.videoUrl = this.embedUrl + this.youtubeId;
        this.liveTitle = data.liveEvents[g].title;
      }
      this.liveEvents = data.liveEvents;

      // now restructure data
      console.log("Before conversion");
      for (let g = 0; g < data.liveEvents.length; ++g) {

        if(!this.groups.find(e => e === data.liveEvents[g].group)) {
          this.groups.push(data.liveEvents[g].group)
        }  

      }
      for (let g = 0; g < this.groups.length; ++g) {
        if (g % 3 === 0) {
          this.groupsForDisplay.push(new Array());
        }
        this.groupsForDisplay[Math.floor(g / 3)].push(this.groups[g]);
      }
      console.log("After conversion");
      console.log(this.groups);
    });
  }



  
}
