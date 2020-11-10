import {Injectable} from "@angular/core";

import {BehaviorSubject, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: "root"})
export class CourseServiceClient {
  url: string;

  courses = new BehaviorSubject<any[]>([]);
  course = new Subject<any>();
  constructor(private http: HttpClient) {
    this.url = "https://wbdv-generic-server.herokuapp.com/api/kmx";
  }

  addCourse = () => {
    this.http.post(`${this.url}/courses`, {courseName: "test1"}).subscribe((course: any) => {

      this.courses.next([...this.courses.getValue(), course]);
    })
  }

  findAllCourses = () => {
    this.http.get(`${this.url}/courses`).subscribe((courses: any[]) => {
      console.log(123)
      this.courses.next(courses);
    })
  }
  findCourseById = (cid) => {
    return this.http.get(`${this.url}/courses/${cid}`);
  }

  findModulesForCourse = (cid) => {
    return this.http.get(`${this.url}/courses/${cid}/modules`);
  }

  findLessonsForModule = (mid) => {
    return this.http.get(`${this.url}/modules/${mid}/lessons`);
}








}
