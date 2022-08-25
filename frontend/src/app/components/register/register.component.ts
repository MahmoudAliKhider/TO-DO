import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
//import { FlashMessageModule } from 'jjwins-angular-12-flash-message';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 name :string ='';
 email : string='';
 password :string='';

  constructor( private userservice:UserService , private router:Router) {
   
   }

  ngOnInit(): void {
  }
  onRegister(){
    if(!this.email|| !this.name||! this.password){
     alert("your detalis not completed")
      
    }
    const user={
     name:this.name,
     email:this.email,
     password:this.password
    }
    this.userservice.createAccount(user).subscribe(
      res=>{
       alert("Success")
       return this.router.navigate(['/login'])
      }
    
    )
  }

}
