//登录
window.onload=function(){
    if(document.getElementById("fo") != null){
        document.getElementById("fo").onsubmit=function(){
            var yhm = document.getElementById("user01");
            var mm = document.getElementById("password01");

            if(!(/^1\d{10}$/.test(yhm.value))){          /*用正则表达式，检查输入的用户名格式是否为以1开头的11位数*/
                alert("输入用户名格式错误，请重新输入以1开头的11位数用户名！");
                return false;
            }

            if (mm.value != 12345) {
                alert("密码输入错误，请重新输入！");
                return false;
            }
            return ture;
        }
    }
}

//轮播图
var div = document.getElementById('flash');
    var img = div.getElementsByTagName('img'); /*选中div下所有的图片*/
    var ul = document.getElementsByTagName('ul')[0];
    var li = ul.getElementsByTagName('li');
    var div_r = document.getElementsByTagName('div')[1];
    // var span_r = div_r.getElementsByTagName('span');
    var div_l = document.getElementsByTagName('div')[2];
    // var sapn_l = div_l.getElementsByTagName('span');
    var len = img.length;
    var count = 0; /*设置count来显示当前图片的序号*/
function run(){ /*将定时器里的函数提取到外部*/
    count++;
    count = count==5?0:count; /*当图片加载到最后一张时，使其归零*/
    for(var i=0;i<len;i++){    
        img[i].style.display = 'none'; /*利用for循环使除当前count位其他图片隐藏*/
    }
    img[count].style.display = 'block'; /*显示当前count的值所代表的图片*/
    for(var i=0;i<li.length;i++){
        li[i].style.backgroundColor = "#fff"; /*原理同上*/
    }
    li[count].style.backgroundColor = "#f40";
}
    var timer = setInterval(run,1000); /*定义定时器，使图片每隔1s更换一次*/
    div.onmouseover = function(){
    clearInterval(timer);
}
    div.onmouseleave = function(){ /*定义鼠标移出事件，当鼠标移出div区域，轮播继续*/
    timer = setInterval(run,1000);
}
    for(var i=0;i<len;i++){
        li[i].index = i; /*定义index记录当前鼠标在li的位置*/
        li[i].onmouseenter = function(){ /*定义鼠标经过事件*/
        for(var i=0;i<len;i++){ /*通过for循环将所有图片隐藏，圆点背景设为白色*/
            li[i].style.background = '#fff';
            img[i].style.display = 'none';
        }
    this.style.background = '#f40'; /*设置当前所指圆点的背景色*/
    img[this.index].style.display = 'block'; /*使圆点对应的图片显示*/
    }
}
    div_r.onclick = function(){ /*因为span没有设置宽高，直接把事件添加到他的父级*/
    run(); /*直接调用现成的run函数*/
}
function reverse(){
    count--;
    count = count==-1?4:count;
    for(var i=0;i<len;i++){
        img[i].style.display = 'none'; /*利用for循环使除当前count位其他图片隐藏*/
    }
    img[count].style.display = 'block'; /*显示当前count的值所代表的图片*/
    for(var i=0;i<li.length;i++){
        li[i].style.backgroundColor = "#fff"; /*原理同上*/
    }
    li[count].style.backgroundColor = "#f40";
}
    div_l.onclick = function(){
    reverse(); /*重新设置函数*/
}
//改变网页背景颜色
var bgc = document.getElementById("body");
var colorarr = {"red","white","green"};
window.onload = function(){

    var i = 0;
    var timer = setInterval(function(){
        bgc.style.backgroundColor = colorarr[i];
        i = (i+1)%colorarr.length;
        , 2000)
}