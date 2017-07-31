Page({
  data:{

  },
  data: {
    point:{
      x:1,
      y:1
    }
  },
  getData: function (event) {
    console.log(event);
    // wx.request({
    //   url: 'test.php', //仅为示例，并非真实的接口地址
    //   data: {
    //     x: '',
    //     y: ''
    //   },
    //   header: {
    //     'content-type': 'application/json'
    //   },
    //   success: function (res) {
    //     console.log(res.data)
    //   }
    // })
  },
  move:function(event){
    let x = event.touches[0].clientX;
    let y = event.touches[0].clientY;
    var point = {"x":x,"y":y}
    // console.log(point);
    this.setData({
      point:point
    });

    console.log(this.data.point);
  }  
})