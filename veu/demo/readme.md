- 所以直接把 JavaScript 代码写在 v-on 指令中是不可行的。因此 v-on 还可以接收一个需要调用的方法名称。
- 知识点
 1. 创建一个vue
    eg ：  var vm=new Vue({
            el : "#app",//对一个容器进行绑定 可以为id class  就是css的选择器
            data : {//提供的数据
                message : "信息",
                name： "姓名",
                checkb : []
            }
        });
 2. 插值表达式
    <div id="app">
        {{name}}//在该位置显示 Vue中的name 《姓名》  Vue的库文件可以识别 转换为原生js代码
    </div>
    {{message}} 