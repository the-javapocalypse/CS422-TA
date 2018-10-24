import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {StudentService} from '../../student.service';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private _studentService: StudentService, private router: Router, private httpClient: HttpClient, private titleService: Title) {
    // console.log('constructor');
    // // Initialize Params Object
    // let Params = new HttpParams();
    // // Begin assigning parameters
    // Params = Params.append('firstParameter', 'Ali');
    // Params = Params.append('secondParameter', 'Zia');
    // return this.httpClient.get('http://javapocalypse.tdevs.org/api.php'
    //   , {
    //     params: {params: Params}
    //   }).subscribe(data => {
    //   // show data in console
    //   console.log(data);
    // });


    // httpClient.post('http://javapocalypse.tdevs.org/api.php', {'email': 'aaa', 'password': 'aaa'})
    //   .subscribe(data =>  {
    //     console.log(' ------------ ' + data);
    //   });


  }

  public rollNo = '';

  ngOnInit() {
    this.titleService.setTitle('HCI Activity');
    console.log('On Init');
    console.log(this._studentService.data);
    this._studentService.data.id = this.rollNo;
    console.log('On Init after');
    console.log(this._studentService.data);
  }

  startSess() {
    if (this.rollNo === '' || this.rollNo[1].toLowerCase() !== '-' || this.rollNo[2].toLowerCase() !== 'k' || this.rollNo.length !== 9 ) {
      alert('Make sure you are entering roll number in the correct format which is YOUR_SECTION-ROLL_NUMBER. For example, B-k152123');
      return;
    }
    this._studentService.data.id = this.rollNo;
    console.log(this._studentService.data);
    this.router.navigate(['attendance']);
  }

}
