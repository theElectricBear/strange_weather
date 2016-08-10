import angular from 'angular';
import 'angular-mocks';
import {footer} from './footer';

describe('footer component', () => {
  beforeEach(() => {
    angular
      .module('strangeFooter', ['app/footer.html'])
      .component('strangeFooter', footer);
    angular.mock.module('strangeFooter');
  });

  it('should render \'The Electric Bear\'', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<strange-footer></strange-footer>')($rootScope);
    $rootScope.$digest();
    const footer = element.find('a');
    expect(footer.html().trim()).toEqual('The Electric Bear');
  }));
});
