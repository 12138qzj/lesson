 知识点：
   1. stylus 作用：定义变量 ， css样式嵌套 ， 函数 ，css预编译这个文件 转换为css文件
    2. css 4 推出css variable能力， 可以实现stylus(预编译)的效果  css4 是原生支持的
    3. stylus 转化css文件 命令 stylus -w stly文件名 -o css文件名（加后缀） 
    4.  @media (max-width: 500px) {
            /** 窗口宽度小于500像素的样式 **/
             :root {
                --bg-color: green;
                --base-size: 10*0.8;
            }
        }
    根据窗口大小  通过css设置 变量 来改变样式