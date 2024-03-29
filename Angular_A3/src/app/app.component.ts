import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { OurHttpService } from './our-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  location: string;
  weather: string;
  forecast_url: string;
  temperature_string: string;
  feelslike: string;
  observation_time: string;
  icon_url: string;
  wu_icon: string;
  wind_string: string;
  precip_today_string: string;
  relative_humidity: string;
  
  constructor (private newService: OurHttpService) {}

  ngOnInit(){
    this.newService.fetchData().subscribe((response) =>{
      this.location = response.current_observation.observation_location.full;
      this.forecast_url = response.current_observation.forecast_url;
      this.temperature_string = response.current_observation.temperature_string;
      this.weather = response.current_observation.weather;
      this.feelslike = response.current_observation.feelslike_string;
      this.observation_time = response.current_observation.observation_time;
      this.icon_url = response.current_observation.icon_url;
      this.wu_icon = response.current_observation.image.url;
      this.wind_string = response.current_observation.wind_string;
      this.precip_today_string = response.current_observation.precip_today_string;
      this.relative_humidity = response.current_observation.relative_humidity;

    });
  }
}
