import {RouterModule, Routes} from '@angular/router';
import {CourseTableComponent} from './components/course-table/course-table';
import {CourseViewerComponent} from './components/course-viewer/course-viewer';
import {LessonTabsComponent} from './components/lesson-tabs/lesson-tabs';
import {QuizzesComponent} from './components/quizzes/quizzes.component';
import {QuizComponent} from './components/quiz/quiz.component';

const appRouters: Routes = [
  { path: '',   redirectTo: 'table/courses', pathMatch: 'full' },
  {path: ':layout/courses', component: CourseTableComponent},
  {path: ':layout/courses/:cid', component: CourseViewerComponent, children: [
      {path: 'modules/:mid/lessons/:lid', component: LessonTabsComponent},
      {path: 'modules/:mid', component: LessonTabsComponent},
    ]},
  {path: 'courses/:courseId/quizzes', component: QuizzesComponent},
  { path: 'courses/:courseId/quizzes/:quizId',
    component: QuizComponent },


  // {path: ':layout/courses/:cid/modules/:mid', component: CourseViewerComponent,
  //
  //
  // },
  // {path: ':layout/courses/:cid/modules/:mid/lessons/:lid', component: CourseViewerComponent
  // },



];


// @ts-ignore
export const routing = RouterModule.forRoot(appRouters);
