import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';



import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LandingComponent} from './components/landing/landing.component';
import {AttendanceComponent} from './components/landing/attendance/attendance.component';
import {StudentService} from './student.service';
import { ResultComponent } from './components/result/result.component';

const routes: Routes = [
  {path: 'landing', component: LandingComponent},
  {path: 'attendance', component: AttendanceComponent},
  {path: 'result', component: ResultComponent},
  {path: '', redirectTo: 'landing', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AttendanceComponent,
    ResultComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
