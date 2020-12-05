import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-work-with-http',
  templateUrl: './work-with-http.component.html',
  styleUrls: ['./work-with-http.component.css'],
  providers: [HttpService]
})
export class WorkWithHttpComponent implements OnInit {

  user: User;

  //messageFromServer: string;
  messageFromServer: any;
  done: boolean;

  constructor(private httpService: HttpService) {
    this.user = new User();
    this.done = false;
   }

  ngOnInit(): void {
  }

  submit(user: User) {
    this.httpService.postDataUser(user).subscribe( (message: any) => {
      {this.messageFromServer = message; this.done = true;}
      (error: string) => console.log(error);
    })
  }

}
