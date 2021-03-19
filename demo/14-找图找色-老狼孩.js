// //请求截图
if(!requestScreenCapture()){
    toast("请求截图失败");
    exit();
}
// //连续截图10张图片(间隔1秒)并保存到存储卡目录
// for(var i = 0; i < 10; i++){
//     captureScreen("/sdcard/screencapture" + i + ".png");
//     sleep(1000);
// }

var x = 350, y = 300

// // var c = images.pixel(captureScreen(), x, y)

// var isDetected = images.detectsColor(captureScreen(), "#02E06D", x, y)

// log(isDetected)

// var point = findColorEquals(captureScreen(), "#1A73E9") // 精确找色
// if(point){
//     log(point.x, point.y)
// }

//在该图片中找色，指定找色区域为在位置(400, 500)的宽为300长为200的区域，指定找色临界值为4，模糊找色
var img = images.read("/sdcard/Pictures/Screenshots/Screenshot_20210319-152120.png")
if(!img){
    log("没有该图片");
    exit();
}
var point = findColor(img, "#06C562", {
    region: [350, 340],
    threshold: 4
});
if(point){
   log("找到啦:" + point);
}else{
    log("没找到");
}

