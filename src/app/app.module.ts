import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { MenuComponent } from './menu/menu.component';
import { PizzasComponent } from './pizzas/pizzas.component';
import { PizzaListComponent } from './pizzas/pizza-list/pizza-list.component';
import { PizzaDetailComponent } from './pizzas/pizza-detail/pizza-detail.component';
import { PizzaService } from './pizzas/pizza.service';
import { DataStorageService } from './shared/data-storage.service';
import { AuthService } from './auth/auth.service';
import { AppRoutingModule } from './app.routing.module';
import { PizzaEditComponent } from './pizzas/pizza-edit/pizza-edit.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PizzasComponent,
    PizzaListComponent,
    PizzaDetailComponent,
    PizzaEditComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [PizzaService, DataStorageService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
