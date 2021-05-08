'ui';

var baArray = []
var commonPath = '/sdcard/Pictures/tieba/'
var baseColor = '#4fb3ff'
ui.layout(
    <vertical>
        <toolbar title="我爱刷贴" bg="{{baseColor}}"></toolbar>
        <horizontal bg="#ffffff" padding="15">
            <input id="wrap" w="*" />
        </horizontal>
        <button id="start" text="开始运行" bg="{{baseColor}}" color="#ffffff"/>
    </vertical>
    
)

// 开始运行
ui.start.click(v=>{
    setTimeout(()=>{
        baArray = []
        let baInfoStr = ui.wrap.getText().toString()
        let baInfoArr = baInfoStr.split(";")
        for(let baItem of baInfoArr){
            let baInfo = baItem.split(",")
            if(baInfo.length!=3){
                toast('漏填或多填，每组应是3项信息')
                exit()
            }
    
            let num = Number(baInfo[1])
            if(isNaN(num)){
                toast('请填写正确的次数格式！')
                exit()
            }else if(baInfo[2].indexOf('.txt')<0){
                toast('水贴的文本文件名错误！')
                exit()
            }else if(!files.exists(commonPath+baInfo[2])){
                toast('水贴的文本文件不存在！')
                exit()
            }else{
                baArray.push({
                    name: baInfo[0],
                    waterTimes: baInfo[1],
                    waterTxtPath: commonPath+baInfo[2]
                })
            }
        }
        var e = engines.execScriptFile("./ready-tieba.js")
        setTimeout(()=>{
            e.getEngine().emit("baString", JSON.stringify(baArray))
        }, 1000)
    },1000)
})

