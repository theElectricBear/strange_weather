import angular from 'angular';
import 'angular-mocks';
import {current} from './current';

describe('current component', () => {
  beforeEach(() => {
    angular
      .module('strangeCurrent', ['app/current.html'])
      .component('strangeCurrent', current);
    angular.mock.module('strangeCurrent');
  });

  it('should render \'Seattle\'', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<strange-current></strange-current>')($rootScope);
    $rootScope.$digest();
    const current = element.find('h1');
    expect(current.html().trim()).toEqual('Seattle');
  }));
});
