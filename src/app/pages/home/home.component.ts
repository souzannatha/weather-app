import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { WeatherView } from './models/home.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public city = '';
  public weatherView?: WeatherView;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {}

  async submitPromise() {
    try {
      const weatherData = await this.weatherService
        .getWeather(this.city)
        .toPromise();

      this.weatherView = {
        cityName: weatherData.name,
        temp: Math.floor(weatherData.main.temp),
        humidity: weatherData.main.humidity,
      };

      console.log('Dados da cidade e clima:', this.weatherView);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  }
}
