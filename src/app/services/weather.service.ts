import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherResponse } from '../pages/home/models/home.models';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private readonly apiKey = '66ed2e7e1d665d4939326749f54d3c42'; // Sua chave de API

  constructor(private http: HttpClient) {}

  getWeather(city: string) {
    const geoUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}&lang=pt_br`;
    return this.http.get<WeatherResponse>(geoUrl);
  }
}
