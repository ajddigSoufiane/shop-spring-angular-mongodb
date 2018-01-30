import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {Response} from "@angular/http";
import { Headers, Http } from '@angular/http';
import "rxjs/Rx";
import { User } from "../model/user"; 
import {RequestOptions} from "@angular/http";

@Injectable()
export class LoginService {
    body: string;
    constructor(private http:Http) {}

    // login(email, password):Observable<Response> {
    //     let loginRequest = JSON.stringify({email: email, password: password});
    //     let headers = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'});

    //     return this.http.post('http://localhost:9091/api/login', loginRequest, { headers: headers })
    //                     .do(resp => {
    //                         localStorage.setItem('jwt', resp.headers.get('x-auth-token'));
    //                     });
    // }

    login(email, password): Observable<Response> {
        let headers = new Headers({'Content-Type': 'application/json'});
        headers.set('authorization', 'Bearer.');
        headers.set('accept', 'application/json');
        let options = new RequestOptions({headers: headers});
    
        this.body = JSON.stringify({
            email: email,
          password: password,
        });
    
        return this.http.post('http://localhost:9091/api/login', this.body, options)
          .map(resp => {
            localStorage.setItem('token', resp.headers.get('x-auth-token'));
          })
          .catch(this.handleError);
      }
    inscription(user:User){
        let insriptionRequest = JSON.stringify({user});
        let headers = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'});

        return this.http.post('http://localhost:9091/api/users', insriptionRequest, { headers: headers })
                        .do(resp => {
                            //localStorage.setItem('jwt', resp.headers.get('x-auth-token'));
                        });
    }
    logout():void {
        localStorage.removeItem('jwt');
    }

    private handleError(error:Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }


     isSignedIn():boolean {
        return localStorage.getItem('jwt') !== null;
    }


}
