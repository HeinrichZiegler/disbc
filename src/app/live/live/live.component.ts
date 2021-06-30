import { Component, OnInit } from '@angular/core';
import { LoadLiveService } from '../load-live.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router'; // import router from angular router

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
  public group: string;

  videoUrl: string;

  constructor(private route: ActivatedRoute, private loadSermonService: LoadLiveService,
    private router: Router) {
    this.videoUrl = this.embedUrl + this.youtubeId;
  }

  ngOnInit() {
    this.group = this.route.snapshot.params['group'];
    console.log("group=", this.group);

    this.loadSermonService.getJSON().subscribe(data => {
      console.log(data);
      for (let g = 0; g < 1; ++g) {  // just read out the first (hopefully the latest event)
        this.youtubeId = data.liveEvents[g].liveStreamId
        this.videoUrl = this.embedUrl + this.youtubeId;
        this.liveTitle = data.liveEvents[g].title;
      }
      //this.liveEvents = data.liveEvents;

      // filter only data with relevant group
      this.liveEvents = data.liveEvents.filter(event => event.group === this.group);

      // now restructure data
      console.log("Before conversion");
      for (let g = 0; g < this.liveEvents.length; ++g) {
        if (g % 3 === 0) {
          this.videoEventsForDisplay.push(new Array());
        }
        this.videoEventsForDisplay[Math.floor(g / 3)].push(this.liveEvents[g]);
      }
      console.log("After conversion");
      console.log("Display",this.videoEventsForDisplay);
      console.log("Filteres: ", this.liveEvents);
    });
  }

   gotoXmas() {
    this.router.navigate(['/christmas']);
  }

}
