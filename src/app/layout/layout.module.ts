import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MaterialModule } from '../material.module';

@NgModule({
    declarations: [
        DefaultLayoutComponent,
        FooterComponent,
        HeaderComponent,
        SideNavComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule,
    ]
})
export class LayoutModule { }
