import $ from 'jquery'

var $App = function () {

};

$App.instance = function () {
    //动态计算标题部分
    let _w = window.screen.availWidth;
    let _header_title = _w - (35 * 2) - 2;
    $(".header .title-part").css("width", _header_title + "px");
};

/**
 * 格式化百分比数据，并保留两位小数点
 */
$App.toPercent = function (point) {
    var str = Number(point * 100).toFixed(2);
    str += "%";
    return str;
}

/**
 * 页面初始化相关处理在这里进行
 */
$(function () {
    $App.instance();
})
