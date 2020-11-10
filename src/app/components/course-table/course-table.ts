import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from "../../services/CourseServiceClient";
import { faFile } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-course-table-component',
  templateUrl: './course-table.html',
  styleUrls: ['./course-table.css']
})
export class CourseTableComponent implements OnInit {
  courses: any[];
  fafile = faFile;
  constructor(private courseService: CourseServiceClient) { }

  ngOnInit(): void {

    this.courseService.courses.subscribe((courses) => {
      this.courses = courses;
    })
    this.courseService.findAllCourses();

  }

  onTest = () => {
    this.courseService.addCourse();
  }

}
