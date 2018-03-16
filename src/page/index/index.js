/*
* @Author: miaamiaaaa
* @Date:   2018-03-06 22:34:12
* @Last Modified by:   miaamiaaaa
* @Last Modified time: 2018-03-15 23:06:17
*/

var mm = require('util/mm.js');
require('page/common/header/index.js');
var navSide = require('page/common/nav-side/index.js');
require('page/common/nav/index.js');

navSide.init({
	name : 'user-center'
});



// require('./index.css');
//alert(123);
// mm.request({
// 	url : '/product/list.do?keyword=1',
// 	success : function(res) {
// 		console.log(res);
// 	},
// 	error : function(res) {
// 		console.log(res);
// 	}

// });
// console.log(mm.getUrlParam('test'));

// var html = '<div>{{data}}</div>';
// var data = {
// 	data : 'hello'
// }
// console.log(mm.renderHtml(html, data));