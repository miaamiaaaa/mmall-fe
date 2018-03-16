/*
* @Author: miaamiaaaa
* @Date:   2018-03-15 23:34:55
* @Last Modified by:   miaamiaaaa
* @Last Modified time: 2018-03-16 15:59:59
*/
'use strict'

require('./index.css');
var navSide = require('page/common/nav-simple/index.css');
var _mm = require('util/mm.js');

$(function(){
	var type = _mm.getUrlParam('type') || 'default',
		//显示对应的提示元素
		$element = $('.' + type + '-success').show();
})