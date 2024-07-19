import { Component, inject, OnInit} from '@angular/core';
import { TodoserviceService } from '../todoservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent implements OnInit {
  private todoserviceService = inject(TodoserviceService);
  items: any[] = [];
  // items = [
  //   {taskName: "Tooth Brush", isCompleted: false},
  //   {taskName: "Call", isCompleted: false},
  //   {taskName: "Birthday wish", isCompleted: false}
  // ]
  
  constructor(private router: Router)
  {
    
  }
  ngOnInit(): void {
    this.todoserviceService.selectedItems$.subscribe(items => {
      this.items = items;
    });
  }
  onDelete(i: number){
    //this.items = this.items.filter((item,index) => index !== i);
    this.items = this.items.slice(0, i).concat(this.items.slice(i + 1));
  }
  onCheckboxChange(i: number){
    //this.items[i].isCompleted = !this.items[i].isCompleted;
    this.items = this.items.filter((item,index) => index !== i);
  }
  onEdit(i: number){
    const item = this.items.filter((item,index) => index == i);
    this.todoserviceService.updateSharedObject(item);
    //this.router.navigate(['/todo-details']);
  }
}
