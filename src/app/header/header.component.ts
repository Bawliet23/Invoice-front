import {Component, OnInit, ViewChild} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../services/auth.service';
import {delay, filter} from "rxjs/operators";
import {NavigationEnd, Router} from "@angular/router";



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //isFixedNavbar;

  // LoginStatus$!: new () => BehaviorSubject<boolean>(null);

  ngOnInit() {
  }



  constructor(protected authService: AuthService) {

  }

    toggleNavbar() : void {}

  }


