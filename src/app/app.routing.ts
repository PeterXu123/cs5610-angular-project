import {RouterModule, Routes} from "@angular/router";
import {CourseTableComponent} from "./components/course-table/course-table";
import {CourseViewerComponent} from "./components/course-viewer/course-viewer";

const appRouters: Routes = [
  { path: '',   redirectTo: 'table/courses', pathMatch: 'full' },
  {path: ':layout/courses', component: CourseTableComponent},
  {path: ':layout/courses/:cid', component: CourseViewerComponent},
  {path: ':layout/courses/:cid/modules/:mid', component: CourseViewerComponent,
    // children: [
    //   {path: ':mid/lessons', component: lesson-tabs},
    //   {path: ':mid/lessons/:lid', component: lesson-tabs}
    // ]

  },
  {path: ':layout/courses/:cid/modules/:mid/lessons/:lid', component: CourseViewerComponent
  },



];

export const routing = RouterModule.forRoot(appRouters)
