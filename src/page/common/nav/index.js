/*
* @Author: miaamiaaaa
* @Date:   2018-03-10 16:56:29
* @Last Modified by:   miaamiaaaa
* @Last Modified time: 2018-03-11 01:37:05
*/
'use strict';

var _mm    = require('util/mm.js');
var _user  = require('service/user-service.js');
var _cart  = require('service/cart-service.js');
require('./index.css');
//导航
var nav = {
	init : function(){
		this.bindEvent();
		this.loadUserInfo();
		this.loadCartCount();
		return this;//指向调用者
	},
	bindEvent : function() {
		//登录点击事件
		$('.js-login').click(function() {
			_mm.doLogin();
		});
		//注册点击事件
		$('.js-register').click(function() {
			window.location.href = './register.html';
		});
		//退出点击事件
		$('.js-logout').click(function() {
			_user.logout(function(res){
				window.location.reload();
			}, function(errMsg) {
				_mm.errorTips(errMsg);
			});
		});
	},
	//加载用户信息
	loadUserInfo : function() {
		_user.checkLogin(function(res){
			$('.user.not-login').hide().siblings('.user.login').show()
				.find('.username').text(res.username);
		}, function(msg){
			//do nothing
		});
	},
	//加载购物车数量
	loadCartCount : function() {
		_cart.getCartCount(function(res){
			$('.nav .cart-count').text(res || 0);
		}, function(msg){
			$('.nav .cart-count').text(0);
		});
	}
};

module.exports = nav.init();