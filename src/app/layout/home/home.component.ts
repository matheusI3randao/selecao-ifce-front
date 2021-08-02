import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isCollapsed = false;

  constructor(private router: Router) {}

  navegar(url: string) {
    this.router.navigate([url]);
  }

  ngOnInit() {}
}
