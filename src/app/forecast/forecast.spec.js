import angular from 'angular';
import 'angular-mocks';
import {forecast} from './forecast';

describe('forecast component', () => {
  beforeEach(() => {
    angular
      .module('strangeForecast', ['app/forecast/forecast.html'])
      .component('strangeForecast', forecast);
    angular.mock.module('strangeForecast');
  });
  it('should render 1 elements <strange-day>', angular.mock.inject(($rootScope, $compile, $httpBackend) => {
    const element = $compile('<strange-forecast></strange-forecast>')($rootScope);
    $httpBackend.flush();
    $rootScope.$digest();
    const forecast = element.find('strange-day');
    expect(forecast.length).toEqual(5);
  }));
});
