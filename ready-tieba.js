var Utils= require('Utils.js')


var appFlag=false,appPackageName = 'com.baidu.tieba'
currentPackage()==appPackageName? appFlag=true:launch(appPackageName)
Utils.init()
Utils.testAppResp(appPackageName)


var temp,path,tiebaJson,posi,baArray,sign,flag,str_temp
sign = true
temp = true
path = '/sdcard/Pictures/tieba/tieba.json'
baArray = [
    {
        name:'火影忍者',
        waterTxtPath:'/sdcard/Pictures/tieba/public.txt',
        waterTimes: '100'
    },
    {
        name:'海贼王',
        waterTxtPath:'/sdcard/Pictures/tieba/public.txt',
        waterTimes: '100'
    },
    {
        name:'进击的巨人',
        waterTxtPath:'/sdcard/Pictures/tieba/jjdjr.txt',
        waterTimes: '100'
    }
]

tiebaJson = Utils.getPathJson(path)
if(tiebaJson==undefined){
    files.write(path,JSON.stringify({}))
}
tiebaJson = Utils.getPathJson(path)

appFlag? '':sleep(4000)
for(let item of baArray){
    while(temp){
        sleep(200)
        if(Utils.isContain('最新')&&Utils.isContain('精华')){
            if(Utils.swipeTo()){
                sleep(1000)
                temp = Utils.isContain('编辑')? false:true
            }
        }else{
            if(Utils.isContain('编辑')){
                log('我关注的吧界面-成功')
                if(sign){
                    for(let i=0;i<=2;i++){
                        Utils.SwipeTo()
                        sleep(2000)
                    }
                }
                if(clickBa(item.name)){
                    log('/*************** '+item.name+'吧 ***************/')
                    waterTie(item.waterTimes,item.waterTxtPath)
                }
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
    threads.shutDownAll()
}

/**
 * @description 点击具体贴吧
 * @param {Strinig} name
 */
function clickBa(name){
    flag = Utils.isContain(name)
    if(flag){
        posi = Utils.getWordsPosition(name,Utils.getRanWord(name))
        if(posi.x != '-1'){
            click(posi.x,posi.y)
            sleep(500)
            sign = true
        }
    }else{
        Utils.swipeTo('top')
        sign = false
        clickBa(name)
    }
    return sign
}

/**
 * @description 水贴
 * @param {*} times 
 * @param {Strinig} waterPath
 */
function waterTie(times,waterPath){
    var count = 0
    while(count<times){
        sleep(random(3000,6000))
        Utils.baSwipeUp()
        sleep(random(3000,6000))
        var UIObj = id('thread_extend_info').findOnce()
        if(UIObj!=null&&Utils.isContain('复于')){
            if(UIObj.text() != str_temp){
                str_temp = UIObj.text()
                click(UIObj.bounds().centerX(),UIObj.bounds().centerY())
                sleep(random(3000,6000))
                ranSwipe()
                // *************** 发送水贴内容开始 ***************
                let tempUi = id('pb_editor_tool_comment_reply_text').findOnce()
                if(tempUi!=null){
                    click(tempUi.bounds().centerX(),tempUi.bounds().centerY())
                    sleep(500)
                    let text = Utils.getWaterWords(waterPath)
                    if(className('android.widget.EditText').findOnce().setText(text)){
                        let send_text = '发表'
                        if(Utils.isContain(send_text)){
                            if(tiebaJson.send==undefined){
                                tiebaJson.send = Utils.getWordsPosition(send_text,Utils.getRanWord(send_text))
                                Utils.savePathJson(path, tiebaJson)
                            }
                            click(tiebaJson.send.x,tiebaJson.send.y)
                            sleep(random(3000,5000))
                        }
                    }
                }
                // *************** 发送水贴内容结束 ***************
                Utils.swipeTo()
                sleep(random(2500,3000))
                count++
                log('水贴 +'+count)
            }
        }
        count == times? '':Utils.baSwipeUp()
    }
}

/**
 * @description 随机上下滑动几次
 */
function ranSwipe(){
    for(let i=0;i<=random(3,7);i++){
        if(i===3 || i===6){
            Utils.tieBaRanSwipe('down')
        }else{
            Utils.tieBaRanSwipe()
        }
        sleep(3000)
    }
}


