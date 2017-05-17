/**
 * Created by duan on 2017/5/17.
 */
window.onload = function() {
    var drag;
    var tx, ty;
    var win = document.getElementsByClassName('win')[0];
    var lefttop = document.getElementsByClassName('lefttop')[0];
    var divlefttop = document.getElementsByClassName('divlefttop')[0];
    var clicklefttop = document.getElementsByClassName('clicklefttop')[0];

    win.onmousedown = function(e) {
        var event = e || window.event;
        // 鼠标按下的那一刻距离可视区域左边的距离
        var x = e.clientX;
        // 鼠标按下的那一刻距离可视区域上边的距离
        var y = e.clientY;
        drag = true;
        // 鼠标按下那一刻与div的左边border的距离
        tx = x - win.offsetLeft;
        // 鼠标按下那一刻与div的上边border的距离
        ty = y - win.offsetTop;

        lefttop.innerHTML = '鼠标距离可视区域左边的距离: ' + x + '，鼠标距离可视区域上边的距离: ' + y;

        clicklefttop.innerHTML = '鼠标与div的左边border的距离: ' + tx + '，鼠标与div的上边border的距离：' + ty;


        window.onmousemove = function (e) {
            e = e || window.event;
            if (drag) {
                // 鼠标移动的时候距离可视区域左边的距离
                var mx = e.clientX;

                win.style.left = mx - tx + 'px';
                // 鼠标移动的时候距离可视区域上边的距离
                var my = e.clientY;
                win.style.top = my - ty + 'px';

                divlefttop.innerHTML = 'div的左边框距离可视区域左边框的距离是: ' + win.offsetLeft + '，div的上边框距离可视区域顶部的距离是: ' + win.offsetTop;

            }
            window.onmouseup = function () {
                drag = false;
            }
        }

    }
}