import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { User } from './model/user';

import {Observable} from 'rxjs/Rx';


@Injectable()
export class UserService {
  options: RequestOptions;
  headers: Headers;

  constructor(private http: Http) {


    this.headers = new Headers({ 'Content-Type': 'application/json' });
this.options = new RequestOptions({ headers: this.headers });
   }

  
  getUsers() : Observable<User[]> {

      return this.http.get('http://localhost:8080/user')
                      .map((res:Response) => res.json())
                      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }
  deleteUser(id:string) : Observable<User[]> {
    
          return this.http.delete('http://localhost:8080/user/'+id,this.options )
                          .map((res:Response) => res.json())
                          .catch((error:any) => Observable.throw(error || 'Server error'));
    
      }

  addUser(user: User): Observable<User> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:8080/user', user, options)
               .map((res:Response) => res.json())
               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
} 

}
