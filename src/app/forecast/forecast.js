class ForecastController {
  /** @ngInject */
  constructor($scope, ForecastDataFactory, packPrecipFilter, convertUnixFilter) {
    this.items = ['fiveday', 'precip', 'home'];
    $scope.selection = this.items[0];
    this.ForecastDataFactory = ForecastDataFactory;
    this.ForecastDataFactory.queryForecast('seattle').then(data => {
      console.log(data);
      data.daily.data.forEach(item => {
        item.convertedTime = convertUnixFilter(item.time);
      });
      this.daily = data.daily.data.slice(1, 6);
      this.daily.forEach(item => {
        item.high = Math.round(item.temperatureMax);
        item.low = Math.round(item.temperatureMin);
        item.summary = item.temperatureMin;
      });
      this.summary = data.daily.summary;
      this.precipWeek = data.daily.data.slice(0, 7);
      this.precipWeek = packPrecipFilter(this.precipWeek);
    });
  }
}

export const forecast = {
  templateUrl: 'app/forecast/forecast.html',
  controller: ForecastController

};
