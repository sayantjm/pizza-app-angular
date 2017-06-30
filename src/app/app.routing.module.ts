import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PizzaListComponent } from './pizzas/pizza-list/pizza-list.component';
import { PizzaDetailComponent } from './pizzas/pizza-detail/pizza-detail.component';
import { PizzaEditComponent } from './pizzas/pizza-edit/pizza-edit.component';
import { LoginComponent } from './auth/login/login.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/pizzas', pathMatch: 'full'},
    { path: 'pizzas', component: PizzaListComponent },
    { path: 'detail/:id', component: PizzaDetailComponent },
    { path: 'detail/:id/edit', component: PizzaEditComponent },
    { path: 'new', component: PizzaEditComponent },
    { path: 'login', component: LoginComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}