// pages/share/share.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shareTickets: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showShareMenu({
      withShareTicket: true,
      success: function(res) {
        console.log(res)
      }
    })

    // wx.hideShareMenu({
    //   success: function (res) {
    //     console.log(res)
    //   },
    //   fail: function (res) {
    //     console.log(res)
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  hideShare: function() {
    wx.hideShareMenu({
      success: function (res) {
        console.log(res)
      },
      fail: function(res) {
        console.log(res)
      }
    })
  },

  getShareInfo: function() {
    wx.getShareInfo({
      shareTicket: this.data.shareTickets,
      success: function(res) {
        var encryptedData = res.encryptedData
        var iv = res.iv
        wx.login({
          success: res => {
            wx.request({
              url: 'http://192.168.6.176/applet/api/getOpenid.php?code_str='+res.code,
              success: function(res) {
                var jsonStr = res.data
                jsonStr = jsonStr.replace(" ", "")
                if (typeof jsonStr != 'object') {
                  jsonStr = jsonStr.replace(/\ufeff/g, "") // 重点
                  var jsonData = JSON.parse(jsonStr)
                  var session_key = jsonData.session_key

                  wx.request({
                    url: 'http://192.168.6.176/applet/api/getShareInfo.php',
                    data: {
                      session_key: session_key,
                      encryptedData: encryptedData,
                      iv: iv
                    },
                    success: function(res) {
                      console.log(res)
                    }
                  })

                }

              }
            })
          }
        })
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (e) {
    if (e.from === 'button') {
      // 来自页面内转发按钮
      console.log(e.target)
    }
    return {
      title: '测试一下-自定义转发标题-hujiao',
      path: '/pages/index/index?id=1',
      success: res => {
        // 转发成功
        this.setData({
          shareTickets: res.shareTickets[0]
        })
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }

})