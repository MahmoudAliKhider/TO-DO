import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { Token } from '@angular/compiler';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email:String="";
password:String="";

  constructor( private userservice:UserService,private router:Router) { }

  ngOnInit(): void {
  }
  onLogin(){
    if(!this.email|| ! this.password){
      alert("your detalis not completed")

    }
   
   const user={
    email:this.email,
    password:this.password,
    
   }
   this.userservice.auth(user).subscribe(
   ( res:any)=>{
    if(!res.success){
      alert("email or password wrong")
    
    return false;    
    }else{
  
      this.userservice.saveUserData(res.token,user); 
      console.log(res)
      return this.router.navigate(['/main']);
      
    }

   })

  }

}
