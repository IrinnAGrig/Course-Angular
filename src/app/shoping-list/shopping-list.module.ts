import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ShopingListComponent} from "./shoping-list.component";
import {ShoppingEditComponent} from "./shopping-edit/shopping-edit.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    ShopingListComponent,
    ShoppingEditComponent,
  ],
  imports: [
    RouterModule.forChild([
      {path: '', component: ShopingListComponent}]),
    SharedModule,
    FormsModule,
  ]

})
export class ShoppingListModule{

}
