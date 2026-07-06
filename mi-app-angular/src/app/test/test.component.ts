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


  constructor() { }

  ngOnInit(): void {
  }

}
