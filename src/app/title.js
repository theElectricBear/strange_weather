class TitleController {
  constructor(ForecastDataFactory, ConvertUnixFilter) {
    /** @ngInject */
    this.ForecastDataFactory = ForecastDataFactory;
    this.ForecastDataFactory.queryForecast().then((data) => {
      this.convertedTime = ConvertUnixFilter(data.currently.time);
      this.temp = Math.round(data.currently.temperature);
      this.summary = data.currently.summary;
      this.high = Math.round(data.daily.data[0].temperatureMax);
      this.low = Math.round(data.daily.data[0].temperatureMin);
    });
  };
}
export const title = {
  templateUrl: 'app/title.html',
  controller: TitleController
};
