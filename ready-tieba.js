var Utils= require('Utils.js')

launchApp('百度贴吧')

var temp,path,teibaJson,posi
temp = true
path = '/sdcard/Pictures/tieba/tieba.json'
teibaJson = {}

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
//             teibaJson.gzdb = Utils.getWordsPosition('关注的吧', '注', 'high')
//             if(teibaJson.gzdb.x != '-1'){
//                 click(teibaJson.gzdb.x,teibaJson.gzdb.y)
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


// while(temp){
//     sleep(200)
//     let mine = text('我的').findOne()
//     if(mine){
//         log('贴吧打开-成功')
//         click(mine.bounds().centerX(),mine.bounds().centerY())
//         sleep(200)
//         if(Utils.isContain('我的贴子')){
//             log('我的界面-成功')
//             teibaJson.gzdb = Utils.getWordsPosition('关注的吧', '注', 'high')
//             if(teibaJson.gzdb.x != '-1'){
//                 click(teibaJson.gzdb.x,teibaJson.gzdb.y)
//                 sleep(200)
//                 let tempr = true
//                 while(tempr){
//                     sleep(200)
//                     if(Utils.isContain('我关注的吧')){
//                         log('我关注的吧界面-成功')
//                         posi = Utils.getWordsPosition('秦时明月','时')
//                         if(posi.x != '-1'){
//                             click(posi.x,posi.y)
//                             tempr = false 
//                         }
//                     }
//                 }
//             }else{
//                 log('关注的吧坐标-失败')
//             }
//             temp = false
//         }
//     }
// }


while(temp){
    sleep(200)
    
    if(Utils.isContain('编辑')){
        log('我关注的吧界面-成功')
        posi = Utils.getWordsPosition('秦时明月','时')
        if(posi.x != '-1'){
            click(posi.x,posi.y)
            tempr = false 
        }
    }else{
        if(Utils.isContain('关注的吧')){
            log('我的界面-成功')
            teibaJson.gzdb = Utils.getWordsPosition('关注的吧', '注', 'high')
            if(teibaJson.gzdb.x != '-1'){
                click(teibaJson.gzdb.x,teibaJson.gzdb.y)
                sleep(200)
            }
        }else{
            let mine = text('我的').findOne()
            if(mine){
                log('贴吧打开-成功')
                click(mine.bounds().centerX(),mine.bounds().centerY())
            }
        }
    }
    
}