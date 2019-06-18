import {NgModule} from "@angular/core";
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";
import {CommonMaterialModule} from "./common-material.module";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule, CommonMaterialModule],
  declarations: [NavBarComponent],
  exports: [NavBarComponent]
})
export class SharedModule {

}
