export function ForecastDataFactory($resource) {
  const forecast = $resource('/forecast');
  const queryForecast = function () {
    return forecast.get().$promise;
  };
  return {
    queryForecast
  };
}
