
// console.show();
// var r = http.get("www.baidu.com");
// log("code = " + r.statusCode);
// log("html = " + r.body.string());

// var city = "广州";
// var res = http.get("http://www.sojson.com/open/api/weather/json.shtml?city=" + city);
// if(res.statusCode != 200){
//     toast("请求失败: " + res.statusCode + " " + res.statusMessage);
// }else{
//     var weather = res.body.json();
//     log(weather);
//     toast(util.format("温度: %s 湿度: %s 空气质量: %s", weather.data.wendu,
//         weather.data.shidu, weather.quality));
// }

// var url = "https://login.taobao.com/member/login.jhtml";
// var username = "18862517731";
// var password = "llzsy1125";
// var res = http.post(url, {
//     "TPL_username": username,
//     "TPL_password": password
// });
// var html = res.body.string();
// if(html.contains("页面跳转中")){
//     toast("登录成功");
// }else{
//     toast("登录失败");
// }






