import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() {
  }


  data = {
    'id': 'abc',
    'startTime': 0,
    'endTime': 0,
    'selection': [],
    'correct': 0,
    'wrong': 0,
    'timeStamps': [],
    'avgTime': 0
  };

  records = [
    {
      Name: 'Bunny Rempel',
      RollNo: '1024',
      Attendance: 'Present'
    },
    {
      Name: 'Danyelle Scoles',
      RollNo: '1027',
      Attendance: 'Present'
    },
    {
      Name: 'Marylynn Huizenga',
      RollNo: '1028',
      Attendance: 'Absent'
    },
    {
      Name: 'Kiersten Mares',
      RollNo: '1120',
      Attendance: 'Present'
    },
    {
      Name: 'Katrina Done',
      RollNo: '1224',
      Attendance: 'Present'
    },
    {
      Name: 'Jamel Fern',
      RollNo: '1054',
      Attendance: 'Present'
    },
    {
      Name: 'Demetria Willmon',
      RollNo: '1030',
      Attendance: 'Absent'
    },
    {
      Name: 'Alonzo Storch',
      RollNo: '1222',
      Attendance: 'Absent'
    },
    {
      Name: 'Hillary Felice',
      RollNo: '1424',
      Attendance: 'Present'
    },
    {
      Name: 'Jama Dunkel',
      RollNo: '1037',
      Attendance: 'Present'
    },
    {
      Name: 'Shemika Shumate',
      RollNo: '1324',
      Attendance: 'Present'
    },
    {
      Name: 'China Harmer',
      RollNo: '1330',
      Attendance: 'Present'
    },
    {
      Name: 'Leana Spoto',
      RollNo: '1555',
      Attendance: 'Present'
    },
    {
      Name: 'Daniele Rosas',
      RollNo: '1388',
      Attendance: 'Absent'
    },
    {
      Name: 'Kali Fennessey',
      RollNo: '1095',
      Attendance: 'Present'
    },
    {
      Name: 'Pauline Downer',
      RollNo: '1101',
      Attendance: 'Present'
    },
    {
      Name: 'Donny Kieffer',
      RollNo: '1300',
      Attendance: 'Present'
    },
    {
      Name: 'Ardelle Halpern',
      RollNo: '1654',
      Attendance: 'Present'
    },
    {
      Name: 'Lauretta Brunetti',
      RollNo: '1484',
      Attendance: 'Absent'
    },
    {
      Name: 'Lorie Blazier',
      RollNo: '1499',
      Attendance: 'Present'
    },
    {
      Name: 'Lisabeth Glandon',
      RollNo: '2222',
      Attendance: 'Absent'
    },
    {
      Name: 'Sofia Looby',
      RollNo: '1765',
      Attendance: 'Present'
    },
    {
      Name: 'Luetta Domenick',
      RollNo: '1591',
      Attendance: 'Present'
    },
    {
      Name: 'Piedad Taylor',
      RollNo: '2048',
      Attendance: 'Present'
    },
    {
      Name: 'Shaniqua Wolanski',
      RollNo: '1987',
      Attendance: 'Present'
    },
    {
      Name: 'Dahlia Schwanke',
      RollNo: '1602',
      Attendance: 'Present'
    },
    {
      Name: 'Shanna Turk',
      RollNo: '2999',
      Attendance: 'Absent'
    },
    {
      Name: 'Cyril Randell',
      RollNo: '9024',
      Attendance: 'Present'
    },
    {
      Name: 'Terese Schmidt',
      RollNo: '8884',
      Attendance: 'Absent'
    },
    {
      Name: 'Arden Amann',
      RollNo: '9283',
      Attendance: 'Absent'
    }
  ];


  getRecords() {
    return this.records;
  }
}
