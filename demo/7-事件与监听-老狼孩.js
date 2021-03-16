
// //启用按键监听
// events.observeKey();
// //监听音量上键按下
// events.onKeyDown("volume_up", function(event){
//     toast("音量上键被按下了");
// });
// //监听菜单键按下
// events.onKeyDown("home", function(event){
//     toast("home键被按下了");
//     exit();
// });

// //监听音量下键弹起
// events.onKeyUp("volume_down", function(event){
//     toast("音量上键弹起");
// });
// //监听Home键弹起
// events.onKeyUp("home", function(event){
//     toast("Home键弹起");
//     exit();
// });

// events.setKeyInterceptionEnabled("volume_down", true);
// events.observeKey();
// events.onKeyDown("home", ()=>{
//     log("home键被按下");
// });

// //启用触摸监听
// events.observeTouch();
// //注册触摸监听器
// events.onTouch(function(p){
//     //触摸事件发生时, 打印出触摸的点的坐标
//     log(p.x + ", " + p.y);
// });

auto();
events.observeKey();
events.on("key", function(keyCode, event){
    if(keyCode == keys.home && event.getAction() == event.ACTION_UP){
        toast("菜单键按下");
    }
});



