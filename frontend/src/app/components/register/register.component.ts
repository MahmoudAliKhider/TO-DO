import { Component, OnInit } from '@angular/core';
import { FlashMessageModule } from 'jjwins-angular-12-flash-message';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 name :string ='';
 email : string='';
 password :string='';

  constructor() {
   
   }

  ngOnInit(): void {
  }
  onRegister(){
    if(!this.email|| !this.name||! this.password){
      console.log("Are Required");
      
    }
  }

}
