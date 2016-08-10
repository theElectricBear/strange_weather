import angular from 'angular';
import 'angular-mocks';
import {header} from './header';

describe('header component', () => {
  beforeEach(() => {
    angular
      .module('strangeHeader', ['app/header.html'])
      .component('strangeHeader', header);
    angular.mock.module('strangeHeader');
  });

  it('should render \'Strange Weather\'', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<strange-header></strange-header>')($rootScope);
    $rootScope.$digest();
    const header = element.find('a');
    expect(header.html().trim()).toEqual('Strange Weather');
  }));
});
