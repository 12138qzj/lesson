- 代码内容
    1. 当内容出现到视窗的时候  加载内容，并且出现过度效果
    2. 对IntersectionObserver（）函数的使用  全部功能 
    
- 知识点
    1. opacity :0; 透明度 范围0-1；
    2. transition: all .4s; //过度效果  过度时间为0.4s
    3.  const img = document.querySelector('.slide-in')
        img.classList.add('active');//在原有的基础上  加上新的类  
        img.classList.remove('active');//在原有的基础上  移除类  