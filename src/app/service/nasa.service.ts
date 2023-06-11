import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  constructor(public http: HttpClient) { }

  getImageOfTheDay() {
    return this.http.get("https://hp-api.onrender.com/api/character/9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8")
  }
}
