import { Component, OnInit } from '@angular/core';
import { LoadSermonService } from '../load-sermon.service';

@Component({
  selector: 'app-sermon-lists',
  templateUrl: './sermon-lists.component.html',
  styleUrls: ['./sermon-lists.component.css']
})
export class SermonListsComponent implements OnInit {

  detailSermonTitle = "";
  detailSermons = {};

  sermonList;


  constructor(private loadSermonService: LoadSermonService) {
  }

  ngOnInit() {
    // listFiles('assets/images').then(files => {
    //   this.myFiles = files;
    // })
    this.showAll();

  }


  showAll() {
    this.loadSermonService.getJSON().subscribe(data => {
      console.log(data);
      // reset details first
      this.detailSermonTitle = "";
      this.detailSermons = {};
      // then show main list
      for (let g = 0; g < data.motives.length; ++g) {
        data.motives[g].image = "assets/sermons/" +
          data.motives[g].folder + "/" + data.motives[g].image;
        for (let i = 0; i < data.motives[g].sermons.length; ++i) {
          data.motives[g].sermons[i].file = "assets/sermons/" +
            data.motives[g].folder + "/" + data.motives[g].sermons[i].file;
            if (localStorage.getItem(data.motives[g].sermons[i].title) === "1")
            {
              console.log("found " + data.motives[g].sermons[i].title);
              data.motives[g].sermons[i].played = "1";
            }
        }
      }
      this.sermonList = data.motives;
    });

  }

  showSermons(sermon) {
    console.log("Got click");
    this.detailSermonTitle = sermon.title;
    this.detailSermons = sermon.sermons;
    // set list ot single item
    this.sermonList = [sermon];

  }

  rememberMe(data) {
    console.log("I remember: " + data);
    localStorage.setItem(data, "1");
  }

}
