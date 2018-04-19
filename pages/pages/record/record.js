// record.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recordTips: '暂无录音操作',
  },

  /**
   * 开始录音
   */
  startRecord: function () {
    var that = this
    that.setData({
      recordTips: '录音中...'
    })
    wx.startRecord({
      success: function (res) {
        var tempFilePath = res.tempFilePath
        console.log(tempFilePath)
      },
      fail: function (res) {
        //录音失败
      },
      complete: function () {
        //录音完成
      }
    })
    setTimeout(function () {
      //结束录音  
      that.setData({
        recordTips: '结束录音'
      })
      wx.stopRecord()
    }, 5000)
  },

  /**
   * 结束录音
   */
  stopRecord: function () {
    var that = this
    that.setData({
      recordTips: '结束录音'
    })
    wx.stopRecord()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})