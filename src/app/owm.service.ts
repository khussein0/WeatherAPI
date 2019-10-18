import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OwmService {

  constructor(private http: HttpClient) { }

  getWeather(location){
    return this.http.get(
        'https://api.openweathermap.org/data/2.5/weather?q=' + location + '&APPID=9bb4d5d672ff1dfa8c82a3cad194915c&units=metric'
    );
  }
}
