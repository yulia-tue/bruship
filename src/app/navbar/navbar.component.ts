import {Component, OnInit} from '@angular/core';
import {AuthService} from '../shared/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
