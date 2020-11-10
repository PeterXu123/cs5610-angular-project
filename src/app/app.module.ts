import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CourseTableComponent} from './components/course-table/course-table';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {CourseViewerComponent} from './components/course-viewer/course-viewer';
import {ModuleListComponent} from './components/module-list/module-list';
import {LessonTabsComponent} from './components/lesson-tabs/lesson-tabs';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {routing} from "./app.routing";



@NgModule({
  declarations: [
    AppComponent,
    CourseTableComponent,
    CourseViewerComponent,
    ModuleListComponent,
    LessonTabsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    routing

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
