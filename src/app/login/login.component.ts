import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/log-in.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls:['./login.component.css']
})
export class LoginComponent implements OnInit {
    constructor(private router:Router, private loginservice :  LoginService) { }

    ngOnInit() { }
    login(event, email, password) {
        event.preventDefault();
        this.loginservice.login(email, password)
            .subscribe(() => {
                this.router.navigate(['/home']);
            }, this.handleError);
    }

    handleError(error) {
        this.router.navigate(['/home']);
    }
}