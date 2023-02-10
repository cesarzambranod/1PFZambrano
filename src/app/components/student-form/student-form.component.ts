import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent {
  form: FormGroup;

  courses: string[] = [
    'Angular', 'Vue', 'Java', 'Expressjs', 'Golang', 'Reactjs'
  ]

  constructor(private formBuilder: FormBuilder, private _snackBar: MatSnackBar) {
    let emailRegex: string = '^[a-z]+@[a-z]+\\.[a-z]{2,3}$';

    this.form = formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(emailRegex)]],
      course: ['', Validators.required]
    })
  }

  addStudent() {
    this._snackBar.open('Alta exitosa de '
      + this.form.controls['email'].value, '', {
      duration: 3000
    });
  }
}
