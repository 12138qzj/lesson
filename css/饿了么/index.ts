
const tabbar_item=document.querySelectorAll('.weui-tabbar .weui-tabbar__item');
const time=document.querySelectorAll('.select .time')

tabbar_item.forEach((tabbar)=>{
    tabbar.addEventListener('click',(e)=>{       
        console.log("cishi ",tabbar);
        console.log("cishi ",e);
        Show.call(tabbar);
        
    })
})
function Show() {
    for (let i = 0; i < tabbar_item.length; i++) {

        if (tabbar_item[i] === this) {
            console.log(i)
            this.classList.add('weui-bar__item_on')
            var imgoperation=this.querySelectorAll('div img')            
            imgoperation[0].classList.add('hide')
            imgoperation[1].classList.remove('hide')
        } else {
            tabbar_item[i].classList.remove('weui-bar__item_on')
            var img=tabbar_item[i].querySelectorAll('div img')
            img[0].classList.remove('hide')
            img[1].classList.add('hide')

        }
    }
}
var t;
var value;
var i=12;
function starttime(){
    value=time[2].innerHTML;
    if(value==='00'){
        console.log('111');
        stopTime();      
    }else{
        i--;
        if(i<10){
            time[2].innerHTML='0'+i+''
        }else{
            time[2].innerHTML=i+''
        }
       
    }
    clearTimeout(t)
    t=setTimeout('starttime()', 1000);
    
    //if()
    console.log(time[2].innerHTML);
}
starttime();
 function stopTime() {
    clearTimeout(t)

    console.log('t'+t)
}