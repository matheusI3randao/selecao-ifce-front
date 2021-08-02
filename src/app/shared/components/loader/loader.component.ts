import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from './../../services/shared.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit, OnDestroy {
  public visible = false;
  private subscription: Subscription;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.subscription = this.sharedService.loader.subscribe(state => {
      this.visible = state;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
