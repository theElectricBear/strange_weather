import angular from 'angular';

import {day} from './day';
import {precip} from './precip';
import {forecast} from './forecast';

export const forecastModule = 'forecast';

angular
  .module(forecastModule, [])
  .component('strangeDay', day)
  .component('strangePrecip', precip)
  .component('strangeForecast', forecast);
