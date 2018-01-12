import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
private api = 'http:';
 JSON: any= {};
 express: any;

 constructor(private http: Http) {
// this.getdata();
// this.getconnect();
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

// exPress() {


// }






}
