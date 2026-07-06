import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  tasks: Task[] = [
    {
      id: 1,
      title: 'Task 1',
      status: 'pending',
      priority: 'medium'
    },
    {
      id: 2,
      title: 'Task 2',
      status: 'completed',
      priority: 'high'
    },
    {
      id: 3,
      title: 'Task 3',
      status: 'in progress',
      priority: 'low'
    }

    

  ];
  taskInit :Task [] = this.tasks;

  limpiarTareas() {
    this.tasks = [];
  }

  restaurarTareas() {
    this.tasks = this.taskInit;
  }

  getPriorityColor(priority: string) {
    switch (priority) {
      case 'high':
        return 'red';
      case 'medium':
        return 'yellow';
      case 'low':
        return 'green';
      default:
        return 'gray';
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
