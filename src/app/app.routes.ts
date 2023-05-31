
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MenuComponent } from './menu/menu.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BlockComponent } from './block/block.component';
import { MyFormComponent } from './my-form/my-form.component';
import { Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { Hero } from './hero';
import { HeroesComponent } from './heroes/heroes.component';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';

const ROUTES: Routes = [
  { path: 'user', component: UserProfileComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'blocks', component: BlockComponent},
  { path: '', component: UserProfileComponent},
  { path: 'form', component: MyFormComponent},
  { path: 'child', component: ChildComponent},
  { path: 'heroes', component: HeroesComponent},
  { path: 'cocktails', component: CocktailListComponent} 
];
 
export { ROUTES };
