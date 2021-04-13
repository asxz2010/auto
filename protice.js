var Utils= require('Utils.js')

launchApp('百度贴吧')

var temp
temp = true

sleep(4000)
while(temp){
    sleep(200)
    if(text('搜索').findOne()){
        log('首页界面-成功')
        let mine = text('我的').findOne()
        click(mine.bounds().centerX(),mine.bounds().centerY())
        sleep(500)
        className('android.widget.LinearLayout').depth(2).findOne()? log('我关注的吧界面-成功'):''
        temp = false
    }
}



