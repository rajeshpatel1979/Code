import { Component,inject, OnInit } from '@angular/core';
import { TodoserviceService } from '../todoservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrl: './todo-details.component.scss'
})
export class TodoDetailsComponent implements OnInit{
  item = {task: "", isCompleted:false};
  items: any[] = [];
  task:string = '';
  isCompleted: boolean = false;  

  private todoserviceService = inject(TodoserviceService);
  constructor(private router: Router)
  {

  }
  ngOnInit(): void {
    this.todoserviceService.sharedObject$.subscribe(items => {
      if(items !== null)
      {
        this.task = items[0].task;
        this.isCompleted = items[0].isCompleted;
      }
    });
  }

  onSubmit(n: any){
    //this.items.push(n.value);
    const item = {task: n.task, isCompleted:n.isCompleted};
    this.items.push(item);
    this.todoserviceService.setSelectedItems(this.items);
    this.task= "";
    this.isCompleted = false; 
    //this.router.navigate(['/todo-list']);
  }

}
