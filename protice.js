var Utils= require('Utils.js')

launchApp('百度贴吧')

var temp,path,teibaJson
temp = true
path = '/sdcard/Pictures/tieba/tieba.json'

sleep(4000)
while(temp){
    sleep(200)
    if(text('搜索').findOne()){
        log('首页界面-成功')
        let mine = text('我的').findOne()
        click(mine.bounds().centerX(),mine.bounds().centerY())
        sleep(500)
        if(className('android.widget.LinearLayout').depth(1).findOne()){
            log('我的界面-成功')
            teibaJson
            temp = false
        }
    }
}

