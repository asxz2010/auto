
// var obj = text("QQ").findOne(10)
// if(obj){
//     toastLog("找到了QQ")
//     var x = obj.bounds().centerX()
//     var y = obj.bounds().centerY()
//     click(x,y)
//     sleep(1000)
// }

// var obj = text("动态").findOne(10)
// if(obj){
//     toastLog("找到了动态")
//     var x = obj.bounds().centerX()
//     var y = obj.bounds().centerY()
//     click(x,y)
//     sleep(1000)
// }

// var obj = text("好友动态").findOne(10)
// if(obj){
//     toastLog("找到了好友动态")
//     var x = obj.bounds().centerX()
//     var y = obj.bounds().centerY()
//     click(x,y)
//     sleep(1000)
// }

// while(true){
//     var obj = id("c7p").findOne(10)
//     if(obj){
//         if(obj.selected()){
//             toastLog("已点赞")
//             sleep(1000)
//         }else{
//             toastLog("点赞")
//             obj.click()
//             sleep(1000)
//         }
//         id("j").findOne().scrollForward()
//         sleep(2000)
//     }
// }

var obj = text("QQ11").findOnce()
if(obj){
    toastLog("1111111")
}
toastLog("22222222")



