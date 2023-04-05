import { Component } from '@angular/core';
import { TasksMenuItem } from 'src/app/types/TasksMenuItem';

@Component({
  selector: 'app-tasks-details',
  templateUrl: './tasks-details.component.html',
  styleUrls: ['./tasks-details.component.scss']
})
export class TasksDetailsComponent {
  rappelItems: TasksMenuItem [] = [
    {
      id: '01',
      name: 'Rappel',
      icone: 'fa fa-bell'
    },
    {
      id: '02',
      name: "Ajouter une date d'échéance",
      icone: 'fa fa-calendar'
    },
    {
      id: '03',
      name: 'Répéter',
      icone: 'fa fa-refresh'
    }
  ]
}
