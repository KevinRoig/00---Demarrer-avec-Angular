
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MenuComponent } from './menu/menu.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BlockComponent } from './block/block.component';
import { Routes } from '@angular/router';

const ROUTES: Routes = [
  { path: 'user', component: UserProfileComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'blocks', component: BlockComponent},
  { path: '', component: UserProfileComponent}
];
 
export { ROUTES };
