import {RouterModule, Routes} from "@angular/router";
import {CourseTableComponent} from "./components/course-table/course-table";
import {CourseViewerComponent} from "./components/course-viewer/course-viewer";

const appRouters: Routes = [
  { path: '',   redirectTo: 'table/courses', pathMatch: 'full' },
  {path: 'table/courses', component: CourseTableComponent},
  {path: 'table/courses/:cid', component: CourseViewerComponent},
  {path: 'table/courses/:cid/modules/:mid', component: CourseViewerComponent,
    // children: [
    //   {path: ':mid/lessons', component: lesson-tabs},
    //   {path: ':mid/lessons/:lid', component: lesson-tabs}
    // ]

  },
  {path: 'table/courses/:cid/modules/:mid/lessons/:lid', component: CourseViewerComponent
  },



];

export const routing = RouterModule.forRoot(appRouters)
