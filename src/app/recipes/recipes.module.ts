import {NgModule} from "@angular/core";
import {RecipesComponent} from "./recipes.component";
import {RecipeListComponent} from "./recipe-list/recipe-list.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {RecipeItemComponent} from "./recipe-list/recipe-item/recipe-item.component";
import {RecipeStartComponent} from "./recipe-start/recipe-start.component";
import {RecipesEditComponent} from "./recipes-edit/recipes-edit.component";
import {RecipeService} from "./recipe.service";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptorService} from "../auth/auth.interceptor.service";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {RecipesRoutingModule} from "./recipes-routing.module";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeStartComponent,
    RecipesEditComponent,
  ],
  imports: [
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    RecipesRoutingModule
  ]

})
export class RecipesModule{

}
