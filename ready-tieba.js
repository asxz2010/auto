var Utils= require('Utils.js')

Utils.init()
var appFlag=false,appPackageName = 'com.baidu.tieba'
currentPackage()==appPackageName? appFlag=true:launch(appPackageName)



var temp,path,tiebaJson,posi,baArray,sign,flag
sign = true
temp = true
path = '/sdcard/Pictures/tieba/tieba.json'
// baArray = ['进击的巨人','黑色四叶草','秦时明月','网易阴阳师','黑色五叶草','博人传','海贼王','鬼灭之刃']
// waterTxts = {
//     'jjdjr':''
// }
baArray = [
    {
        name:'海贼王',
        waterTxtPath:''
    },
    {
        name:'秦时明月',
        waterTxtPath:''
    },
    {
        name:'网易阴阳师',
        waterTxtPath:''
    },
    {
        name:'黑色五叶草',
        waterTxtPath:''
    },
    {
        name:'博人传',
        waterTxtPath:''
    },
    {
        name:'进击的巨人',
        waterTxtPath:'/sdcard/Pictures/tieba/jjdjr.txt'
    },
    {
        name:'鬼灭之刃',
        waterTxtPath:''
    },
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
            log('/*************** '+item.name+'吧 ***************/')
            if(Utils.swipeTo()){
                sleep(1000)
                temp = Utils.isContain('编辑')? false:true
            }
        }else{
            if(Utils.isContain('编辑')){
                log('我关注的吧界面-成功')
                if(sign){
                    for(let i=0;i<=1;i++){
                        Utils.SwipeTo()
                        sleep(2000)
                    }
                }
                if(clickBa(item.name)){
                    waterTie(3,item.waterTie)
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
 * @param {Strinig} path
 */
function waterTie(times,path){
    var count = 0
    while(count<times){
        sleep(random(2500,3000))
        var UIObj = id('thread_extend_info').findOnce()
        if(UIObj!=null){
            click(UIObj.bounds().centerX(),UIObj.bounds().centerY())
            sleep(random(2500,3000))

            let tempUi = id('pb_editor_tool_comment_reply_text').findOnce()
            if(tempUi!=null){
                click(tempUi.bounds().centerX(),tempUi.bounds().centerY())
                sleep(500)
                let text = Utils.getWaterWords('/sdcard/Pictures/tieba/jjdjr.txt')
                className('android.widget.EditText').findOnce().setText(text)
                
            }

            Utils.swipeTo()
            sleep(random(2500,3000))
            count++
            log(count)
        }
        count == times? '':Utils.baSwipeUp()
    }
}

threads.start(()=>{
    let object = find()
    if (!object.empty()) {
        object.forEach(function(obj) {
            if(obj.text().indexOf('关闭应用') != -1){
                log('应用无响应，关闭应用')
                obj.click()
            }
        })
        exit()
    }else{
        log("没找到╭(╯^╰)╮")
    }
    sleep(5000)
})