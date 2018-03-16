/*
* @Author: miaamiaaaa
* @Date:   2018-02-14 00:44:18
* @Last Modified by:   miaamiaaaa
* @Last Modified time: 2018-03-09 15:04:20
*/

'use strict';
var Hogan = require('hogan');
var conf = {
	serverHost : " "
};
var _mm = {

	//var _this = this;
	request : function(param){
		var _this = this;
		$.ajax({
			type     :   param.method || 'get',
			url      :   param.url    || '',
			dataType :   param.type   || 'json',
			data     :   param.data   || '',
			success  :   function(res){
				//请求成功
				if(0 === res.status){
					typeof param.success === 'function' && param.success(res.data, res.msg);
				//没有登录状态
				}else if(10 === res.status){
					_this.doLogin();
				}else if(1 === res.status) {
					typeof param.error === 'function' && param.error(res.data, res.msg);
				}
			},
			error    :    function(err){
				typeof param.error === 'function' && param.error(err.statusText);
			}
		});
	},
	//获取服务器地址
	getServerUrl : function(path) {
		return conf.serverHost + path;
	},
	//获取url参数
	getUrlParam : function(name) {
		var reg     = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
		var result  = window.location.search.substr(1).match(reg);
		return result ? decodeURIComponent(result[2]) : null;

	},
	//渲染html模板
	renderHtml : function(htmlTemplate, data) {
		var template = Hogan.compile(htmlTemplate),
			result   = template.render(data);
		return result;

	},
	//成功提示：
	suceessTips : function(msg) {
		alert(msg || '操作成功！');
	},
	//错误提示
	errorTips : function(msg) {
		alert(msg || '哪里不对了');
	},
	//字段的验证，支持非空、手机、邮箱的判断
	validate : function(value, type) {
		var value = $.trim(value);
		//非空验证
		if('require' === type) {
			return !!value;
		}
		//手机号验证
		if('phone' === type) {
			return /^1\d{10}$/.test(value);
		}
		//邮箱验证
		if('email' === type) {
			return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+[\.][a-zA-Z0-9_-]+$/.test(value);
		}

	},
	doLogin : function() {
		window.location.href = './login.html?redirect = ' + encodeURIComponent(window.location.href);
	},
	goHome  : function() {
		window.location.href =  './index.html';
	}
};

module.exports = _mm;