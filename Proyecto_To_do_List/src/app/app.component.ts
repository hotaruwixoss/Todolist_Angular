import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent{


  title = 'To-do list';

  XFull = [ 
 
    { 
      'todo': 'xx' 
    } 
  ]; 
   
 
  tareas = [ 
 
    { 
      'todo': 'Correr' 
    } 
  ]; 
 
  CopiaTareas = [ 
 
    { 
      'todo': '' 
    } 
  ]; 
 
   
   
  model: any = {}; 
  model2: any = {}; 
  
 
  searchTodo(): void{ 
 
    let b = ''; 
    b = this.model.todo; 
    
    if(b == ''){ 
 
    this.tareas = this.XFull 
   }else{ 
 
    this.CopiaTareas = []; 
     
    for(let x of this.tareas){ 
      if(x.todo.indexOf(b) != -1){    
       this.CopiaTareas.push(x)  
 
      } 
       
    } 
  } 
  this.XFull = this.tareas.slice(); 
    this.tareas = this.CopiaTareas; 
    this.model = {}; 
   
  }
  addTodo(): void{

    this.tareas.push(this.model);
    this.model = {};
  }

  deleteTodo(index: number): void{
    if(index > -1){
      this.tareas.splice(index,1)
    }
  }
  myValue = 0;
  editTodo(i: number): void{
    this.model2.todo = this.tareas[i].todo;
    this.myValue = i;
   
  }

  updateTodo(): void{
    let i = this.myValue;
    for (let j = 0; j < this.tareas.length; j++) {
      if(i == j){
        this.tareas[i] = this.model2;
        this.model2 = {};
      }
   
      }
    }

      
    }
