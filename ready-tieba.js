var Utils= require('Utils.js')

Utils.init()

launch("com.baidu.tieba")

var temp,path,tiebaJson,posi,baArray,sign
sign = true
temp = true
path = '/sdcard/Pictures/tieba/tieba.json'
tiebaJson = {}
baArray = ['秦时明月','网易阴阳师','博人传','海贼王','黑色四叶草','鬼灭之刃']
storages.remove('baArray')
var baSto = storages.create('baArray')
baSto.put('baArr', baArray)

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
                // Utils.getWordsPositions(baSto.get('baArr'))

                posi = Utils.getWordsPosition(item,item.substring(1,2))
                if(posi.x != '-1'){
                    click(posi.x,posi.y)
                }else{
                    Utils.swipeTo('top')
                }
            }else{
                if(Utils.isContain('收藏','high')){
                    log('我的界面-成功')
                    tiebaJson.gzdb = Utils.getWordsPosition('关注的吧', '注', 'high')
                    if(tiebaJson.gzdb.x != '-1'){
                        Utils.savePathJson(path, tiebaJson)
                        click(tiebaJson.gzdb.x,tiebaJson.gzdb.y)
                        sleep(200)
                    }
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