'ui';

var baseColor = '#4fb3ff'
ui.layout(
    <vertical>
        <toolbar title="我爱刷贴" bg="{{baseColor}}"></toolbar>
        <horizontal bg="#ffffff" padding="15">
            <text text="吧名：" />
            <input w="100" />
            <text text="次数"/>
            <input inputType="number" w="30" />
            <text text="文本：" />
            <input w="100" />
        </horizontal>
        <button text="开始运行" bg="{{baseColor}}" color="#ffffff"/>
    </vertical>
    
)

