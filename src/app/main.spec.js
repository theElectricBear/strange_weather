import angular from 'angular';
import 'angular-mocks';
import {main} from './main';

describe('main component', () => {
  beforeEach(() => {
    angular
      .module('app', ['app/main.html'])
      .component('app', main);
    angular.mock.module('app');
  });

  it('should render the header, title, forecast and footer', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<app>Loading...</app>')($rootScope);
    $rootScope.$digest();
    expect(element.find('strange-header').length).toEqual(1);
    expect(element.find('strange-current').length).toEqual(1);
    expect(element.find('strange-forecast').length).toEqual(1);
    expect(element.find('strange-footer').length).toEqual(1);
  }));
});
