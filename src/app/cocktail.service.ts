import { Injectable } from '@angular/core';
import { Cocktail } from './cocktail';
import { COCKTAILS } from './mock-cocktails';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor() { }

  getCocktails(): Cocktail[] {
    return COCKTAILS;
  }


}
