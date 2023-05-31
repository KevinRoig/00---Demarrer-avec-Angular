import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { Cocktail } from '../cocktail';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit{

  constructor(public cocktailService: CocktailService) {}

  cocktails: Cocktail[] = [];

  getCocktails(): void {
    this.cocktails = this.cocktailService.getCocktails();
  }

  ngOnInit(): void {
    this.getCocktails();    console.log(this.cocktails)
  }

}
