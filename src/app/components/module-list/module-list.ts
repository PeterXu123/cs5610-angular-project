import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from "../../services/CourseServiceClient";
import {ActivatedRoute, Params} from "@angular/router";
import {ModuleServiceClient} from "../../services/ModuleServiceClient";

@Component({
  selector: 'app-module-list-component',
  templateUrl: './module-list.html',
  styleUrls: ['./module-list.css']
})
export class ModuleListComponent implements OnInit {
  moduleList: any[];
  cid;
  mid:string =''
  constructor(private moduleService: ModuleServiceClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.cid = params['cid'];
      this.mid = params['mid'];
      console.log(this.cid)
      this.moduleService.findModulesForCourse(this.cid).subscribe((modules: any[]) => {
        console.log(this.cid)
        this.moduleList = modules
      })
    })





  }


}
