export class WeatherResponse {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
}

export class WeatherView {
  cityName: string;
  temp: number;
  humidity: number;
}
