import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {LessonServiceClient} from "../../services/LessonServiceClient";

@Component({
  selector: 'app-lesson-tabs-component',
  templateUrl: './lesson-tabs.html',
  styleUrls: ['./lesson-tabs.css']
})
export class LessonTabsComponent implements OnInit {
  mid:string = '';
  lid: string = '';
  cid: string = ''
  lessons: any[];
  constructor(private route: ActivatedRoute, private lessonService: LessonServiceClient) { }

  ngOnInit(): void {
    this.lessons = []
    this.route.params.subscribe((params: Params) => {
      this.mid = params['mid'];
      this.lid = params['lid'];
      this.cid = params['cid'];
      console.log(this.mid)
      if (this.mid != '' && this.mid != undefined) {
        this.lessonService.findLessonsForModule(this.mid).subscribe((lessons: any[]) => {
          this.lessons = lessons;
        })
      }
    })


  }

}
