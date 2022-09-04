import { Component, OnInit } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //isFixedNavbar;

  // LoginStatus$!: new () => BehaviorSubject<boolean>(null);



  constructor(protected authService : AuthService,) { 

  }

  ngOnInit(): void {
  }

  toggleNavbar(): void {

  }

}


