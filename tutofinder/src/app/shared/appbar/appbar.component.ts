import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, ActivationStart } from '@angular/router';
import {
  Router,
  NavigationStart,
  Event as NavigationEvent,
} from '@angular/router';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.scss'],
})
export class AppbarComponent implements OnInit {
  @Output() onLeftSideBarActivator: EventEmitter<boolean> = new EventEmitter();

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  visibility = true;
  ngOnInit(): void {
    this.router.events.subscribe((event: NavigationEvent) => {
      if (event instanceof ActivationStart) {
        if (event.snapshot.data.appbar != null) {
          this.visibility = event.snapshot.data.appbar;
        }
      }
    });
  }

  showToolbar(event) {
    if (event === false) {
      this.visibility = false;
    } else if (event === true) {
      this.visibility = true;
    } else {
      this.visibility = this.visibility;
    }
  }

  activeLeftSideNav() {
    this.onLeftSideBarActivator.emit();
  }
}
