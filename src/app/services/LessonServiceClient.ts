import {Injectable} from "@angular/core";

import {BehaviorSubject, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: "root"})
export class LessonServiceClient {
  url: string;

  constructor(private http: HttpClient) {
    this.url = "https://wbdv-generic-server.herokuapp.com/api/kmx";
  }


  findLessonsForModule = (mid) => {
    return this.http.get(`${this.url}/modules/${mid}/lessons`);
  }








}
