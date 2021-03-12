
// var clear = confirm("要清除所有缓存吗？")
// if(clear){
//     alert("清除成功")
// }

// "ui";
// alert("嘿嘿嘿").then(()=>{
//     // 当点击确定后会执行这里
//     toastLog("一袋米要扛几楼")
// })

"ui";
confirm("确定吗").then(value=>{
    //当点击确定后会执行这里, value为true或false, 表示点击"确定"或"取消"
    toastLog(value)
})



