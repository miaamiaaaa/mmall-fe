/*
* @Author: miaamiaaaa
* @Date:   2018-03-10 18:01:39
* @Last Modified by:   miaamiaaaa
* @Last Modified time: 2018-03-11 01:38:27
*/
'use strict';

var _mm = require('util/mm.js');

var _user = {
	//检查登录状态
	checkLogin : function(resolve, reject) {
		_mm.request({
			url     : _mm.getServerUrl('/user/get_user_info.do'),
			method  :  'POST',
			success :  resolve,
			error   :  reject

		});
	},

	//登出
	logout : function(resolve, reject) {
		_mm.request({
			url     : _mm.getServerUrl('/user/logout.do'),
			method  :  'POST',
			success :  resolve,
			error   :  reject

		});
	}
}

module.exports = _user;