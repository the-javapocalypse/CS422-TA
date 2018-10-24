import {Component, OnInit} from '@angular/core';
import {StudentService} from '../../student.service';
import {Router} from '@angular/router';
import {HttpClient, HttpParams} from '@angular/common/http';
import {t} from '@angular/core/src/render3';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private _studentService: StudentService, private router: Router, private httpClient: HttpClient) {
    if (this._studentService.data.id === 'abc') {
      this.router.navigate(['landing']);
    } else {
      for (let i = 0; i < _studentService.data.timeStamps.length; i++) {
        this.avgTime += _studentService.data.timeStamps[i];
      }
      this.avgTime /= _studentService.data.timeStamps.length;
      _studentService.data.avgTime = this.avgTime;
    }
  }

  // @ts-ignore
  numbers = Array(30).fill().map((x, i) => i); // [0,1,2,3,4]
  data = this._studentService.getRecords();
  studentData = this._studentService.data;
  avgTime = 0;

  postResults() {
    console.log(1);
    this.httpClient.post('https://tdevs.org/api.php', {
      // 'id': this._studentService.data.id,
      // 'correct': this._studentService.data.correct,
      // 'wrong': this._studentService.data.wrong,
      // 'time': ((this._studentService.data.endTime - this._studentService.data.startTime) / 1000).toString(),
      // 'avgTIme': this._studentService.data.avgTime
      'email': this._studentService.data.id.toString(),
      'correct': this._studentService.data.correct.toString(),
      'wrong': this._studentService.data.wrong.toString(),
      'time': ((this._studentService.data.endTime - this._studentService.data.startTime) / 1000).toString(),
      'avg': this._studentService.data.avgTime.toString(),
    })
      .subscribe(data => {
          console.log(2);
        if (data === 200) {
          alert('Activity submitted');
        } else {
          alert('Oops! something went wrong. Unable to create record. Please inform your teacher.');
        }
      },
        err => alert(err)
      );
    console.log(3);
  }

  ngOnInit() {
    window.scroll(0, 0);
  }

}
