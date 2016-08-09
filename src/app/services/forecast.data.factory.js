export function ForecastDataFactory($resource) {
	const Forecast = $resource('./app/forecast/forecast.json');
	const queryForecast = function(){
		return Forecast.get().$promise;
	};

	function getDaily(){
		return 'woot';
	};

	return {
		queryForecast
	}
}
