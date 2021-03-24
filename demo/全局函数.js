// log("我开始了")
// log(currentActivity())
// log(currentPackage())
// setTimeout(()=>{
//     log("aaaaa")
// }, 1000)


// waitForPackage("com.tencent.mm")
// log("打开了微信")
// click(random(100,800), random(200,900))
// waitForActivity("com.tencent.mm.plugin.profile.ui.ContactInfoUI")
// log("页面进入了")
// exit()
// click("打招呼")


// log(colors.isSimilar("#ff0000", "#ff0009"))

// log(colors.parseColor("#ff0000"))


// 存储
// var 操作对象 = storages.create("这是测试的文件名")
// 操作对象.put("我是键", "我是值")
// 操作对象.put("我是键键", "我是值值")
// log(操作对象.get("我是键"))
// log("运行完成")


var i,j,s=0
for(i=1;i<5;i++){
    for(j=1;j<i;j++){
        s = s+i*j
    }
}
console.log(s)


