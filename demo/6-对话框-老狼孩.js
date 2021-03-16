
// var clear = confirm("要清除所有缓存吗？")
// if(clear){
//     alert("清除成功")
// }

// "ui";
// alert("嘿嘿嘿").then(()=>{
//     // 当点击确定后会执行这里
//     toastLog("一袋米要扛几楼")
// })

// "ui";
// confirm("确定吗").then(value=>{
//     //当点击确定后会执行这里, value为true或false, 表示点击"确定"或"取消"
//     toastLog(value)
// })

// var name = rawInput("请输入您的名字");
// alert("您的名字是：" + name );

// "ui";
// rawInput("请输入您的名字", "小明").then(name => {
//     alert("您的名字是" + name);
// })

// rawInput("请输入您的名字", "小明", name => {
//     alert("您的名字是" + name);
// })

// var age = dialogs.input("请输入您的年龄", "26");
// var year = new Date().getYear() + 1900 - age;
// alert("您的出生年份是" + year);

// "ui";
// dialogs.input("请输入您的年龄", "18").then(age => {
//     console.log(age)
//     var year = new Date().getYear() + 1900 - age;
//     alert("您的出生年份是" + year);
// });

// var options = ["选项A", "选项B", "选项C", "选项D"]
// var i = dialogs.select("请选择一个选项", options);
// if(i >= 0){
//     toast("您选择的是" + options[i]);
// }else{
//     toast("您取消了选择");
// }

// "ui";
// dialogs.select("请选择一个选项", ["选项A", "选项B", "选项C", "选项D"])
// .then(i => {
//     toast(i);
// });

dialogs.build({
    //对话框标题
    title: "发现新版本",
    //对话框内容
    content: "更新日志: 新增了若干了BUG",
    //确定键内容
    positive: "下载",
    //取消键内容
    negative: "取消",
    //中性键内容
    neutral: "到浏览器下载",
    //勾选框内容
    checkBoxPrompt: "不再提示"
}).on("positive", ()=>{
    //监听确定键
    toast("开始下载....");
}).on("neutral", ()=>{
    //监听中性键
    app.openUrl("https://www.autojs.org");
}).on("check", (checked)=>{
    //监听勾选框
    log(checked);
}).show();

// dialogs.build({
//     title: "你好",
//     content: "今天也要元气满满哦",
//     positive: "好的"
// }).show();



