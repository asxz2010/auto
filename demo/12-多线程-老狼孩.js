// var thread = threads.start(function(){
//     while(true){
//         log("子线程");
//         sleep(500)
//     }
// });
// while(true){
//     log("脚本主线程");
//     sleep(500)
// }


var thread = threads.start(function(){
    while(true){
        log("子线程");
    }
});
sleep(5000)
//停止线程执行
thread.interrupt();


