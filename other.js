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

let path = '/sdcard/Pictures/tieba/tieba.json'
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

while(true){
    sleep(random(2500,3000))
    var UIArr = id('thread_extend_info').find()
    for(let item of UIArr){
        click(item.bounds().centerX(),item.bounds().centerY())
        sleep(random(2500,3000))
        Utils.swipeTo()
        sleep(random(2500,3000))
    }
    Utils.swipeTo('top')
}

