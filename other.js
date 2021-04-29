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
    baArray = []
    let baInfoStr = ui.wrap.getText().toString()
    let baInfoArr = baInfoStr.split(";")
    for(let baItem of baInfoArr){
        let baInfo = baItem.split(",")
        log(baInfo.length)
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
    log(baArray)
})
// 火影忍者,2,public.txt;海贼王,3,public.txt;进击的巨人,4,jjdjr.txt
