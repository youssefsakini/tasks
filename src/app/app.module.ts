import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TasksViewComponent } from './pages/tasks-view/tasks-view.component';
import { TasksSubmenuComponent } from './pages/tasks-submenu/tasks-submenu.component';
import { TasksDetailsComponent } from './pages/tasks-details/tasks-details.component';
@NgModule({
  declarations: [
    AppComponent,
    TasksViewComponent,
    TasksSubmenuComponent,
    TasksDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
