var Utils= require('Utils.js')

// let abstract_UI = id('thread_card_abstract').findOnce()
// log(abstract_UI.text().length)
// log(abstract_UI.text())
// log(abstract_UI.text().substring(0,10))

// log(text('精华').findOnce())
// var UIObj = id('thread_extend_info').findOnce()
// log(UIObj.bounds().centerX(),UIObj.bounds().centerY())
// log(UIObj.bounds())
// log(UIObj.bounds().top)
// log(UIObj.bounds().bottom)
// log(UIObj.bounds().left)
// log(UIObj.bounds().right)
// log(UIObj.text())

let cardUI = id('thread_card_root').findOnce().parent()
log(cardUI)

// var bbb
// for(let i=0; i<=1; i++){
//     let aaa = id('thread_card_root').findOnce()
//     if(aaa!=null){
//         log('aaa：'+aaa)
//         log('bbb：'+bbb)
//         if(aaa!=bbb){
//             bbb = aaa
//             log('不等')
//         }else{
//             log('相等')
//         }
//         swipe(100,400, 150, 300, 500)
//     }
//     sleep(2000)
// }

// let aaa = desc('的头像').findOnce()
// log(aaa)