import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TasksViewComponent } from './components/tasks-view/tasks-view.component';
import { TasksSubmenuComponent } from './components/tasks-submenu/tasks-submenu.component';
import { TasksDetailsComponent } from './components/tasks-details/tasks-details.component';
import { LayoutsComponent } from './layouts/layouts.component';
@NgModule({
  declarations: [
    AppComponent,
    TasksViewComponent,
    TasksSubmenuComponent,
    TasksDetailsComponent,
    LayoutsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
