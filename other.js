var Utils= require('Utils.js')

// Utils.init()
// var baArray = ['秦时明月','网易阴阳师','博人传','海贼王','黑色四叶草','鬼灭之刃']

// log(Utils.getWordsPositions(baArray))

// for(let i=0; i<=1; i++){
//     Utils.SwipeTo('top')
//     sleep(2500)
// }

// let w = device.width
//     let h = device.height
// Swipe(random(1,w-1),random(1,h/11),random(1,w-1),random(h/11*10,h-1),random(100,200))

// let aaa = '网易阴阳师'
// for(let i=0; i<=10; i++){
//     log(Utils.getRanWord(aaa))
// }

// let path = '/sdcard/Pictures/tieba/tieba.json'
// let aaa = Utils.getPathJson(path)
// if(aaa == undefined){
//     log(11111)
// }else{
//     log(2222222)
// }
// let tiebaJson = Utils.getPathJson(path)
// if(tiebaJson==undefined){
//     files.write(path,JSON.stringify({}))
// }
// if(tiebaJson.gzdb==undefined){
//     log(2222222222)
// }
// tiebaJson = Utils.getPathJson(path)
// log(1111111111)
// log(tiebaJson.aaa)

// var aaa = 1
// var ddd = 2
// log(aaa)
//  function bbb(){
//     var ccc =  Utils.isContain('手机')
//     ccc.then(res=>{
//         log(res)
//     })
// }
// bbb()
// log(ddd)


// log(texts.readline('2'))
// log(texts.readlines())

// log(Utils.getWaterWords('/sdcard/Pictures/tieba/jjdjr.txt'))

// while(true){
//     sleep(random(2500,3000))
//     var UIArr = id('thread_extend_info').findOnce()
//     click(UIArr.bounds().centerX(),UIArr.bounds().centerY())
//     sleep(random(2500,3000))
//     Utils.swipeTo()
//     sleep(random(2500,3000))
//     Utils.swipeTo('top')
// }

// function waterTie(times){
//     var count = 0
//     while(count<times){
//         sleep(random(2500,3000))
//         var UIObj = id('thread_extend_info').findOnce()
//         if(UIObj!=null){
//             click(UIObj.bounds().centerX(),UIObj.bounds().centerY())
//             sleep(random(2500,3000))
//             Utils.swipeTo()
//             sleep(random(2500,3000))
//         }
//         log(count)
//         count == times-1? '':Utils.swipeTo('top')
//         count++
//     }
//     Utils.swipeTo()
// }
// waterTie(3)

// clickBa('进击的巨人')
// function clickBa(name){
//     var sign
//     var flag = Utils.isContain(name)
//     if(flag){
//         var posi = Utils.getWordsPosition(name,Utils.getRanWord(name))
//         if(posi.x != '-1'){
//             click(posi.x,posi.y)
//             sleep(500)
//             sign = true
//             return true
//         }
//     }else{
//         Utils.swipeTo('top')
//         sign = false
//         clickBa(name)
//     }
// }

// let aaa = clickBa('进击的巨人')
// log(aaa)

// var UIArr = id('thread_extend_info').findOnce()
// log(UIArr)

// swipe(random(w/9*2,w/9*7),random(h/11*9,h/11*10),random(w/9*2,w/9*7),random(1,10),random(400,500))

// let tempUi = id('pb_editor_tool_comment_reply_text').findOnce()
//             if(tempUi!=null){
//                 click(tempUi.bounds().centerX(),tempUi.bounds().centerY())
//                 sleep(500)
//                 let text = Utils.getWaterWords('/sdcard/Pictures/tieba/jjdjr.txt')
//                 className('android.widget.EditText').findOnce().setText(text)
//             }

log(depth(11).find().length)