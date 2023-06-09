import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { BlockComponent } from "./block/block.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { MenuComponent } from './menu/menu.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ROUTES } from './app.routes';
import { MyFormComponent } from './my-form/my-form.component';
import { ChildComponent } from './child/child.component';
import { HeroesComponent } from "./heroes/heroes.component";
import { MessagesComponent } from './messages/messages.component';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { HttpClientModule } from "@angular/common/http";
import { NasaComponent } from './nasa/nasa.component';


@NgModule({
  declarations: [AppComponent, BlockComponent, UserProfileComponent, MenuComponent, SignUpComponent, MyFormComponent, ChildComponent, HeroesComponent, MessagesComponent, CocktailListComponent, NasaComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(ROUTES), HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
