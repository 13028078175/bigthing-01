// function resouledata(data) {
//     var arr = []
//     for (var k in data) {
//         arr.push(k + '=' + data[k])
//     }
//     return arr.join('&')
// }
// // var str = resouledata = ({
// //     name: 'zs', age: 155
// // })
// // console.log(str);


// function itheima(options) {
//     var xhr = new XMLHttpRequest()

//     var cs = resouledata(options.data)

//     if (options.method.toUpperCase() === 'GET') {
//         xhr.open(options.method, options.url + '?' + cs)
//         xhr.send()
//     } else if (options.method.toUpperCase() === 'POST') {
//         xhr.open(options.method, options.url)
//         xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
//         xhr.send(cs)
//     }

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             var result = JSON.parse(xhr.responseText)
//             options.success(result)
//         }
//     }
// }

// 获取接口地址后面data数据
function getdata(data) {
    var arr = []
    for (var k in data) {
        arr.push(k + '=' + data[k])
    }
    return arr.join("&")
}
// 封装ajax方法接口函数
function itheima(options) {

    var xhr = new XMLHttpRequest()

    var data = getdata(options.data)

    if (options.method.toUpperCase() === 'GET') {
        xhr.open(options.method, options.url + '?' + data)
        xhr.send()
    } else if (options.method.toUpperCase() === 'POST') {
        xhr.open(options.method, options.url)
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        xhr.send(data)
    }

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var result = JSON.parse(xhr.responseText)
            options.success(result)
        }

    }

}

