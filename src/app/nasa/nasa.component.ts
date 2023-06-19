import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NasaService } from '../service/nasa.service';

@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  styleUrls: ['./nasa.component.css']
})
export class NasaComponent implements OnInit {

  constructor(public http: HttpClient, public nasaService: NasaService) { }

  imgOfTheDay: any
  image:any 

  ngOnInit(): void {
    this.nasaService.getImageOfTheDay()
      .subscribe(response => {
        
        this.imgOfTheDay = response;
        this.image = this.imgOfTheDay.hdurl
      })
  }

}
