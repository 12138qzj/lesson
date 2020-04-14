- 知识点
    1. mouseenter mouseover不同
        -不论鼠标指针穿过被选元素或其子元素，都会触发 mouseover 事件。（移动到盒子上触发一次 
            移动到元素上触发一次 ）
        -只有在鼠标指针穿过被选元素时，才会触发 mouseenter 事件。(只有移动到元素上才会触发事件)
    2. 获取元素属性的方法 A.getBoundingClientRect(); 能获取元素的宽 高 top left 等等 其他属性
    3. 获取窗口 滚动的距离window.scrollY window.scrollX 获取向下，向右滚动的距离 
allA.forEach((A) => {
            A.addEventListener('mouseenter', (e) => {
                const size = A.getBoundingClientRect(); //获取该元素的各项属性 
                console.log(size)
                bg.style.width = size.width + 'px'; //获取距离顶部的距离
                bg.style.height = size.height + 'px'; //获取距离右边的距离
                bg.style.top = size.top + window.scrollY + 'px'; //获取距离顶部的距离+滚动条向下滚动的距离
                bg.style.left = size.left + window.scrollX + 'px'; //获取距离右边的距离+滚动条向右滚动的距离

            })
        }); 