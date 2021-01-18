function getDom(id) {
    return document.getElementsByClassName(id)
}

//设置最大/最小宽度
var max_width = 0,
    min_width = 0,
    innerWidth = 0

//获取dom
var drapLine = getDom('drap-line'),
    left, tempDrapLine;


//记录鼠标相对left盒子x轴位置
var mouse_x = 0;

//鼠标移动事件
function mouseMove(e) {
    var e = e || window.event;
    var left_width = e.clientX ? e.clientX - mouse_x : e.touches[0].pageX - mouse_x;
    left_width = left_width < min_width ? min_width : left_width;
    left_width = left_width > max_width ? max_width : left_width;
    left.style.width = left_width + 'px';
    tempDrapLine.style.left = left_width + 'px'
}
//终止事件
function mouseUp() {
    document.onmousemove = null;
    document.onmouseup = null;
    document.ontouchmove = null;
    //localStorage设置
}

function setImageSize() {
    for(let i = 0 ; i < $("figure.origin").length; i++) {
        $("figure.origin img")[i].style.width = $(".swiper-slide-active .right_box .inner")[0].offsetWidth + "px"
    }
}

function getNextElementSibling(element){
    if(element.nextElementSibling){
        return element.nextElementSibling;
    }else{
        //获取下一个兄弟节点
        var node=element.nextSibling;
        //如果没有下一个节点，此时null,如果为1则说明找到元素
        while(node&&node.type!==1){
            node=node.nextSibling;
        }
        return node;
    }
}

window.onload = function () {
    // 绑定鼠标按下事件
    setImageSize()
    for(let i = 0; i < drapLine.length; i++) {
        drapLine[i].style.left = "50%"
        drapLine[i].onmousedown = function (e) {
            tempDrapLine = e.target
            var e = e || window.event;
            //阻止默认事件
            e.preventDefault();
            e.stopPropagation();
            left = getNextElementSibling(tempDrapLine);
            max_width = tempDrapLine.previousElementSibling.offsetWidth
            mouse_x = e.clientX - left.offsetWidth;
            document.onmousemove = mouseMove;
            document.onmouseup = mouseUp;
        }
        drapLine[i].ontouchmove = function (e) {
            tempDrapLine = e.target
            var e = e || window.event;
            //阻止默认事件
            e.preventDefault();
            e.stopPropagation();
            left = getNextElementSibling(tempDrapLine);
            max_width = tempDrapLine.previousElementSibling.offsetWidth
            mouse_x = e.touches[0].pageX - left.offsetWidth;
            var left_width = e.touches[0].pageX;
            left_width = left_width < min_width ? min_width : left_width;
            left_width = left_width > max_width ? max_width : left_width;
            left.style.width = left_width + 'px';
            tempDrapLine.style.left = left_width + 'px'
        }
    }
}