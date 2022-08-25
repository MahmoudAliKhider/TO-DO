import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { TaskService } from '../../services/task.service';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
 name:string="";
 done:boolean=true;
 owner:string="";
  constructor(private userService:UserService, 
    private router:Router,
    private taskService:TaskService
    ) { }

  ngOnInit(): void {
    const user=this.userService.getCurrentUser();
   // console.log(user)
    this.owner=user.id;
    //console.log(this.owner)
    this.done=false;
  }
  onAddTask(){
  if(!this.name){
    alert("Task name is required")
   // return false
  }
  const task={
    name:this.name,
    owner:this.owner,
    done:this.done,
 
  }
  
  this.taskService.saveTask(task).subscribe(res=>{
   alert("Task Success")
   this.router.navigate(["/main"])
  })
  
  }

}
