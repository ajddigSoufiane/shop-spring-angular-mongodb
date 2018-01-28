import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LayoutModule } from '../layout/layout.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginService } from '../services/log-in.service';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [ CommonModule,LoginRoutingModule,LayoutModule,HttpModule,HttpClientModule ],
    exports: [],
    providers: [LoginService],
})
export class LoginModule {}