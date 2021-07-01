import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentService } from 'src/services/student.service';
import { CreateStudentComponent } from './create-student/create-student.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private studentService: StudentService
  ) {}

  Students = [];
  ngOnInit(): void {
    this.initialize();
  }

  initialize() {
    this.studentService.getAllStudents().subscribe((response: any) => {
      this.Students = response;
    });
  }

  createStudent() {
    this.dialog
      .open(CreateStudentComponent, {})
      .afterClosed()
      .subscribe((response) => {});
  }
  updateStudent(student) {
    this.dialog
      .open(CreateStudentComponent, {
        data: student,
      })
      .afterClosed()
      .subscribe((response) => {
        this.studentService.getAllStudents().subscribe((response: any) => {
          this.initialize();
        });
      });
  }
}
