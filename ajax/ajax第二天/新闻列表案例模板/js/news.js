$(function () {
    // 数字补0
    function getZero(n) {
        return n < 10 ? '0' + n : n
    }
    // 过滤器
    template.defaults.imports.gettimes = function (tt) {
        var date = new Date(tt)

        var y = date.getFullYear()
        var m = getZero(date.getMonth() + 1)
        var d = getZero(date.getDate()
        )
        var hh = getZero(date.getHours())
        var mm = getZero(date.getMinutes())
        var ss = getZero(date.getSeconds())
        return y + '-' + m + '-' + d + '' + hh + ':' + mm + ':' + ss
    }
})
// 获取新闻数据
function getNewlist() {
    $.get('http://www.liulongbin.top:3006/api/news', function (res) {
        console.log(res);
        if (res.status !== 200) {
            return alert('获取新闻失败')
        }
        console.log(res.data);
        // 不是数组无法遍历
        for (var i = 0; i < res.data.length; i++) {
            res.data[i].tags = res.data[i].tags.split(',')
        }
        // 
        var s = template('moban', res)
        document.getElementById('news-list').innerHTML = s

    })
}
getNewlist()


