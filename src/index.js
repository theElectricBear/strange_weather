import angular from 'angular';
import ngResource from 'angular-resource';

import {ForecastDataFactory} from './app/services/forecast.data.factory';
import {ConvertUnix} from './app/services/convert.unix.filter';
import {PackPrecip} from './app/services/pack.precip.filter';

import {forecastModule} from './app/forecast/index';

import {main} from './app/main';
import {header} from './app/header';
import {title} from './app/title';
import {footer} from './app/footer';

import './index.scss';

angular
	.module('app', [ngResource, forecastModule])
	.factory('ForecastDataFactory', ForecastDataFactory)
	.filter('ConvertUnix', ConvertUnix)
	.filter('PackPrecip', PackPrecip)
	.component('app', main)
	.component('strangeHeader', header)
	.component('strangeTitle', title)
	.component('strangeFooter', footer);
