
const API_Key = "LGZTmkf9AwP78E01jiYpmDyM"
const Secret_Key = "WGOi6d3tQvtB2B95XZCe2zeEnL5E1rtO"

/**
 * @description 初始化
 */
const init = () => {
    setScreenMetrics(540, 960)
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
    var a = shell("screencap -p /sdcard/Pictures/screen.png", true)
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
    var a = shell("screencap -p /sdcard/Pictures/screen.png", true)
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
    var alive = false, count = 0
    var a = shell("screencap -p /sdcard/Pictures/screen.png", true)
    var img = images.read("/sdcard/Pictures/screen.png")
    var image = images.toBase64(img, "png", 100)
    var SiteInfo_ocr_Url = level=='high'? 'https://aip.baidubce.com/rest/2.0/ocr/v1/accurate_basic':'https://aip.baidubce.com/rest/2.0/ocr/v1/general_basic'
    var access_token = get_baidu_access_Token()
    var ocr_Res = http.post(SiteInfo_ocr_Url, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
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
    var a = shell("screencap -p /sdcard/Pictures/screen.png", true)
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
                    posi = {x:item.location.left,y:item.location.top}
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
    var jsonObj = {}
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
    let x = device.width/9
    let y = device.height/2
    let m = x*8
    let n = y
    let a = device.width/2
    let b = device.height/5
    let c = device.height
    let d = c/11*10
    let isSwipe = false
    switch (dire){
        case 'top':
            isSwipe = swipe(a,d,a,0,500)
            break
        case 'bottom':
            isSwipe = swipe(a,b,a,c,500)
            break
        case 'left':
            isSwipe = swipe(m,n,x,y,300)
            break
        default:
            isSwipe = swipe(x,y,m,n,300)
    }
    return isSwipe
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
}
