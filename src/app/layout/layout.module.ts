import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout.component'; 
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from "@angular/router"; 
@NgModule({
    declarations: [
        LayoutComponent,
        HeaderComponent, 
        FooterComponent,
    ],
    imports: [CommonModule, RouterModule],
    exports: [LayoutComponent
    ],
    providers: [],
})
export class LayoutModule { }