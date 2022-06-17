import { ForecastServiceService } from './../forecast-service.service';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
// import Swiper core and required modules
import SwiperCore, { Pagination, Swiper, SwiperOptions } from 'swiper';


@Component({
  selector: 'app-today',
  templateUrl: './today.page.html',
  styleUrls: ['./today.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TodayPage implements OnInit {

  @ViewChild('swiper') swiper: SwiperComponent;

  public swiperConfig: SwiperOptions = {
    pagination: true,
  };


  timeDay = [];
  timeline = [];
  timeline1 = [];
  timeline2 = [];
  timeline3 = [];
  timeline4 = [];
  timeline5 = [];

  weatherNow: any;
  currentTime = new Date();
  location: any;
  constructor(private forecastService: ForecastServiceService) { }



  ngOnInit() {
    this.forecastService.getWeatherForecast().subscribe(data=>{
      this.getTodayForecast(data);
    });
    Swiper.use([Pagination]);
  }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngAfterContentChecked(){
    if(this.swiper){
      this.swiper.updateSwiper({});
    }
  }


  getTodayForecast(today: any){
    this.location = today.city;
    console.log(this.location.name);


    for (const forecast of today.list){

        if (new Date(forecast.dt_txt).getUTCDate() == this.currentTime.getUTCDate() + 0){
          this.timeline.push({
            maintemp: forecast.main.temp,
            icon: forecast.weather[0].icon,
            time: new Date(forecast.dt_txt),
            temp: forecast.main.temp,
          });
        }else if (new Date(forecast.dt_txt).getUTCDate() == this.currentTime.getUTCDate() + 1){
          this.timeline1.push({
            icon: forecast.weather[0].icon,
            time: new Date(forecast.dt_txt),
            temp: forecast.main.temp,
          });
        }else if (new Date(forecast.dt_txt).getUTCDate() == this.currentTime.getUTCDate() + 2){
          this.timeline2.push({
            icon: forecast.weather[0].icon,
            time: new Date(forecast.dt_txt),
            temp: forecast.main.temp,
          });
        }else if (new Date(forecast.dt_txt).getUTCDate() == this.currentTime.getUTCDate() + 3){
          this.timeline3.push({
            icon: forecast.weather[0].icon,
            time: new Date(forecast.dt_txt),
            temp: forecast.main.temp,
          });
        }else if (new Date(forecast.dt_txt).getUTCDate() == this.currentTime.getUTCDate() + 4){
          this.timeline4.push({
            icon: forecast.weather[0].icon,
            time: new Date(forecast.dt_txt),
            temp: forecast.main.temp,
          });
        }else if (new Date(forecast.dt_txt).getUTCDate() == this.currentTime.getUTCDate() + 5){
          this.timeline5.push({
            icon: forecast.weather[0].icon,
            time: new Date(forecast.dt_txt),
            temp: forecast.main.temp,
          });
        }

        // console.log(forecast);
        console.log (this.currentTime.getUTCDate());
    }


    for (let i = 0; i < 6; i++){
      this.timeDay.push({
        day1: this.timeline,
        day2: this.timeline1,
        day3: this.timeline2,
        day4: this.timeline3,
        day5: this.timeline4,
        day6: this.timeline5,
      });

    }

    console.log(this.timeDay);

  }


}

