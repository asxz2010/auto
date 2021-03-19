
// //请求截图
// requestScreenCapture(false);
// //截图
// var im = captureScreen();
// var path = "/sdcard/screenshot.png";
// //保存图片
// im.saveTo(path);
// //把图片加入相册
// media.scanFile(path);

// // 播放音乐
// media.playMusic("/sdcard/Pictures/爱不释手.mp3");
// // 让音乐播放完
// sleep(media.getMusicDuration());

// // 播放音乐
// media.playMusic("/sdcard/Pictures/爱不释手.mp3");
// // 调整到30秒的位置
// media.musicSeekTo(30 * 1000);
// // 等待音乐播放完成
// sleep(media.getMusicDuration() - 30 * 1000);

var sh = new Shell(true);
//强制停止微信
sh.exec("am force-stop com.tencent.mm");
sh.exit();



 