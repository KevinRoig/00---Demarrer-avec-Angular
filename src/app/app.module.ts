import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { BlockComponent } from "./block/block.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { MenuComponent } from './menu/menu.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ROUTES } from './app.routes';
import { MyFormComponent } from './my-form/my-form.component';


@NgModule({
  declarations: [AppComponent, BlockComponent, UserProfileComponent, MenuComponent, SignUpComponent, MyFormComponent],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(ROUTES)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
