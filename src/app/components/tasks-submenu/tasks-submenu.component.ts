import { Component } from '@angular/core';
import { TasksMenuItem } from 'src/app/types/TasksMenuItem';

@Component({
  selector: 'app-tasks-submenu',
  templateUrl: './tasks-submenu.component.html',
  styleUrls: ['./tasks-submenu.component.scss']
})
export class TasksSubmenuComponent {
  items: TasksMenuItem [] = [
    {
      id: '1',
      name:'Ma journée',
      icone:'fa fa-sun-o'
    },
    {
      id: '2',
      name:'Important',
      icone:'fa fa-star'
    },
    {
      id: '3',
      name:'Planifié',
      icone:'fa fa-calendar-check-o'
    },    {
      id: '4',
      name:'Courrier avec indicateur',
      icone:'fa fa-flag'
    },    {
      id: '5',
      name:'Tâches',
      icone:'fa fa-home'
    },
  ]
}
