
const API_Key = "LGZTmkf9AwP78E01jiYpmDyM"
const Secret_Key = "WGOi6d3tQvtB2B95XZCe2zeEnL5E1rtO"
const w = device.width
const h = device.height
Array.prototype.remove = function(val) {
    var index = this.indexOf(val)
    if (index > -1) {
    this.splice(index, 1)
    }
}

/**
 * @description 初始化
 */
const init = () => {
    if(!requestScreenCapture()){
        toast("请求截图失败")
        exit()
    }
}

/**
 * @description 获取百度AI识别token
 * @return {String} 
 */
const get_baidu_access_Token = () => {
    //access_token获取地址,向授权服务地址https://aip.baidubce.com/oauth/2.0/token发送请求（推荐使用POST），并在URL中带上以下参数：
    //access_token = http.get("https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=YIKKfQbdpYRRYtqqTPnZ5bCE&client_secret=hBxFiPhOCn6G9GH0sHoL0kTwfrCtndDj").body.json().access_token;
    var post_url = "https://aip.baidubce.com/oauth/2.0/token"
    var token_Res = http.post(post_url, {
        grant_type: "client_credentials",
        client_id: API_Key,
        client_secret: Secret_Key,
    })
    var access_token = token_Res.body.json().access_token
    return access_token
}

/**
 * @description 点击目标字
 * @param {String} word 点击的目标字
 * @param {String} level 识别文字的级别（默认标准位置版）
 * @return {Boolean} 是否点击成功
 */
const clickBaiduWord = (word, level) => {
    var isClick=false
    var res = shell("screencap -p /sdcard/Pictures/screen.png", true)
    if(res.code!=0){
        captureScreen('/sdcard/Pictures/screen.png')
    }
    var img = images.read("/sdcard/Pictures/screen.png")
    var image = images.toBase64(img, "png", 100)
    var SiteInfo_ocr_Url = level==="high"? "https://aip.baidubce.com/rest/2.0/ocr/v1/accurate":"https://aip.baidubce.com/rest/2.0/ocr/v1/general"
    var access_token = get_baidu_access_Token()
    var ocr_Res = http.post(SiteInfo_ocr_Url, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded" //连接的请求方式,一般是'content-type': 'application/json',
        },
        access_token:access_token,
        image:image
    })
    var json = ocr_Res.body.json().words_result
    json.forEach(w=>{
        if (w.words.indexOf(word) != -1) {
            isClick = click(w.location.left, w.location.top)
            log(w.location.left, w.location.top)
            isClick = true
        }
    })
    return isClick
}

/**
 * @description 获取百度识别源数据
 * @param {String} level 
 * @return {String}
 */
const getBaiduWords = level => {
    var res = shell("screencap -p /sdcard/Pictures/screen.png", true)
    if(res.code!=0){
        captureScreen('/sdcard/Pictures/screen.png')
    }
    var img = images.read("/sdcard/Pictures/screen.png")
    var image = images.toBase64(img, "png", 100)
    switch (level){
        case "high_position":
            SiteInfo_ocr_Url = "https://aip.baidubce.com/rest/2.0/ocr/v1/accurate"
            break
        case "normal":
            SiteInfo_ocr_Url = "https://aip.baidubce.com/rest/2.0/ocr/v1/general_basic"
            break
        case "high":
            SiteInfo_ocr_Url = "https://aip.baidubce.com/rest/2.0/ocr/v1/accurate_basic"
            break
        default:
            SiteInfo_ocr_Url = "https://aip.baidubce.com/rest/2.0/ocr/v1/general"
    }
    var access_token = get_baidu_access_Token()
    var ocr_Res = http.post(SiteInfo_ocr_Url, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        access_token:access_token,
        image:image,
        recognize_granularity:'small'
    })
    var str = ocr_Res.body.json().words_result
    return str
}

/**
 * @description 百度AI判断是否包含目标字
 * @param {String} words 
 * @param {String} level 
 * @return {Boolean}
 */
const isContain = (words,level) => {
    var alive = false
    var res = shell('screencap -p /sdcard/Pictures/screen.png', true)
    if(res.code!=0){
        captureScreen('/sdcard/Pictures/screen.png')
    }
    var img = images.read('/sdcard/Pictures/screen.png')
    var image = images.toBase64(img, "png", 100)
    var SiteInfo_ocr_Url = level=='high'? 'https://aip.baidubce.com/rest/2.0/ocr/v1/accurate_basic':'https://aip.baidubce.com/rest/2.0/ocr/v1/general_basic'
    var access_token = get_baidu_access_Token()
    var ocr_Res = http.post(SiteInfo_ocr_Url, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        access_token:access_token,
        image:image
    })
    var arr = ocr_Res.body.json().words_result
    for(let item of arr){
        if(item.words.indexOf(words) != -1){
            alive = true
            break
        }
    }
    return alive
}

/**
 * @description 获取目标字的坐标
 * @param {String} words
 * @param {String} word
 * @param {String} level
 * @return {JSON}
 */
const getWordsPosition = (words, word, level) => {
    var posi = {x:'-1'}
    var res = shell("screencap -p /sdcard/Pictures/screen.png", true)
    if(res.code!=0){
        captureScreen('/sdcard/Pictures/screen.png')
    }
    var img = images.read("/sdcard/Pictures/screen.png")
    var image = images.toBase64(img, "png", 100)
    var SiteInfo_ocr_Url = level==="high"? "https://aip.baidubce.com/rest/2.0/ocr/v1/accurate":"https://aip.baidubce.com/rest/2.0/ocr/v1/general"
    var access_token = get_baidu_access_Token()
    var ocr_Res = http.post(SiteInfo_ocr_Url, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded" //连接的请求方式,一般是'content-type': 'application/json',
        },
        access_token:access_token,
        image:image,
        recognize_granularity:'small'
    })
    var json = ocr_Res.body.json().words_result
    json.forEach(w=>{
        if (w.words.indexOf(words) != -1) {
            let chars = w.chars
            for(let item of chars){
                if(item.char == word){
                    let x = random(item.location.left, item.location.left+item.location.width)
                    let y = random(item.location.top, item.location.top+item.location.height)
                    posi = {x:x,y:y}
                    break
                }
            }
        }
    })
    return posi
}

/**
 * @description 获取本地文件JSON
 * @param {String} path 文件路径
 * @return {JSON}
 */
const getPathJson = path => {
    var jsonObj
    if(files.exists(path)){
        jsonObj = JSON.parse(files.read(path))
    }else{
        log('文件不存在！')
    }
    return jsonObj
}

/**
 * @description 保存JSON到文件
 * @param {String} path 
 * @param {JSON} json 
 * @return {Boolean} 
 */
const savePathJson = (path,json) => {
    let isSave = false
    if(files.ensureDir(path)){
        let jsonStr = JSON.stringify(json)
        files.write(path, jsonStr)
        isSave = true
    }
    return isSave
}

/**
 * @description 滑动
 * @param {String} dire 
 * @return {Booleann}
 */
const swipeTo = dire =>{
    let isSwipe = false
    switch (dire){
        case 'ba':
            isSwipe = swipe(random(1,w-1),random(h-10,h-1),random(1,w-1),random(1,10),random(700,800))
            break
        case 'top':
            isSwipe = swipe(random(w/9*2,w/9*7),random(h/11*9,h/11*10),random(w/9*2,w/9*7),random(h/11*2,h/11*3),random(400,500))
            break
        case 'bottom':
            isSwipe = swipe(random(w/9*2,w/9*7),random(h/11*2,h/11*3),random(w/9*2,w/9*7),random(h/11*9,h/11*10),random(400,500))
            break
        case 'left':
            isSwipe = swipe(random(w/11*9,w/11*10),random(h/7*2,h/7*5),random(w/11,w/11*2),random(h/7*2,h/7*5),random(500,600))
            break
        default:
            isSwipe = swipe(random(w/11,w/11*2),random(h/7*2,h/7*5),random(w/11*9,w/11*10),random(h/7*2,h/7*5),random(500,600))
    }
    return isSwipe
}

/**
 * @description 平滑滑动
 * @param {String} dire 
 * @return {Booleann}
 */
const SwipeTo = dire => {
    let isSwipe = false
    switch (dire){
        case 'top':
            isSwipe = Swipe(random(1,w-1),random(h/11*9,h/11*10),random(1,w-1),random(h/10,h/10*2),random(100,200))
            break
        default:
            isSwipe = Swipe(random(1,w-1),random(h/10,h/10*2),random(1,w-1),random(h/11*10,h-1),random(100,200))
    }
    return isSwipe
}


/**
 * @description 截取字符串中随机的一个字符
 * @param {String} str 
 * @return {String} 
 */
const getRanWord = str =>{
    if(str.length>0){
        let num = random(1,str.length)
        let word = str.substring(num-1,num)
        return word
    }else{
        log('字符为空')
    }
}

/**
 * @description 获取文本文件随机行字符
 * @param {String} path 
 */
const getWaterWords = path => {
    if(files.exists(path)){
        let textObj = open(path)
        let textArr = textObj.readlines()
        return textArr[random(0,textArr.length-1)]
    }else{
        log('文本不存在！')
        exit()
    }   
}

/**
 * @description 向上滑动(贴吧刷贴专用)
 */
const baSwipeUp = () =>{
    let isSwipe = false
    isSwipe = swipe(random(w/9*2,w/9*7),random(h/11*9,h/11*10),random(w/9*2,w/9*7),random(1,10),random(400,500))
    return isSwipe
}

/**
 * @description 检测应用是否未响应
 */
const testAppResp = () => {
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
}


module.exports = {
    API_Key:API_Key,
    Secret_Key:Secret_Key,
    init:init,
    getBaiduWords:getBaiduWords,
    clickBaiduWord:clickBaiduWord,
    getPathJson:getPathJson,
    savePathJson:savePathJson,
    getWordsPosition:getWordsPosition,
    isContain:isContain,
    swipeTo:swipeTo,
    SwipeTo:SwipeTo,
    getRanWord:getRanWord,
    getWaterWords:getWaterWords,
    testAppResp:testAppResp,
    baSwipeUp:baSwipeUp,
}
