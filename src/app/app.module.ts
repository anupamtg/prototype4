import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {Routes, RouterModule} from "@angular/router"
// import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NewComponent } from "./new/new.component";
import { ViewComponent } from './view/view.component';
import { UserLoginComponent } from 'src/user/user-login/user-login/user-login.component';
import { UserRegisterComponent } from 'src/user/user-register/user-register/user-register.component';

const appRoutes: Routes = [

  {path: 'user/login', component: UserLoginComponent},
  {path: 'user/register', component: UserRegisterComponent}
]

@NgModule({
  declarations: [AppComponent, NewComponent, ViewComponent, UserLoginComponent, UserRegisterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,

    ReactiveFormsModule
    // NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
