// threads.start(function(){
//     log("子线程")
//     for(let i=0;i<10;i++){
//         log(i)
//         sleep(1000)
//     }
// });
// sleep(3000)
// log("主线程")


// var thread = threads.start(function(){
//     while(true){
//         log("子线程")
//         sleep(1000)
//     }
// })
// //停止线程执行
// thread.interrupt();


// var i = 0;
// threads.start(function(){
//     while(true){
//         log(i++);
//         sleep(1000)
//     }
// });
// while(true){
//     log(i++);
//     sleep(1000)
// }

var i = threads.atomic();
threads.start(function(){
    while(true){
        log(i.getAndIncrement());
        sleep(1000)
    }
});
while(true){
    log(i.getAndIncrement());
    sleep(1000)
}