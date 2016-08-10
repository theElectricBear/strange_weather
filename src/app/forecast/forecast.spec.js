import angular from 'angular';
import 'angular-mocks';
import {forecast} from './forecast';

const forecastJson = [
  {
    time: 1470898800,
    summary: 'Clear throughout the day.',
    icon: 'clear-day',
    sunriseTime: 1470920518,
    sunsetTime: 1470972577,
    moonPhase: 0.28,
    precipIntensity: 0,
    precipIntensityMax: 0,
    precipProbability: 0,
    temperatureMin: 59.01,
    temperatureMinTime: 1470916800,
    temperatureMax: 83.67,
    temperatureMaxTime: 1470956400,
    apparentTemperatureMin: 59.01,
    apparentTemperatureMinTime: 1470916800,
    apparentTemperatureMax: 84.38,
    apparentTemperatureMaxTime: 1470956400,
    dewPoint: 58.04,
    humidity: 0.68,
    windSpeed: 4.71,
    windBearing: 9,
    visibility: 9.97,
    cloudCover: 0.06,
    pressure: 1018.73,
    ozone: 310.55,
    convertedTime: {
      year: 2016,
      month: 'Aug',
      date: 11,
      day: 'Thursday'
    },
    high: 84,
    low: 59
  },
  {
    time: 1470985200,
    summary: 'Partly cloudy overnight.',
    icon: 'partly-cloudy-night',
    sunriseTime: 1471006998,
    sunsetTime: 1471058878,
    moonPhase: 0.31,
    precipIntensity: 0,
    precipIntensityMax: 0,
    precipProbability: 0,
    temperatureMin: 62.29,
    temperatureMinTime: 1471003200,
    temperatureMax: 88.46,
    temperatureMaxTime: 1471046400,
    apparentTemperatureMin: 62.29,
    apparentTemperatureMinTime: 1471003200,
    apparentTemperatureMax: 89.66,
    apparentTemperatureMaxTime: 1471046400,
    dewPoint: 59.96,
    humidity: 0.64,
    windSpeed: 4.79,
    windBearing: 7,
    visibility: 10,
    cloudCover: 0.05,
    pressure: 1017.78,
    ozone: 298.32,
    convertedTime: {
      year: 2016,
      month: 'Aug',
      date: 12,
      day: 'Friday'
    },
    high: 88,
    low: 62
  },
  {
    time: 1471071600,
    summary: 'Partly cloudy throughout the day.',
    icon: 'partly-cloudy-day',
    sunriseTime: 1471093479,
    sunsetTime: 1471145177,
    moonPhase: 0.34,
    precipIntensity: 0,
    precipIntensityMax: 0,
    precipProbability: 0,
    temperatureMin: 65.41,
    temperatureMinTime: 1471089600,
    temperatureMax: 89.15,
    temperatureMaxTime: 1471122000,
    apparentTemperatureMin: 65.41,
    apparentTemperatureMinTime: 1471089600,
    apparentTemperatureMax: 91.69,
    apparentTemperatureMaxTime: 1471122000,
    dewPoint: 61.84,
    humidity: 0.65,
    windSpeed: 3.15,
    windBearing: 358,
    visibility: 10,
    cloudCover: 0.39,
    pressure: 1015.18,
    ozone: 290.29,
    convertedTime: {
      year: 2016,
      month: 'Aug',
      date: 13,
      day: 'Saturday'
    },
    high: 89,
    low: 65
  }
];

describe('forecast component', () => {
  beforeEach(() => {
    angular
      .module('strangeForecast', ['app/forecast/forecast.html'])
      .component('strangeForecast', forecast);
    angular.mock.module('strangeForecast');
  });
  it('should render 3 elements <strange-day>', angular.mock.inject(($rootScope, $compile, $httpBackend) => {
    $httpBackend.when('GET', 'app/forecast/forecast.json').respond(forecastJson);
    const element = $compile('<strange-forecast></strange-forecast>')($rootScope);
    $httpBackend.flush();
    $rootScope.$digest();
    const forecast = element.find('strange-day');
    expect(forecast.length).toEqual(2);
  }));
});
