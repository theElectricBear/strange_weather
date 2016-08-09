class ForecastController {
  /** @ngInject */
  constructor($scope, ForecastDataFactory, PackPrecipFilter, ConvertUnixFilter) {
    this.items = ['fiveday', 'precip', 'home', 'other'];
    $scope.selection = this.items[1];
    this.ForecastDataFactory = ForecastDataFactory;
    this.ForecastDataFactory.queryForecast().then((data) => {
      data.daily.data.forEach(function(item, index){
        item.convertedTime = ConvertUnixFilter(item.time);
      });
      this.daily = data.daily.data.slice(1, 6);
      
      this.daily.forEach(function(item, index){
        item.high = Math.round(item.temperatureMax);
        item.low = Math.round(item.temperatureMin);
        item.summary = item.temperatureMin;
      });
      this.summary = data.daily.summary;

      this.precipWeek = data.daily.data.slice(0, 7);
      this.precipWeek = PackPrecipFilter(this.precipWeek);
      console.log(this.precipWeek)
    });
  };
}

export const forecast = {
  templateUrl: 'app/forecast/forecast.html',
  controller: ForecastController
};
