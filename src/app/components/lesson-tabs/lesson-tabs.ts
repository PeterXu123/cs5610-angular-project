import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {LessonServiceClient} from '../../services/LessonServiceClient';

@Component({
  selector: 'app-lesson-tabs-component',
  templateUrl: './lesson-tabs.html',
  styleUrls: ['./lesson-tabs.css']
})
export class LessonTabsComponent implements OnInit {
  mid = '';
  lid = '';
  cid = '';
  lessons: any[];
  spin = false;
  constructor(private route: ActivatedRoute, private lessonService: LessonServiceClient) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.mid = params.mid;
      this.lid = params.lid;
      // this.cid = params['cid'];
      this.route.parent.params.subscribe((params: Params) => {
        this.cid = params.cid;
      });
      if (this.mid !== '' && this.mid !== undefined) {
        // this.spin = true;
        this.lessonService.findLessonsForModule(this.mid).subscribe((lessons: any[]) => {
          // this.spin = false;
          this.lessons = lessons;
        });
      }
    });


  }

}
