/*
	判断用户是否已登录，若已登录则展示用户名，否则展示登录
*/
var sso_server = 'https://id.dahe.cn';
var redirectUrl = location.href;
var url = sso_server + '/dahe/sso/info?service=' + redirectUrl;
var defaultLoginUrl = sso_server + '/check';
var defaultLink = '<a href=' + defaultLoginUrl + '?service=' + redirectUrl + '&redirect=' + location.href + ' target="_blank">' + '登录' + '</a>';
$.ajax({
    type: "GET",
    url: url,
    async: true,
    dataType: 'jsonp',
    jsonp: 'jsonpCallback',
    jsonpCallback: "success_jsonpCallback", //自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
    success: function(data) {
    	// console.log(data);
        var success = data.success;
        var home = data.obj.homeUrl;
        var loginUrl = data.obj.loginUrl;
        if (success) {
            var username = data.obj.principal.username;
            if(username.length > 9){
                $("#logined").attr('href',home);
                $("#logined").attr('title',username);
                $("#logined").html(username.substring(0,9)+'...');
            }else{
                $("#logined").attr('href',home);
                $("#logined").html(username);
            }
        } else {
        	$("#logined").attr('href',loginUrl);
            $("#logined").html('登录');
        }
    },
    error: function(request) {
    	$("#logined").attr('href',defaultLink);
        $("#logined").html('登录');
    },
});
