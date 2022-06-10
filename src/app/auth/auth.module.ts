import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthComponent} from "./auth.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    RouterModule.forChild([{path: '', component: AuthComponent}])
  ],


})
export class AuthModule { }
