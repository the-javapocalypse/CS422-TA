import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {StudentService} from '../../../student.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {

  constructor(private _studentService: StudentService, private router: Router) {
    // console.log('in atted=endance');
    console.log(this._studentService.data);
    if (this._studentService.data.id === 'abc') {
      this.router.navigate(['landing']);
    }
  }

  defualts = ['Present', 'Absent'];
  defaultOption = '';
  startAttendace = true;
  today: number = Date.now();
  data = this._studentService.getRecords();
  studentSelected = Array(30).fill(this.defaultOption);
  numbers = Array(30).fill().map((x, i) => i); // [0,1,2,3,4]
  correct = 0;
  wrong = 0;

  startTimer() {
    if(this.defaultOption === ''){
      alert('Please choose the default option for attendance');
      return;
    }
    this.startAttendace = false;
    const srt = Date.now();
    this.today = srt;
    this._studentService.data.startTime = srt;
    this.studentSelected.fill(this.defaultOption);
  }

  stopTimer() {
    // this.startAttendace = true;
    console.log('time took');
    const stp = Date.now();
    console.log((stp - this.today) / 1000);
    this._studentService.data.endTime = stp;
    this._studentService.data.selection = this.studentSelected;
    console.log(this._studentService.data);
    this.compareResults();
    this.router.navigate(['result']);
  }

  compareResults() {
    for (let i = 0; i < 30; i++) {
      if (this._studentService.data.selection[i] === this._studentService.records[i].Attendance) {
        this.correct++;
      } else {
        this.wrong++;
      }
    }
    console.log('correct:' + this.correct + ' wrong:' + this.wrong);
    this._studentService.data.correct = this.correct;
    this._studentService.data.wrong = this.wrong;
  }

  ngOnInit() {
  }


}
