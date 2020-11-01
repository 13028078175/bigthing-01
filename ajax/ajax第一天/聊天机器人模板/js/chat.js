$(function () {
  // 初始化右侧滚动条
  // 这个方法定义在scroll.js中
  resetui()

  $('#btnSend').on('click', function () {
    var test = $('#ipt').val().trim()
    if (test.length == 0) {
      return $('#ipt').val('')
    }
    $('#talk_list').append(`<li class="right_word"><img src = "img/person02.png"/>
     <span>${test}</span></li >`)
    $('#ipt').val('')
    // 重置滚动条
    resetui()
    getmsg(test)
  })

  function getmsg(text) {
    $.ajax({
      method: 'GET',
      url: 'http://www.escook.cn:3006/api/robot',
      data: {
        spoken: text
      },
      success: function (res) {
        console.log(res);
        if (res.message === "success") {
          var msg = res.data.info.text
          $('#talk_list').append(`<li class="left_word">
          <img src = "img/person01.png"/><span>${msg}</span></li >`)
          // 重置滚动条
          resetui()
          getVideo(msg)
        }
      }
    })

    function getVideo(text) {
      $.ajax({
        method: 'GET',
        url: 'http://www.escook.cn:3006/api/synthesize',
        data: { text: text },
        success: function (res) {
          console.log(res);
          if (res.status == 200) {
            $('#voice').attr('src', res.voiceUrl)
          }
        }

      })
    }
  }



  // function getKey() {
  //   var ss = $('#ipt').val().trim()
  //   $('.talk_list').append(`<li class="right_word">
  //     <img src="img/person02.png" /> <span>${ss}</span>
  //   </li>`)
  //   $('#ipt').val('')
  //   // 重置滚动条
  //   resetui()
  //   getrobot(ss)

  // }
  // // 点击发送按钮发送文本
  // $('#btnSend').on('click', function () {
  //   getKey()
  // })

  // function getrobot(text) {
  //   // console.log(123);
  //   $.get('http://www.escook.cn:3006/api/robot', { spoken: text }, function (res) {
  //     console.log(res);
  //     if (res.message === "success") {
  //       var msg = res.data.info.text
  //       $('.talk_list').append(`<li class="left_word">
  //       <img src="img/person01.png" /> <span>${msg}</span>
  //     </li>`)
  //       // 重置滚动条
  //       resetui()
  //       getVoice(msg)
  //     }
  //   })
  // }


  // function getVoice(text) {
  //   $.ajax({
  //     method: 'GET',
  //     url: 'http://www.escook.cn:3006/api/synthesize',
  //     data: { text: text },
  //     success: function (res) {
  //       // console.log(res);
  //       if (res.status === 200) {
  //         $('#voice').attr('src', res.voiceUrl)
  //       }
  //     }

  //   })
  // }

  // $(window).on('keydown', function (e) {
  //   // console.log(e);
  //   if (e.keyCode == 13) {
  //     getKey()
  //   }
  // })
})