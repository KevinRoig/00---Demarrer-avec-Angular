import { Component } from "@angular/core";
import { User } from "../user";

@Component({
  selector: "app-userProfile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.css"]
})
export class UserProfileComponent {
  userProfile: User = {
    name: "La Bidouille",
    firstName: "Jo",
    age: 24,
    quote: "Faut-il une citation?",
    photo:
      "https://img.20mn.fr/5znofcNlQduV07Lf1BSkeSk/768x492_la-photo-se-recentre-sur-un-marche-de-passionnes-desireux-de-realiser-de-meilleures-photos-qu-avec-un-smartphone"
  };
  showHide(): void {
    let showAge = document.getElementById("age");
    if(showAge)
    {
      showAge.style.display = "block";
    }
  }
}
