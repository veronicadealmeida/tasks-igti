import { TasksService } from './../tasks.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { Tasks } from '../tasks';
import { StatusEnum } from '../status';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  task: Task[] = [];
  displayedColumns: string[] = [
    'status',
    'title',
    'description',
    'dateLimit',
    'dateDone',
    'actions',
  ];

  resultsLength: number = 0;

  taskStatus = StatusEnum;

  getStatus(status: number): string {
    if (status === this.taskStatus.Done) {
      return 'Concluída';
    }

    if (status === this.taskStatus.Pendent) {
      return 'Pendente';
    }

    if (status === this.taskStatus.Canceled) {
      return 'Cancelada';
    }

    return '';
  }

  delete(id: number): void {
    this.tasksService.deleteTask(id).subscribe((id) => {
      this.loadTasks();
    });
  }

  update(): void {}

  loadTasks(): void {
    this.tasksService.listTasks().subscribe((tasks) => {
      this.tasks = tasks.items;
      this.resultsLength = this.tasks.length;
      this.router.navigate(['/tasks']);
    });
  }

  constructor(private tasksService: TasksService, private router: Router) {}

  ngOnInit(): void {
    this.loadTasks();
    // console.log(this.tasks);
  }
}
