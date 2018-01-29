import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {express, require } from 'express';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
// private api = 'http:';
//  JSON: any= {};
//  express: any;

express= require('express');
app = express();

 constructor(private http: Http, exo: express) {
// this.getdata();
// this.getconnect();
this.exPress();

alert('MTN IS TOO CORRUPT');

 }
//  getdata() {
//  return this.http.get(this.api).map((res: Response) => res.json());
//  }

// getconnect() {
// this.getdata().subscribe(data => {
// console.log(data);
// this.JSON = data;

// });
// }

exPress() {
 this. app.get('/',  (req, res) => {
res.send('haha');


 });


}






}
