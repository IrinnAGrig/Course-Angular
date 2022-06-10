import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import {ShoppingListService} from "./shoping-list/shopping-list.service";
import {RecipeService} from "./recipes/recipe.service";
import {AuthInterceptorService} from "./auth/auth.interceptor.service";



@NgModule({
  providers: [
    ShoppingListService,
    RecipeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ]

})
export class CoreModule { }
