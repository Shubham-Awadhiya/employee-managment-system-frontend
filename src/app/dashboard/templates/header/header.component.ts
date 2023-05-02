import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  id!: number;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  home(){
    this.router.navigate(['../view']);
  }
  view(){
    this.router.navigate(['../details/',this.id]);
  }
  logout(){
    this.router.navigate(['../login']);
  }
}
