import {Component} from '@angular/core';
import {Student} from "../../model/student";
import {MatTableDataSource} from "@angular/material/table";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-student-management',
  templateUrl: './student-management.component.html',
  styleUrls: ['./student-management.component.scss']
})
export class StudentManagementComponent {

  constructor(private _snackBar: MatSnackBar) {
  }

  students: Student[] = [
    {
      id: 1,
      nombre: 'Pedro',
      apellido: 'Perez',
      curso: 'Angular',
      correo: 'pperez@test.com',
      inicio: new Date(2023, 1, 1),
    },
    {
      id: 2,
      nombre: 'Carlos',
      apellido: 'Campins',
      curso: 'Vue',
      correo: 'ccampins@test.com',
      inicio: new Date(2023, 2, 2),
    },
    {
      id: 3,
      nombre: 'Roberto',
      apellido: 'Quero',
      curso: 'ReactJS',
      correo: 'rquero@test.com',
      inicio: new Date(),
    }
  ]

  dataSource: MatTableDataSource<Student> = new MatTableDataSource<Student>(this.students);
  displayedColumns: string[] = ['nombre', 'correo', 'curso', 'inicio', 'actions'];

  editStudent(element: Student) {
    this._snackBar.open('Editar Estudiante', '', {
      duration: 3000
    });
  }

  deleteStudent(id: number) {
    this._snackBar.open('Eliminar Estudiante', '', {
      duration: 3000
    });
  }
}
