import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Recipe} from "../recipes/recipe.model";
import {RecipeService} from "../recipes/recipe.service";
import {exhaustMap,switchMap, map, take, tap} from 'rxjs/operators';
import {AuthService} from "../auth/auth.service";

@Injectable({providedIn: 'root'})
export class DataStorageService{
  constructor(private http: HttpClient,
              private recipesService: RecipeService,
              private authService: AuthService) {}

  storeRecipes(){
    const recipes = this.recipesService.getRecipes();
    return this.http
      .put('Here put your link to firebase and your personal key', recipes)
      .subscribe(response =>{
      console.log(response);
    });
  }


  fetchRecipes(){
    return this.http
      .get<Recipe[]>(
        'Here put your link to firebase and your personal key'
      )
      .pipe(
        map(recipes => {
          return recipes.map(recipe => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : []
            };
          });
        }),
        tap(recipes => {
          this.recipesService.setRecipes(recipes);
        })
      );

  }
}
