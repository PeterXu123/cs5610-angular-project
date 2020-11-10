import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from "../../services/CourseServiceClient";
import {ActivatedRoute, Params} from "@angular/router";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-course-viewer-component',
  templateUrl: './course-viewer.html',
  styleUrls: ['./course-viewer.css']
})
export class CourseViewerComponent implements OnInit {
  course: string
  cid: string;
  mid: string;
  faTimes = faTimes;
  constructor(private courseService: CourseServiceClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.cid = params['cid'];
      this.mid = params['mid'];
      console.log(this.mid)
    })
    this.courseService.findCourseById(this.cid).subscribe((data: any) => {
      this.course = data.title;
    })
    console.log(this.mid)
  }

}
