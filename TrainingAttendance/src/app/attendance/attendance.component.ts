import { Component, OnInit } from '@angular/core';
import { Employee, Attendees } from './attendance.model';
import { AngularFirestore } from 'angularfire2/firestore';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { DELEGATE_CTOR } from '@angular/core/src/reflection/reflection_capabilities';
@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {

  public emp: Employee = new Employee();
  employees: Employee[];
  attendees: Attendees[];
  firebaseDB: AngularFirestore;
  isPresent: boolean;
  constructor(private af: AngularFirestore) {

    this.firebaseDB = af;
  }

  ngOnInit() {
    this.Load();
  }

  Load() {
    debugger;
    this.firebaseDB.collection<Employee>("/employees").valueChanges().subscribe(data => {
      this.employees = data;
      console.log(data);
    });
    this.firebaseDB.collection<Attendees>("/attendees").valueChanges().subscribe(data => {
      this.attendees = data;
      console.log(data);
    });
  }

  Save(): void {
    let sDate = new Date().toLocaleDateString();
    let isExist: boolean = false;
    this.employees.forEach(emp => {

      this.firebaseDB.collection("/attendees", ref => ref.where('SessionDate', '==', sDate).where('Name', '==', emp.Name)).valueChanges().subscribe(res => {
        if (res.length > 0)
          isExist = true;
      });
      if (emp.IsPresent && !isExist) {
        let data = {
          "Name": emp.Name,
          "Course": emp.Course,
          "Email": emp.Email,
          "SessionDate": new Date().toLocaleDateString()
        };

        this.firebaseDB.collection("/attendees").add(data);

      }

    });


    this.Load();
  }
  RegisterEmployeeForCourse(): void {
    let data = {
      "Name": this.emp.Name,
      "Email": this.emp.Email,
      "Course": this.emp.Course
    };
    this.firebaseDB.collection("/employees").add(data);
    console.log(this.emp.Name);
  }

}
