class CurrentController {
  constructor(ForecastDataFactory, convertUnixFilter) {
    /** @ngInject */
    this.ForecastDataFactory = ForecastDataFactory;
    this.ForecastDataFactory.queryForecast('seattle').then(data => {
      console.log(data.currently);
      this.imageClass = data.currently.icon;
      this.convertedTime = convertUnixFilter(data.currently.time);
      this.temp = Math.round(data.currently.temperature);
      this.summary = data.currently.summary;
      this.high = Math.round(data.daily.data[0].temperatureMax);
      this.low = Math.round(data.daily.data[0].temperatureMin);
    });
  }
}

export const current = {
  templateUrl: 'app/current.html',
  controller: CurrentController
};
