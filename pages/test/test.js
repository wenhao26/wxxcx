// pages/test/test.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    rangeArr: ['天河区', '海珠区', '白云区', '越秀区', '萝岗区'],
    rangeVal: 0,
    multiArray: [['无脊柱动物', '脊柱动物'], ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'], ['猪肉绦虫', '吸血虫']],
    multiIndex: [0, 0, 0],
    percent: 1,
    width: 12,
    activeColor: 'red',
    iconType: 'waiting'
  },

  /**
   * 点击事件
   */
  formSubmit: function(e) {
    console.log(e.detail.value)
  },
  sliderChange: function (e) {
    console.log(e)
  },
  pickerChange1: function(e) {
    var id = e.detail.value
    // console.log(this.data.rangeArr[id])
    this.setData({
      rangeVal: id
    })
  },
  pickerCel1: function() {
    console.log('取消了')
  },
  startLoad: function(e) {
    var that = this
    var timer = setInterval(function() {
      var curPercent = that.data.percent
      console.log('ing')
      if (curPercent>=100) {
        console.log('end')
        clearInterval(timer);
        that.setData({
          activeColor: 'green',
          iconType: 'success'
        })
      }
      that.setData({
        percent: curPercent + 1
      })
    }, 100);
  },
  checkChange: function(e) {
    console.log(e)
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