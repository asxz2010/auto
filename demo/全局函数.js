// log("我开始了")
// log(currentActivity())
// log(currentPackage())
// setTimeout(()=>{
//     log("aaaaa")
// }, 1000)


waitForPackage("com.tencent.mm")
log("打开了微信")
click(random(100,800), random(200,900))
waitForActivity("com.tencent.mm.plugin.profile.ui.ContactInfoUI")
log("页面进入了")
exit()
// click("打招呼")


