// pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageList: [],
    imgPath: '../../images/icon/normal/index.png'
  },

  /**
   * 选择图片
   */
  chooseImg: function() {
    var that = this
    wx.chooseImage({
      count: 4,
      sizeType: ['original'],
      success: function(res) {
        console.log(res)
        that.setData({
          imageList: res.tempFilePaths,
          imgPath: res.tempFilePaths[0]
        })
      },
    })
  },

  /**
   * 预览图片
   */
  previewCurrImg: function() {
    wx.previewImage({
        urls: this.data.imageList,
    })
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