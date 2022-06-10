import {NgModule} from "@angular/core";
import {AlertComponent} from "./alert/alert.component";
import {LoadingSpinerComponent} from "./loading-spiner.component";
import {PlaceholderDirective} from "./plaseholder/placeholder.directive";
import {DropdownDirective} from "./dropdown.directive";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [
    AlertComponent,
    LoadingSpinerComponent,
    PlaceholderDirective,
    DropdownDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlertComponent,
    LoadingSpinerComponent,
    PlaceholderDirective,
    DropdownDirective,
    CommonModule
  ],
  entryComponents:[
    AlertComponent
  ]
})
export class SharedModule{}
