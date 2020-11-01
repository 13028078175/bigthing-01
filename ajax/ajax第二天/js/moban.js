// function template(id, data) {
//     var str = document.getElementById(id).innerHTML
//     var pattern = /{{\s*([a-zA-Z]+)\s*}}/
//     var patternresult = null
//     while (patternresult = pattern.exec(str)) {
//         str = str.replace(patternresult[0], data[patternresult[1]])
//     }
//     return str
// }





function template(id, data) {
    var str = document.getElementById(id).innerHTML

    var zhengze = /{{\s*([a-zA-Z]+)\s*}}/
    var zhengzejiance = null
    while (zhengzejiance = zhengze.exec(str)) {
        str = str.replace(zhengzejiance[0], data[zhengzejiance[1]])
    }
    return str
}
