import { from } from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from '../models/user';

@Injectable()
export class HttpService
{
    constructor(private httpClient: HttpClient) { }

    postDataUser(user: User) {
        const body = {login: user.login, password: user.password}
        return this.httpClient.post('http://localhost:3000/postuser', body);
    }
}