/*
* @Author: miaamiaaaa
* @Date:   2018-03-11 15:51:04
* @Last Modified by:   miaamiaaaa
* @Last Modified time: 2018-03-11 17:04:31
*/
'use strict';

 var _mm    = require('util/mm.js');
require('./index.css');
//通用页面头部
var header = {
	init : function(){
		this.bindEvent();
		return this;//指向调用者
	},
	onLoad : function() {
		var keyword = _mm.getUrlParam('keyword');
		//keyword存在，则回填输入框
		if(keyword){
			$('#search-input').val(keyword);
		};
	},
	bindEvent : function() {
		var _this = this;
		//点击搜索按钮，做搜索提交
		$('#search-btn').click(function(){
			_this.searchSubmit();
		});
		//输入回车后，做搜索提交
		$('#search-btn').keyup(function(e){
			//13是回车键
			if(e.keyCode === 13){
				_this.searchSubmit;
			}
		});

	},
	//搜索的提交
	searchSubmit : function() {
		var keyword = $.trim($('#search-input').val());
		//如果提交的时候有keyword，正常跳转到list页面
		if(keyword){
			window.location.href = './list/html?keyword=' + keyword;
		}
		//如果keyword为空，直接返回首页
		else{
			_mm.goHome();
		}
	}
	
};
header.init();