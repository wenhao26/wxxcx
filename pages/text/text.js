// pages/text/text.js
var initData = '初始信息'
var extraLine = []
Page({

  /**
   * 页面的初始数据
   */
  data: {
    'text': '简单点啰'
  },
  
  /**
   * 点击事件
   */
  add: function(e) {
    extraLine.push('添加了')
    this.setData({
      'text': initData + '\n' + extraLine.join('\n') 
    })
  },
  remove: function(e) {
    var text = this.data.text
    if (extraLine.length>0) {
      console.log(extraLine.length)
      extraLine.pop()
      this.setData({
        text: initData + '\n' + extraLine.join('\n')
      })
    }
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