import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'To-do list';

  tareas = [

    {
      'todo': 'leer'
    }
  ];


  model: any = {};
  addTodo(): void{

    this.tareas.push(this.model);
    this.model = {};
  }

  deleteTodo(): void{

  }

  editTodo(): void{


  }
}