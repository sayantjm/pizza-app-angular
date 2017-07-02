import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PizzaListComponent } from './pizzas/pizza-list/pizza-list.component';
import { PizzaDetailComponent } from './pizzas/pizza-detail/pizza-detail.component';
import { PizzaEditComponent } from './pizzas/pizza-edit/pizza-edit.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/auth-guard.service';

const appRoutes: Routes = [
    { path: '', redirectTo: '/pizzas', pathMatch: 'full'},
    { path: 'pizzas', component: PizzaListComponent },
    { path: 'detail/:id', component: PizzaDetailComponent, canActivate: [AuthGuard] },
    { path: 'detail/:id/edit', component: PizzaEditComponent, canActivate: [AuthGuard]},
    { path: 'new', component: PizzaEditComponent, canActivate: [AuthGuard] },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}