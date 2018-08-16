import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import  {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AttendanceComponent } from './attendance/attendance.component';
import {AngularFireModule  } from 'angularfire2'
import { AngularFireDatabaseModule  } from 'angularfire2/database';
import {environment  } from '../environments/environment';
import {AngularFirestoreModule,AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';



import { MatDatepickerModule,MatAutocompleteModule,MatButtonModule,MatSlideToggleModule,MatInputModule,MatNativeDateModule,MatFormFieldModule,MatTabsModule } from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    AttendanceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'trainingattendance-2f535'),
    AngularFireDatabaseModule,  
    AngularFirestoreModule  ,   

    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatTabsModule
   

  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
