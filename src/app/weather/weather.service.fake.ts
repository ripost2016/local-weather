import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ICurrentWeather } from '../interfaces';
import { IWeatherService } from './weather.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceFake implements IWeatherService {
  private fakeWeather: ICurrentWeather = {
    city: 'Bursa',
    country: 'TR',
    date: 1485789600,
    image: '',
    temperature: 252,
    description: 'light intensity drizzle'
  };

  constructor() {}

  public getCurrentWeather(
    city: string,
    country: string
  ): Observable<ICurrentWeather> {
    return of(this.fakeWeather);
  }
}
