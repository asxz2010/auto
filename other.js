// var path = '/sdcard/Pictures/tieba/tieba.json'

// log(files.write(path,'111111'))


var Utils= require('Utils.js')

log(111)
if(!requestScreenCapture()){
    toast("请求截图失败")
    exit()
}
captureScreen('/sdcard/Pictures/screen.png')

// // right
// var x = device.width/9
// var y = device.height/2
// var m = x*8
// var n = y
// right
// (x,y, m,n)Í
// left
// (m,n, x,y)
// log(swipe(x,y, m,n, 500))



// var a = device.width/2
// var b = device.height/5
// var c = device.height
// var d = b/11*10
// bottom
// (a,b, c,d)
// top
// (c,d, a,b)

// top
// swipe(a,d, a,0, 500)

// swipe(a,b, a,c, 500)
