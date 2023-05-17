import { Component } from '@angular/core';
import { User } from '../user';
import { UserProfileComponent } from '../user-profile/user-profile.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

    user: User = new User("", "", 0, "", "", "", "");
constructor() {};

    onSubmit():void {
    console.log(this.user);
    }
    
}
