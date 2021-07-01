import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Course } from 'src/app/model/Course';
import { CourseService } from 'src/services/course.service';
import { CreateCourseComponent } from './create-course/create-course.component';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private courseService: CourseService
  ) {}

  Courses: [Course];
  ngOnInit(): void {
    this.initialize();
  }

  initialize() {
    this.courseService.getAllCourses().subscribe((response: any) => {
      this.Courses = response;
    });
  }
  createCourse() {
    this.dialog
      .open(CreateCourseComponent, {})
      .afterClosed()
      .subscribe((response) => {
        this.courseService.getAllCourses().subscribe((response: any) => {
          this.initialize();
        });
      });
  }
  updateCourse(course) {
    this.dialog
      .open(CreateCourseComponent, {
        data: course,
      })
      .afterClosed()
      .subscribe((response) => {
        this.courseService.getAllCourses().subscribe((response: any) => {
          this.initialize();
        });
      });
  }
}
