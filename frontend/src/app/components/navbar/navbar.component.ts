import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public userservice:UserService, private router:Router) { }

  ngOnInit(): void {
  }
  onLoggedOut(){
    this.userservice.logout();
    this.router.navigate(['/login'])
  }

}
