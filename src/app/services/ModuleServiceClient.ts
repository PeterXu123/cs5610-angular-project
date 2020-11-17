import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})

export class ModuleServiceClient {
  url: string;


  constructor(private http: HttpClient) {
    this.url = 'https://wbdv-generic-server.herokuapp.com/api/kmx';
  }


  findModulesForCourse = (cid) => {
    return this.http.get(`${this.url}/courses/${cid}/modules`);
  }








}
