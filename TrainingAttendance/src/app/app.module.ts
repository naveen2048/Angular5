import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AttendanceComponent } from './attendance/attendance.component';
import {AngularFireModule  } from 'angularfire2'
import { AngularFireDatabaseModule  } from 'angularfire2/database';
import {environment  } from '../environments/environment';
import {AngularFirestoreModule,AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
//import { AngularFireAuth } from 'angularfire2/auth';
@NgModule({
  declarations: [
    AppComponent,
    AttendanceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'trainingattendance-2f535'),
   //
    AngularFireDatabaseModule,
   // AngularFireAuthModule,
    AngularFirestoreModule     
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
