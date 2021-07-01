import { Component, Input, OnInit } from '@angular/core';
import { Tutorship } from 'src/app/model/Tutorship';

@Component({
  selector: 'app-tutorship-icon',
  templateUrl: './tutorship-icon.component.html',
  styleUrls: ['./tutorship-icon.component.scss'],
})
export class TutorshipIconComponent implements OnInit {
  constructor() {}
  @Input() tutorship: Tutorship;
  ngOnInit(): void {}
}
