import { Component, OnInit , OnDestroy} from '@angular/core';
import {Ingredient} from "../shared/ingredients/ingredients.model";
import {ShoppingListService} from "./shopping-list.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit, OnDestroy {
  ingredients?: Ingredient[];
  private igChangeSub?: Subscription;
  constructor(private slService: ShoppingListService) {
  }

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    this.igChangeSub = this.slService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) =>{
        this.ingredients = ingredients;
      }
    )
  }
  ngOnDestroy() {
    this.igChangeSub?.unsubscribe();
  }
  onEditItem(index: number){
    this.slService.startedEditind.next(index);
  }
}
