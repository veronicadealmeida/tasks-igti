import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from '../tasks.service';
import { TaskListComponent } from '../task-list/task-list.component';
import { StatusEnum } from '../status';

@Component({
  selector: 'app-task-update',
  templateUrl: './task-update.component.html',
  styleUrls: ['./task-update.component.css'],
})
export class TaskUpdateComponent implements OnInit {
  id: number = 0;
  taskFormGroup = new FormGroup({
    status: new FormControl(''),
    title: new FormControl('', Validators.required),
    description: new FormControl(''),
    category: new FormControl(''),
    dateLimit: new FormControl(new Date()),
    dateDone: new FormControl(new Date()),
  });

  constructor(
    private tasksService: TasksService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private taskListComponent: TaskListComponent
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.id = parseInt(paramMap.get('id') || '');

      this.tasksService.retrieveTask(this.id).subscribe((task) => {
        this.taskFormGroup.reset(task);
      });
    });
  }

  updateTask() {
    // console.log('updtade');

    this.tasksService
      .updateTask({ id: this.id, ...this.taskFormGroup.value })
      .subscribe((task) => {
        this.taskFormGroup.reset(task);
      });
    // console.log('fim do update');
    this.taskListComponent.loadTasks();
  }

  taskStatus = StatusEnum;
}
