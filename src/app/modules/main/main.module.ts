import { NgModule } from '@angular/core';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonImportsModule } from '../common-imports/common-imports.module';
import {MatSidenavModule} from "@angular/material/sidenav";

const route: Routes = [
  {
    path: '',
    component: MainPageComponent,
    pathMatch: 'full',
  }
]

@NgModule({
  declarations: [
    MainPageComponent,
    HeaderComponent
  ],
  imports: [
    RouterModule.forChild(route),
    CommonImportsModule,
    MatSidenavModule
  ]
})
export class MainModule { }
