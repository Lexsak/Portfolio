import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DropDownMenuComponent } from './layouts/drop-down-menu/drop-down-menu.component';

const routes: Routes = [
  {path: 'menu', component: DropDownMenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
