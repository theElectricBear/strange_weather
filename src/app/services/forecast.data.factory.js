export function ForecastDataFactory($resource) {
  // dev
  // const forecast = $resource('./app/forecast/forecast.json');
  // prod
  // const forecast = $resource('/forecast?lat=37.8267&long=-122.423');
  const queryForecast = function (city) {
    const locations = {
      seattle: [37.826, -122.423],
      newyork: [40.712, -74.005],
      bangkok: [13.756, 100.501]
    };
    const lat = locations[city][0];
    const long = locations[city][1];
    const queryUrl = `/forecast?lat=${lat}&long=${long}`;
    console.log(queryUrl);
    return $resource(queryUrl).get().$promise;
  };
  return {
    queryForecast
  };
}
