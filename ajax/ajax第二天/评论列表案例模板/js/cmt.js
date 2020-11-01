
// function getData() {
//     $.ajax({
//         methid: 'GET',
//         url: 'http://www.liulongbin.top:3006/api/cmtlist',
//         data: {},
//         success: function (res) {
//             // console.log(res);
//             if (res.status !== 200) {
//                 return alert('获取失败')
//             }
//             $('#cmt-list').empty()
//             $.each(res.data, function (i, item) {
//                 // console.log(item);
//                 $('#cmt-list').append(`<li class="list-group-item">
//                    <span class="badge" style="background-color: #F0AD4E;">评论时间：${item.time}</span>
//                    <span class="badge" style="background-color: #5BC0DE;">评论人：${item.username}</span>
//                    ${item.content}</li>`)

//             })
//         }
//     })

// }
// getData()

// $(function () {
//     $('#formAddCmt').submit(function (e) {
//         e.preventDefault()
//         var data = $(this).serialize()
//         $.post('http://www.liulongbin.top:3006/api/addcmt', data, function (res) {
//             console.log(res);
//             if (res.status !== 201) {
//                 return alert('添加失败')
//             }
//             getData()
//             $('#formAddCmt')[0].reset()
//         })
//     })

// })

function getpinglun() {
    $.get('http://www.liulongbin.top:3006/api/cmtlist', function (res) {
        console.log(res);
        if (res.status !== 200) {
            return alert('获取评论失败')
        }
        $('#cmt-list').empty()
        $.each(res.data, function (i, item) {
            $('#cmt-list').append(`<li class="list-group-item">
            <span class="badge" style="background-color: #F0AD4E;">评论时间：${item.time}</span>
            <span class="badge" style="background-color: #5BC0DE;">评论人：${item.username}</span>
            ${item.content}</li>`)
        })
    })

}
getpinglun()

$(function () {
    $('#formAddCmt').submit(function (e) {
        e.preventDefault()
        // 获取表单里面的所有数据
        var data = $(this).serialize()
        $.post('http://www.liulongbin.top:3006/api/addcmt', data, function (res) {
            console.log(res);
            if (res.status !== 201) {
                return alert('获取数据失败')
            }
            getpinglun()
            // jquery转换为dom 
            $('#formAddCmt')[0].reset()
        })

    })

})