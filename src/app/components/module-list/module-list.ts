import {Component, OnInit} from '@angular/core';
import {CourseServiceClient} from '../../services/CourseServiceClient';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ModuleServiceClient} from '../../services/ModuleServiceClient';

@Component({
  selector: 'app-module-list-component',
  templateUrl: './module-list.html',
  styleUrls: ['./module-list.css']
})
export class ModuleListComponent implements OnInit {
  moduleList: any[];
  cid;
  mid: string = '';

  constructor(private moduleService: ModuleServiceClient, private route: ActivatedRoute, private router: Router) {
  }

  print = (mid) => {
    console.log(mid);
    console.log(this.mid);
    console.log(this.mid === mid);
  };

  ngOnInit(): void {
    this.router.events.subscribe((e: any) => {
      if (e.snapshot !== undefined) {
        if (e.snapshot.params.mid !== undefined) {
          this.mid = e.snapshot.params.mid;
        }
      }

    });
    if (this.route.firstChild !== null && this.route.firstChild !== undefined) {
      console.log(123456);
      this.route.firstChild.params.subscribe((params: Params) => {
        this.mid = params.mid;
      });
    }

    this.route.params.subscribe((params: Params) => {
      this.cid = params.cid;

      this.moduleService.findModulesForCourse(this.cid).subscribe((modules: any[]) => {
        this.moduleList = modules;
      });
    });


  }


}
