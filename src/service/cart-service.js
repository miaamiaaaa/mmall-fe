/*
* @Author: miaamiaaaa
* @Date:   2018-03-10 18:41:06
* @Last Modified by:   miaamiaaaa
* @Last Modified time: 2018-03-11 01:39:21
*/
'use strict'


var _mm = require('util/mm.js');

var _cart = {
	//获取购物车数量
	getCartCount : function(resolve, reject) {
		_mm.request({
			url     : _mm.getServerUrl('/cart/get_cart_product_count.do'),
			success :  resolve,
			error   :  reject

		});
	}
}

module.exports = _cart;