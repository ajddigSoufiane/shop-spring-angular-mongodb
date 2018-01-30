import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/log-in.service';
import {Router} from "@angular/router";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import { User } from '../model/user';
 
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls:['./login.component.css']
})
export class LoginComponent implements OnInit {
    signUp:boolean;
    loginForm: FormGroup;
    InscriptionForm: FormGroup;
    constructor(private loginservice :  LoginService,fb:FormBuilder,private router: Router) { 
            this.loginForm = fb.group({
                'email': [null, Validators.required],
                'password': [null, Validators.required]
              });
              this.InscriptionForm = fb.group({
                'email': [null, Validators.required],
                'username': [null, Validators.required],
                'password': [null, Validators.required],
                'confirmPassword':[null, Validators.required],
              });
         }

    ngOnInit() { }
    login(event) {
        event.preventDefault();
        if(this.loginForm.valid && this.loginForm.value){
        this.loginservice.login(this.loginForm.value.email, this.loginForm.value.password)
            .subscribe(() => {
                //this.router.navigate(['/home']);
            }, this.handleError);}
    }
    inscription(){
        if(this.InscriptionForm.valid && this.InscriptionForm.value){
            let user:User=new User()
            Object.assign(user,this.InscriptionForm.value)
             this.loginservice.inscription(user)
                .subscribe(() => {
                    this.signUp=true;
                }, this.handleError);}
    }
    handleError(error) {
       // this.router.navigate(['/home']);
    }
}