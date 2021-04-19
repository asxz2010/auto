var Utils= require('Utils.js')

// log(Utils.isContain('海贼王'))

// log(shell("screencap -p /sdcard/Pictures/1111/screen.png",true))
// log(JSON.stringify(Utils.getBaiduWords()))
let baArray = ['秦时明月','网易阴阳师','博人传','海贼王','黑色四叶草','鬼灭之刃']
let tiebaSto = storages.create('tiebaSto')
tiebaSto.put('baArray', baArray)
log(tiebaSto.get('baArray'))
Array.prototype.remove = function(val) {
    var index = this.indexOf(val)
    if (index > -1) {
    this.splice(index, 1)
    }
}
baArray.remove('海贼王')
tiebaSto.put('baArray', baArray)
log(tiebaSto.get('baArray'))



// let aaaSto = tiebaSto.get('baArray')
// log(aaaSto)

// for(let item of baArray){
//     log(item.substring(item.length-1,item.length))
// }

// log(Utils.getWordsPositions(baArray))