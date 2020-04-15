var that;
class Tab {
    constructor(id) {
        that = this;
        this.All = document.querySelector(id);

        //获取li的父元素 ul  拿到tab的第一个孩子 ul
        this.ul = this.All.querySelector('.tab ul:first-child');
        //获取section 
        this.section = this.All.querySelector('.section')
        this.tabadd = this.All.querySelector('.tabadd');
        this.tabadd.onclick = this.add;



        this.init();
    }
    init() {
        this.update();
        for (let i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab;
            this.icon[i].onclick = this.removeTab;
            this.spans[i].ondblclick = this.editTab;
            this.sectionspans[i].ondblclick = this.editTab;
        }
    }
    update() {
        this.lis = this.All.querySelectorAll('li');
        this.sections = this.All.querySelectorAll('.section1');
        this.icon = this.All.querySelectorAll('.icon');
        this.spans = this.All.querySelectorAll('.tab li span:first-child')
        this.sectionspans = this.All.querySelectorAll('.section  span:first-child')
    }
    toggleTab() {
            that.clearclass();
            console.log(this);
            console.log(this.index);
            that.lis[this.index].className = 'tab1';
            that.sections[this.index].className = ' section1 section2';
            console.log(that.sections[this.index])

        }
        //添加元素
    add() {
        // const li = document.createElement('li');
        // li.innerHTML = `
        // <span>测试3</span><span class="icon">+</span>
        // `;
        // that.ul.appendChild(li);
        // console.log("进入");
        that.clearclass();
        var random = Math.random()
        let li = '<li class="tab1"><span>新加标签</span><span class="icon">+</span></li>';
        let settion1 = '<div class="section1 section2"><span>测试' + random + '</span></div>';
        that.ul.insertAdjacentHTML('beforeend', li); //必须取得父元素  才能添加字符串形式的html
        that.section.insertAdjacentHTML('beforeend', settion1);
        that.init();

    }
    clearclass() {
        for (let i = 0; i < this.lis.length; i++) {
            this.lis[i].className = ''
            this.sections[i].className = 'section1'
        }

    }
    removeTab(e) { //e为事件对象
        e.stopPropagation(); //阻止子元素事件冒泡到父元素来 来触发父元素的点击事件
        //this.parentNode.index  返回到上一层  获取父元素的序号
        that.lis[this.parentNode.index].remove();
        that.sections[this.parentNode.index].remove();
        that.init();
        let index = this.parentNode.index;
        index--;
        //如果存在  选项  则运行后面的
        this.parentNode.index && that.lis[index].click();

    }
    editTab() {
        window.getSelection ? window.getSelection().removeAllRanges() : document.getSelection.empty();
        //console.log(this);
        var str = this.innerHTML;
        this.innerHTML = '<input type="text" />'
        var input = this.querySelector('input:first-child');
        input.select(); //文字处于选中的状态
        input.value = str;


        // input.onblur = function(e) {
        //     console.log(this.value);
        //     input.parentNode.innerHTML = this.value;
        // }

        // input.onkeyup = function(e) {
        //     //e.stopPropagation();
        //     //e.preventDefault(); //阻止原有事件发生
        //     if (e.keyCode === 13) {
        //         input.parentNode.innerHTML = this.value;
        //         console.log('up值', this.value)
        //         console.log('up值e', e.target.value)
        //             //console.log(this.parentNode)
        //             //this.onblur();
        //     } else {
        //         return;
        //     }
        // }

        input.addEventListener('blur', function(e) {
            console.log(this.value);
            this.parentNode.innerHTML = this.value;
        })

        input.addEventListener('keyup', function(e) {
            if (e.keyCode === 13) {
                this.onblur();
                console.log('这个', e.target.value);
                //this.parentNode.innerHTML = this.value;
            }
        })

    }


}
new Tab("#all");