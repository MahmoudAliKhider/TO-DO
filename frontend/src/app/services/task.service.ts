import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor( private HTTP:HttpClient) { }

  saveTask(task:any){
    const token = localStorage.getItem("AuthToken")
    //console.log(token)
    const headers= new HttpHeaders().set('Authorization', 'Bearer ' + token)
    //headers.append('Authorized',`Bearer ${token}`)
   return this.HTTP.post("http://localhost:3000/task/add",task,{headers:headers})
  }

  getTask(query:any){
    const token = localStorage.getItem("AuthToken")
   // console.log(token)
    const headers= new HttpHeaders().set('Authorization', 'Bearer ' + token)
    return this.HTTP.post("http://localhost:3000/task/list",query,{headers})

  }
  deleteTask(id:any){
    const token = localStorage.getItem("AuthToken")
   // console.log(token)
    const headers= new HttpHeaders().set('Authorization', 'Bearer ' + token)
    const url = (`http://localhost:3000/task/remove/${id}`);
    return this.HTTP.delete(url,{headers})
  }
}
//http://localhost:3000/