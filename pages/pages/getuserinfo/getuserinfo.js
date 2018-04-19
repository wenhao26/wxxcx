var app = getApp()
Page({
  data: {
    hasUserInfo: false
  },
  getUserInfo: function () {
    var that = this

    // wx.login({
    //   success: function(res) {
    //     if (res.code) {
    //       // 发起网络请求
    //       wx.request({
    //         url: 'http://www.qjy168.com/wuwh_test/myapi/getuserinfo.php?code='+res.code,
    //         data: {},
    //         header: {},
    //         method: 'POST',
    //         dataType: '',
    //         success: function(res) {
    //           console.log(res)
    //         },
    //         fail: function(res) {},
    //         complete: function(res) {},
    //       })
    //     }
    //   },
    //   fail: function(res) {},
    //   complete: function(res) {},
    // })
    // return
   

    if (app.globalData.hasLogin === false) {
      wx.login({
        success: _getUserInfo
      })
    } else {
      _getUserInfo()
    }

    function _getUserInfo() {
      wx.getUserInfo({
        success: function (res) {
          that.setData({
            hasUserInfo: true,
            userInfo: res.userInfo
          })
          that.update()
        }
      })
    }
  },
  clear: function () {
    this.setData({
      hasUserInfo: false,
      userInfo: {}
    })
  }
})
