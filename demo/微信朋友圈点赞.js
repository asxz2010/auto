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
log(滚动控件的子项)
滚动控件的子项.forEach((item, position)=>{
    log(item)
    log(position)
})

