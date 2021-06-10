import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-left-side-nav',
  templateUrl: './left-side-nav.component.html',
  styleUrls: ['./left-side-nav.component.scss'],
})
export class LeftSideNavComponent implements OnInit {
  constructor() {}
  @Output() closeSideNav: EventEmitter<boolean> = new EventEmitter(false);

  ngOnInit(): void {}
}
