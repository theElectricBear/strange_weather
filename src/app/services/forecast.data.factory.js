export function ForecastDataFactory($resource) {
  const queryForecast = function (city) {
    const locations = {
      seattle: [47.606, -122.332],
      newyork: [40.712, -74.005],
      bangkok: [13.756, 100.501]
    };
    const lat = locations[city][0];
    const long = locations[city][1];
    const queryUrl = `/forecast?lat=${lat}&long=${long}`;
    console.log(queryUrl);
    // dev
    return $resource('./app/forecast/forecast.json').get().$promise;
    // prod
    // return $resource(queryUrl).get().$promise;
  };
  return {
    queryForecast
  };
}
