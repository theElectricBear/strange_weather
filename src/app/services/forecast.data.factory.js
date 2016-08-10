export function ForecastDataFactory($resource, GetPositionService) {

  GetPositionService.queryPosition().then(position => { 
    console.log(position.coords.latitude); 
  });
  // dev
  const forecast = $resource('./app/forecast/forecast.json');
  // prod
  // const forecast = $resource('/forecast?lat=37.8267&long=-122.423');
  const queryForecast = function () {
    return forecast.get().$promise;
  };
  return {
    queryForecast
  };
}
