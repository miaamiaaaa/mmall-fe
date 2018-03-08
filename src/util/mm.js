/*
* @Author: miaamiaaaa
* @Date:   2018-02-14 00:44:18
* @Last Modified by:   miaamiaaaa
* @Last Modified time: 2018-02-14 12:53:30
*/

'use strict';

var _mm = {
	request : function(param){
		$.ajax({
			type     :   param.method || 'get',
			url      :   param.url    || ''.
			dataType :   param.type   || 'jsom',
			data     :   param.data   || '',
			success  :   function(res){
				if(0 === res.status){
					typeof param.success === 'function' && param.success
				}else if(10 === res.status){

				}
			},
			error    :    function(err){

			}
		});
	},
	doLogin : function() {
		window.location.href = './login.html?redirect = ' + window.location.href
	}
};

module.exports = _mm;