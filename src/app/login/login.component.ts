import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/log-in.service';
import { Router } from '@angular/router';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls:['./login.component.css']
})
export class LoginComponent implements OnInit {
    valForm: FormGroup;
    constructor(private loginservice :  LoginService,fb:FormBuilder,
        private router: Router) { 
            this.valForm = fb.group({
                'username': [null, Validators.required],
                'password': [null, Validators.required]
              });
          
         }

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