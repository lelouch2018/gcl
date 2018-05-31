/**
 * Created by dujiawei on 16/9/14.
 */

!function (win, option) {
    var count = 0,
        designWidth = option.designWidth,
        designFontSize = option.designFontSize || 20,
        callback = option.callback || null,
        root = document.documentElement,
        body = document.body,
        rootWidth, newSize, t, self;

    root.style.width = '100%';
   
    function _getNewFontSize() {
        //var scale = designHeight !== 0 ? Math.min(win.innerWidth / designWidth, win.innerHeight / designHeight) : win.innerWidth / designWidth;
        var scale = (window.innerWidth) / designWidth;
        return parseInt(scale * 10000 * designFontSize) / 10000;
    }

    !function () {
        rootWidth = root.getBoundingClientRect().width;
        self = self ? self : arguments.callee;
 
        if (rootWidth !== win.innerWidth && count < 20) {
            win.setTimeout(function () {
                count++;
                self();
            }, 0);
        } else {
            newSize = _getNewFontSize();
         
            if (newSize + 'px' !== getComputedStyle(root)['font-size']) {
                root.style.fontSize = newSize + "px";
                return callback && callback(newSize);
            }
            ;
        }
        ;
    }();

    win.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function () {
        clearTimeout(t);
        t = setTimeout(function () {
            self();
        }, 300);
    }, false);
}(window, {
    designWidth: 750, 
    designFontSize: 100, 
    callback: function (argument) {
        //console.log("test")
    }
});