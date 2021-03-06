import angular from 'angular';
import ngResource from 'angular-resource';

import {ForecastDataFactory} from './app/services/forecast.data.factory';
import {convertUnix} from './app/services/convert.unix.filter';
import {packPrecip} from './app/services/pack.precip.filter';

import {forecastModule} from './app/forecast/index';

import {main} from './app/main';
import {header} from './app/header';
import {current} from './app/current';
import {footer} from './app/footer';

import './index.scss';

angular
	.module('app', [ngResource, forecastModule])
	.factory('ForecastDataFactory', ForecastDataFactory)
	.filter('convertUnix', convertUnix)
	.filter('packPrecip', packPrecip)
	.component('app', main)
	.component('strangeHeader', header)
	.component('strangeCurrent', current)
	.component('strangeFooter', footer);
