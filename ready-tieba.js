var Utils= require('Utils.js')

Utils.init()

launchApp('百度贴吧')

var temp,path,tiebaJson,posi,baArray,sign
sign = true
temp = true
path = '/sdcard/Pictures/tieba/tieba.json'
tiebaJson = {}
baArray = ['秦时明月','网易阴阳师','博人传','海贼王','黑色四叶草','鬼灭之刃']
sleep(4000)
// while(temp){
//     sleep(200)
//     if(text('搜索').findOne()){
//         log('首页界面-成功')
//         let mine = text('我的').findOne()
//         click(mine.bounds().centerX(),mine.bounds().centerY())
//         sleep(500)
//         if(className('android.widget.LinearLayout').depth(1).findOne()){
//             log('我的界面-成功')
//             tiebaJson.gzdb = Utils.getWordsPosition('关注的吧', '注', 'high')
//             if(tiebaJson.gzdb.x != '-1'){
//                 click(tiebaJson.gzdb.x,tiebaJson.gzdb.y)
//                 sleep(200)
//                 let tempr = true
//                 while(tempr){
//                     sleep(200)
//                     posi = Utils.getWordsPosition('秦时明月','时')
//                     if(posi.x != '-1'){
//                         log('我关注的吧界面-成功')
//                         click(posi.x,posi.y)
//                         tempr = false 
//                     }
//                 }
//             }else{
//                 log('关注的吧坐标-失败')
//             }
//             temp = false
//         }
//     }
// }

// for(let item of baArray){
//     console.log(item)
// }

for(let item of baArray){
    log(1111111)
    while(temp){
        log(22222)
        sleep(200)
        if(Utils.isContain(item+'吧')){
            log(333333)
            log(item+'吧界面-已打开')
            temp = Utils.swipeTo()? false:true
        }else{
            log(555555)
            if(Utils.isContain('编辑')){
                log(666666)
                log('我关注的吧界面-成功')
                posi = Utils.getWordsPosition(item,item.substring(1,2))
                if(posi.x != '-1'){
                    click(posi.x,posi.y)
                }else{
                    Utils.swipeTo('top')
                }
            }else{
                log(777777)
                if(Utils.isContain('关注的吧','high')){
                    log(888888)
                    log('我的界面-成功')
                    tiebaJson.gzdb = Utils.getWordsPosition('关注的吧', '注', 'high')
                    if(tiebaJson.gzdb.x != '-1'){
                        log(999999)
                        Utils.savePathJson(path, tiebaJson)
                        click(tiebaJson.gzdb.x,tiebaJson.gzdb.y)
                        sleep(200)
                    }
                }else{
                    log(0000000)
                    let mine = text('我的').findOnce()
                    if(mine){
                        log(12345)
                        log('贴吧打开-成功')
                        click(mine.bounds().centerX(),mine.bounds().centerY())
                    }
                }
            } 
        }
    }
    log(44444)
    temp = true
}