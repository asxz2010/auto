var Utils= require('Utils.js')


var appFlag=false,appPackageName = 'com.baidu.tieba'
currentPackage()==appPackageName? appFlag=true:launch(appPackageName)
Utils.init()
Utils.testAppResp(appPackageName)


var temp,path,tiebaJson,posi,baArray,sign,flag,str_temp,start,commonPath
sign = true
temp = true
start = true
path = '/sdcard/Pictures/tieba/tieba.json'
commonPath = '/storage/emulated/0/Pictures/tieba/'
baArray = []

/***************  ***************/
let baInfoStr = files.read('/sdcard/Pictures/tieba/ba.txt')
let baInfoArr = baInfoStr.split(";")
for(let baItem of baInfoArr){
    let baInfo = baItem.split(",")
    if(baInfo.length!=3){
        toast('漏填或多填，每组应是3项信息')
        exit()
    }

    let num = Number(baInfo[1])
    if(isNaN(num)){
        toast('请填写正确的次数格式！')
        exit()
    }else if(baInfo[2].indexOf('.txt')<0){
        toast('水贴的文本文件名错误！')
        exit()
    }else if(!files.exists(commonPath+baInfo[2])){
        toast('水贴的文本文件不存在！')
        exit()
    }else{
        baArray.push({
            name: baInfo[0],
            waterTimes: baInfo[1],
            waterTxtPath: commonPath+baInfo[2]
        })
    }
}

while(start){
    sleep(3000)
    if(baArray.length>0){
        tiebaJson = Utils.getPathJson(path)
        if(tiebaJson==undefined){
            files.write(path,JSON.stringify({}))
        }
        tiebaJson = Utils.getPathJson(path)

        appFlag? '':sleep(4000)
        for(let item of baArray){
            while(temp){
                sleep(200)
                if(text('精华').findOnce()&&text('最新').findOnce()){
                    log('/*************** '+item.name+'吧 ***************/')
                    if(Utils.swipeTo()){
                        sleep(random(3000,5000))
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
        start = false
    }    
}

/**
 * @description 点击具体贴吧
 * @param {Strinig} name
 */
function clickBa(name){
    sleep(1000)
    flag = Utils.isContain(name)
    sign = false
    if(flag){
        posi = Utils.getWordsPosition(name,Utils.getRanWord(name))
        if(posi.x != '-1'){
            click(posi.x,posi.y)
            sleep(500)
            sign = true
        }
    }else{
        Utils.swipeTo('top')
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
    sleep(random(3000,6000))
    Utils.baSwipeUp()
    while(count<times){
        sleep(random(3000,6000))
        var UIObj = id('thread_extend_info').findOnce() // 查找贴子控件
        if(UIObj!=null&&Utils.isContain('复于')){
            if(UIObj.text() != str_temp){ // 判断是否水过贴
                str_temp = UIObj.text()
                click(UIObj.bounds().centerX(),UIObj.bounds().centerY())
                sleep(random(3000,6000))
                if(id('pb_head_owner_info_user_name').findOnce()!=null){    // 是否已经进入贴子
                    ranSwipe()
                    // *************** 发送水贴内容开始 ***************
                    let tempUi = id('pb_editor_tool_comment_reply_text').findOnce()
                    if(tempUi!=null){
                        click(tempUi.bounds().centerX(),tempUi.bounds().centerY())
                        sleep(500)
                        let inputFlag = true    // 查找文本框
                        while(inputFlag){
                            let textInput = className('android.widget.EditText').findOnce()
                            if(textInput!=null){
                                let text = Utils.getWaterWords(waterPath)
                                textInput.setText(text)
                                let send_text = '发表'
                                if(Utils.isContain(send_text)){
                                    if(tiebaJson.send==undefined){
                                        tiebaJson.send = Utils.getWordsPosition(send_text,Utils.getRanWord(send_text))
                                        Utils.savePathJson(path, tiebaJson)
                                    }
                                    click(tiebaJson.send.x,tiebaJson.send.y)
                                    sleep(random(3000,5000))
                                    let noUi = id('no').findOnce()  // 判断是否需要关注并发表
                                    noUi==null? '':noUi.click()
                                }
                                inputFlag = false
                            }
                        }
                        
                    }
                    backTieList()
                }
                // *************** 发送水贴内容结束 ***************
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

/**
 * @description 发完贴后返回贴子列表
 */
function backTieList(){
    Utils.swipeTo()
    sleep(random(3000,4000))
    if(text('精华').findOnce()==null||text('最新').findOnce()==null){
        backTieList()
    }
}

/**
 * @description 发完一个吧所有贴后返回吧列表
 */
function backBaList(){
    Utils.swipeTo()
    sleep(random(3000,4000))
    if(!Utils.isContain('编辑')){
        backBaList()
    }
}