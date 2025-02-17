import { SellerUpdateComponent } from './components/seller/seller-update/seller-update.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent} from './views/home/home.component';
import { SellerCrudComponent } from './views/seller-crud/seller-crud.component';
import { SellerCreateComponent} from './components/seller/seller-create/seller-create.component';
import { SellerDeleteComponent } from './components/seller/seller-delete/seller-delete.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },{
    path: "sellers",
    component: SellerCrudComponent
  },
  {
    path: "sellers/create",
    component: SellerCreateComponent
  },
  {
    path: "sellers/update/:id",
    component: SellerUpdateComponent
  },
  {
    path: "sellers/delete/:id",
    component: SellerDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
