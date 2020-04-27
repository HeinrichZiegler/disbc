import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadLiveService } from '../../load-live.service';

@Component({
  selector: 'app-live-play',
  templateUrl: './live-play.component.html',
  styleUrls: ['./live-play.component.css']
})
export class LivePlayComponent implements OnInit {
  public liveEvents;
  public liveTitle = "Test";
  public counter = 0;
  public youtubeUrl = "https://www.youtube.com/watch?v=2dZT9GShJ3A&t=190s";
  public embedUrl = "https://www.youtube.com/embed/";

  videoUrl: string;
  public allData;

  videoId = -1;

  constructor(private route: ActivatedRoute,
    private loadSermonService: LoadLiveService) {
    // this.videoUrl = this.embedUrl + this.youtubeId;
  }


  ngOnInit(): void {
    this.videoId = this.route.snapshot.params['id'];
    this.videoUrl = this.embedUrl + this.videoId;

    this.loadSermonService.getJSON().subscribe(data => {
      // console.log(data);
      for (let g = 0; g < data.liveEvents.length; ++g) {  // just read out the first (hopefully the latest event)
        if (data.liveEvents[g].liveStreamId === this.videoId) {
          // this.videoUrl = this.embedUrl + this.youtubeId;
          this.liveTitle = data.liveEvents[g].title;
        }
      }
    });
  }

}
