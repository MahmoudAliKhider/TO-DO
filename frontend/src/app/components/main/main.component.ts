import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { TaskService } from '../../services/task.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
 
  tasks:any
  constructor(private userService:UserService, 
    private router:Router,
    private taskService:TaskService) { }

  ngOnInit(): void {
   this.Taskes()
  }
  editTask(id:any){
  console.log(id)
  }
  deleteTask(id:any){
   this.taskService.deleteTask(id).subscribe((res:any)=>{
    if(!res.success){
      alert(res.message)
    }else{
      this.Taskes();
      alert("Task Deleted")
    }
    this.router.navigate(['/main'])
   })
  }
  private Taskes(){
    const currentUser= this.userService.getCurrentUser();
    const query = {owner:currentUser.id};
    this.taskService.getTask(query).subscribe((res:any)=>{
      this.tasks=res.tasks;
      
    })
  }

}
