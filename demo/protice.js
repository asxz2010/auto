

launchApp("百度贴吧")

var temp
temp = true

sleep(4000)
while(temp){
    sleep(200)
    var mine = text('搜索').findOne()
    if(mine){
        mine.click()
        sleep(200)
        let searchInput = id("home_et_search")
        if(searchInput){
            searchInput.setText('进击的巨人')
            sleep(2000)
            KeyCode(66)
            temp = false
        }
    }
}

