function getxinwen() {
    $.get('http://www.liulongbin.top:3006/api/news', function (res) {
        console.log(res);
        if (res.status !== 200) {
            return alert('失败')
        }
        console.log(res.data);

        for (var i = 0; i < res.data.length; i++) {
            res.data[i].tags = res.data[i].tags.split(',')
        }
        var s = template('moban', res)
        document.getElementById('news-list').innerHTML = s
    })
}
getxinwen()

$(function () {

    function getZero(n) {
        return n < 10 ? '0' + n : n
    }

    template.defaults.imports.getshijain = function (date) {
        var ds = new Date(date)

        var y = ds.getFullYear()
        var m = getZero(ds.getMonth() + 1)
        var r = getZero(ds.getDate())

        var h = getZero(ds.getHours())
        var mm = getZero(ds.getMinutes())
        var s = getZero(ds.getSeconds())

        return y + '-' + m + '-' + r + '   ' + h + ':' + mm + ':' + s
    }
})