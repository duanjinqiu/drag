/**
 * Created by duan on 2017/5/17.
 */
window.onload = function() {
    var drag;
    // 鼠标与div左边与上边的距离
    var mouseOffsetX, mouseOffsetY;
    // 鼠标与窗口左边上边的距离
    var mouseX, mouseY;

    var div = document.getElementsByClassName('div')[0];
    // div宽度
    var divWidth = div.clientWidth;
    // div高度
    var divHeight = div.clientHeight;


    div.onmousedown = function(e) {
        var e = e || window.event;
        // 鼠标距离左边的距离
        var x = e.pageX;
        // 鼠标距离上边的距离
        var y = e.pageY;
        // 鼠标距离div的宽度
        mouseOffsetX = x - div.offsetLeft;
        // 鼠标距离div的高度
        mouseOffsetY = y - div.offsetTop;
        // 获取可视区域的宽度
        var windowWidth = document.documentElement.clientWidth;
        // 获取可视窗口的高度
        var windowHeight = document.documentElement.clientHeight;
        // div到了边界时与左边的距离
        maxdivX = windowWidth - divWidth;
        // div到了边界时与上边的距离
        maxdivY = windowHeight - divHeight;
        drag = true;

        window.onmousemove = function (e) {
            e = e || window.event;
            // 鼠标距离左边的距离
            mouseX = e.pageX;
            // 鼠标距离上边的距离
            mouseY = e.pageY;

            // 拖动的div的左边距
            movedivX = mouseX - mouseOffsetX;
            // 拖动的div的上边距
            movedivY = mouseY - mouseOffsetY;
            if (drag) {

                // 这里用div的距离左边的宽度来判断是不行的，要使用鼠标距离左边的宽度和鼠标距离上边的高度判断才行
                // if (div.offsetLeft < windowWidth - divWidth) {
                //     div.style.left = mx - tx + 'px';
                // }

                // 利用鼠标距离左边的距离来判断div拖动的距离
                // mouseX - mouseOffsetX是div距离左边的宽度
                // windowWidth - divWidth是div距离左边的宽度
                if (movedivX < maxdivX && movedivX > 0) {
                    div.style.left = movedivX + "px";
                }
                if (movedivY < maxdivY && movedivY > 0) {
                    div.style.top = mouseY - mouseOffsetY + 'px';
                }

                // 鼠标松开，停止拖动
                document.onmouseup = function () {
                    drag = false;
                }
            }

        }
    }

    function closeDialog() {
        console.log("close");
    }
}