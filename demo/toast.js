log(baidu_access_Token())

function baidu_access_Token() {
    //注册百度云识别时给的,可以登录百度智能云在创建应用里面查看到。
    var API_Key = "LGZTmkf9AwP78E01jiYpmDyM"
    //注册百度云识别时给的,可以登录百度智能云在创建应用里面查看到。
    var Secret_Key = "WGOi6d3tQvtB2B95XZCe2zeEnL5E1rtO";
    //access_token获取地址,向授权服务地址https://aip.baidubce.com/oauth/2.0/token发送请求（推荐使用POST），并在URL中带上以下参数：
    //access_token = http.get("https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=YIKKfQbdpYRRYtqqTPnZ5bCE&client_secret=hBxFiPhOCn6G9GH0sHoL0kTwfrCtndDj").body.json().access_token;
 
    var post_url = "https://aip.baidubce.com/oauth/2.0/token"
    var token_Res = http.post(post_url, {
        grant_type: "client_credentials",
        client_id: API_Key,
        client_secret: Secret_Key,
    });
    var token = token_Res.body.json().access_token
    return token
}


// var token_url,paramers,data,token,post_paramers,post_content,phoBase64,phoUrl,post_url,path
// paramers = "grant_type=client_credentials&client_id=" & apikey & "&client_secret=" & seckey
// token_url="https://aip.baidubce.com/oauth/2.0/token"
// data = URL.Post(token_url, paramers)
// token = Encode.JsonToTable(data)
// If isIos() Then 
//     path = "/temprary/baiDuAiKnowWords.png"
// Else 
//     path = "/sdcard/Pictures/temprary/baiDuAiKnowWords.png"
// End If
// SnapShot path, 0, 0, 0, 0
// phoBase64 = ShanHai.ReadFileBase(path)	// base64编码：ShanHai.ReadFileBase(路径)
// phoUrl = ShanHai.CharToUrl(phoBase64)	// url编码：shanhai.CharToUrl(base64)
// post_paramers = "access_token=" & token["access_token"] & "&Content-Type=application/x-www-form-urlencoded&image=" & phoUrl & "&recognize_granularity=small"
// If level = 0 Then 
//     post_url = "https://aip.baidubce.com/rest/2.0/ocr/v1/general"	// 高精度含位置版
// ElseIf level = 1 Then
//     post_url = "https://aip.baidubce.com/rest/2.0/ocr/v1/accurate"	// 标准含位置版
// ElseIf level = 2 Then
//     post_url = "https://aip.baidubce.com/rest/2.0/ocr/v1/general_basic"	// 高精度版
// ElseIf level = 3 Then
//     post_url = "https://aip.baidubce.com/rest/2.0/ocr/v1/accurate_basic"	// 标准版
// End If
// If level = 0 Or level = 1 Then 
//     post_paramers = "access_token=" & token["access_token"] & "&Content-Type=application/x-www-form-urlencoded&image=" & phoUrl & "&recognize_granularity=small"
// Else 
//     post_paramers = "access_token=" & token["access_token"] & "&Content-Type=application/x-www-form-urlencoded&image=" & phoUrl
// End If
// post_content = URL.Post(post_url, post_paramers)
// baiDuAiKnowWords = Encode.JsonToTable(post_content)