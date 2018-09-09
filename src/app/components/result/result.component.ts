import {Component, OnInit} from '@angular/core';
import {StudentService} from "../../student.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private _studentService: StudentService, private router: Router) {
    if(this._studentService.data.id === 'abc'){
      this.router.navigate(['landing'])
    }
  }


  numbers = Array(30).fill().map((x, i) => i); // [0,1,2,3,4]
  data = this._studentService.getRecords();
  studentData = this._studentService.data;

  ngOnInit() {
    window.scroll(0,0);
  }

}
