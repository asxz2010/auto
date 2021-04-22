var Utils= require('Utils.js')

Utils.init()

launch("com.baidu.tieba")

var temp,path,tiebaJson,posi,baArray,sign,flag
sign = true
temp = true
path = '/sdcard/Pictures/tieba/tieba.json'
baArray = ['进击的巨人','黑色四叶草','秦时明月','网易阴阳师','黑色五叶草','博人传','海贼王','鬼灭之刃']

tiebaJson = Utils.getPathJson(path)
if(tiebaJson==undefined){
    files.write(path,JSON.stringify({}))
}
tiebaJson = Utils.getPathJson(path)

sleep(4000)
for(let item of baArray){
    while(temp){
        sleep(200)
        if(Utils.isContain(item+'吧')){
            log('/*************** '+item+'吧 ***************/')
            if(Utils.swipeTo()){
                sleep(1000)
                temp = Utils.isContain('编辑')? false:true
            }
        }else{
            if(Utils.isContain('编辑')){
                log('我关注的吧界面-成功')
                if(sign){
                    log(11111)
                    for(let i=0;i<=1;i++){
                        log(222222)
                        Utils.SwipeTo()
                        sleep(2000)
                    }
                }
                log(333333)
                clickBa(item)
            }else{
                if(Utils.isContain('收藏','high')){
                    log('我的界面-成功')
                    if(tiebaJson.gzdb==undefined){
                        let str = '关注的吧'
                        tiebaJson.gzdb = Utils.getWordsPosition(str, Utils.getRanWord(str), 'high')
                        if(tiebaJson.gzdb.x != '-1'){
                            click(tiebaJson.gzdb.x,tiebaJson.gzdb.y)
                            Utils.savePathJson(path, tiebaJson)
                        }
                    }else{
                        if(tiebaJson.gzdb.x != '-1'){
                            click(tiebaJson.gzdb.x,tiebaJson.gzdb.y)
                        }
                    }
                    sleep(200)
                }else{
                    let mine = text('我的').findOnce()
                    if(mine){
                        log('贴吧打开-成功')
                        click(mine.bounds().centerX(),mine.bounds().centerY())
                    }
                }
            } 
        }
    }
    temp = true
}

/**
 * @description 点击具体贴吧
 * @param {Strinig} item
 */
function clickBa(item){
    flag = Utils.isContain(item)
    if(flag){
        posi = Utils.getWordsPosition(item,Utils.getRanWord(item))
        if(posi.x != '-1'){
            click(posi.x,posi.y)
            sign = true
        }
    }else{
        Utils.swipeTo('top')
        sign = false
        clickBa(item)
    }
}