// 评论 = desc("评论").findOne()
// log(评论)
// 评论.click()
// sleep(1000)
// 赞 = text("赞").findOne()
// 赞的父控件 = 赞.parent()
// 赞的父控件.click()

// var 名字 = text("相静").findOne();
// log(名字)
// var id = 名字.id()
// log(id)

// var 长按 = id("dgc").findOne()
// log(长按)
// 长按.longClick();

var 滚动控件 = className("ListView").findOne()
// log(滚动控件)
// 滚动控件 = scrollDown()
var 滚动控件的子项 = 滚动控件.children();
// log(滚动控件的子项)
滚动控件的子项.forEach((item, position)=>{
    // log(item)
    // var 名字 = item.findOne(id("dwf"))
    // log(名字.text())

    // var 评论 = item.findOne(desc("评论"))
    // 评论.click()
    // sleep(1000)
    
    var 名字 = item.find(className("TextView"))
    log(名字.get(0).text())
    log(名字.size())
})

function 点赞操作(){
    var 滚动控件 = className("ListView").findOne()
    var 滚动控件的子项 = 滚动控件.children()
    滚动控件的子项.forEach((item,position)=>{
        var 评论 = item.findOne(desc("评论"))
        if(评论){
            评论.click()
            sleep(200)
            click("赞")
            sleep(1000)
        }
    })
    滚动控件.scrollDown()
    sleep(1000)
}

while(true){
    点赞操作()
}


// var 文本框 = className("EditText").findOne()
// log(文本框)
// 文本框.setText("你好啊")