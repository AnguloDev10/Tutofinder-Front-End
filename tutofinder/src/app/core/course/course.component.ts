import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateCourseComponent } from './create-course/create-course.component';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}
  createCourse() {
    this.dialog.open(CreateCourseComponent, {});
  }
}
