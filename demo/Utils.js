
const API_Key = "LGZTmkf9AwP78E01jiYpmDyM"
const Secret_Key = "WGOi6d3tQvtB2B95XZCe2zeEnL5E1rtO"

/**
 * @description 获取百度AI识别token
 * @returns {String} 
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
 * @returns {Boolean} 是否点击成功
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
 * @returns {String}
 */
const getBaiduWords = level => {
    var a = shell("screencap -p /sdcard/Pictures/screen.png", true)
    var img = images.read("/sdcard/Pictures/screen.png")
    var image = images.toBase64(img, "png", 100)
    var SiteInfo_ocr_Url = level == "high"? "https://aip.baidubce.com/rest/2.0/ocr/v1/accurate":"https://aip.baidubce.com/rest/2.0/ocr/v1/general"
    var access_token = get_baidu_access_Token()
    var ocr_Res = http.post(SiteInfo_ocr_Url, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        access_token:access_token,
        image:image
    })
    var str = ocr_Res.body.json().words_result
    return str
}

module.exports = {
    API_Key:API_Key,
    Secret_Key:Secret_Key,
    getBaiduWords:getBaiduWords,
    clickBaiduWord:clickBaiduWord,
}