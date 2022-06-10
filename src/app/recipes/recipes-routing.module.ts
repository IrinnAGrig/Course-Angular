import {RouterModule, Routes} from "@angular/router";
import {RecipesComponent} from "./recipes.component";
import {AuthGuard} from "../auth/auth.guard";
import {RecipeStartComponent} from "./recipe-start/recipe-start.component";
import {RecipesEditComponent} from "./recipes-edit/recipes-edit.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {RecipeResorverService} from "./recipe-resorver.service";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {path: '',
    component: RecipesComponent,
    canActivate: [AuthGuard],
    children:
      [
        {path: '', component: RecipeStartComponent},
        {path: 'new', component: RecipesEditComponent},
        {path: ':id', component: RecipeDetailComponent, resolve: [RecipeResorverService]},
        {path: ':id/edit', component: RecipesEditComponent, resolve: [RecipeResorverService]}
      ]},
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RecipesRoutingModule { }
