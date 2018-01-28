import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { LayoutModule } from '../layout/layout.module';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [ CommonModule,HomeRoutingModule,LayoutModule ],
    exports: [],
    providers: [],
})
export class HomeModule {}