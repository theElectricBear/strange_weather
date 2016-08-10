import angular from 'angular';
import 'angular-mocks';
import {day} from './day';

describe('day component', () => {
  beforeEach(() => {
    angular
      .module('strangeDay', ['app/forecast/day.html'])
      .component('stragneDay', day);
    angular.mock.module('strangeDay');
  });

  it('should render day', angular.mock.inject(($rootScope, $compile) => {
    const $scope = $rootScope.$new();
    $scope.fixture = {
      convertedTime: {day: 'Wednesday'},
      high: 68,
      low: 55,
      summary: 'mumble mumble mumble'
    };
    const element = $compile('<strange-day day="fixture"></strange-day>')($scope);
    $scope.$digest();
    const day = element.find('h3');
    expect(day.html().trim()).toEqual('Wednesday');
  }));
});
