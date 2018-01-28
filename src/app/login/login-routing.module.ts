import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { LayoutComponent } from '../layout/layout.component';


const routes: Routes = [
    { path: 'login', component: LoginComponent, 
    //   children:[
    //     { path: '', component: LoginComponent}
    //     ]
    } 
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingModule {}
