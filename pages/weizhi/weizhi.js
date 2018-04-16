// pages/weizhi/weizhi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: 23.135522508991304,
    longitude: 113.35744097351076,
    locationInfo: '',
    markers: [{
      iconPath: "../../images/icon/selected/index.png",
      id: 0,
      latitude: 23.135522508991304,
      longitude: 113.35744097351076,
      width: 20,
      height: 20,
      title: '我这里',
      callout: {
        content: '南方通信大厦',
        color: '#000',
        fontSize: 20,
        borderRadius: 5,
        bgColor: '#ccc',
        padding: 2,
        display: 'ALWAYS',
        textAlign: 'center'
      },
      label: {
        content: 'IT',
        color: '#000',
        fontSize: 10,
        x: 0,
        y: 0,
        borderWidth: 15,
        borderColor: '#e2b',
        borderRadius: 4,
        bgColor: '#f1f1f1',
        padding: 5,
        textAlign: 'center'
      }
    }],
    circles: [{
      latitude: 23.135522508991304,
      longitude: 113.35744097351076,
      color: '#FF2334',
      fillColor: '#f0f0f0',
      radius: 800,
      strokeWidth: 2
    }]
  },

  /**
   * 获取当前的地理位置、速度。当用户离开小程序后，此接口无法调用；
   * 当用户点击“显示在聊天顶部”时，此接口可继续调用。
   */
  getLocation: function() {
    var that = this
    wx.getLocation({
      type: 'wgs84',
      altitude: true,
      success: function(res) {
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude
        })
      },
    })
  },

  /**
   *  打开地图选择位置
   */
  chooseLocation: function() {
    var that = this
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userLocation']) {
          wx.chooseLocation({
            success: function (res) {
              console.log(res)
              that.setData({
                locationInfo: res.name + ',' + res.address + ',' + res.latitude + ',' + res.longitude
              })
            },
          })
        } else {
          wx.authorize({
            scope: 'scope.userLocation',
            success: function() {
              wx.chooseLocation({
                success: function(res) {
                  console.log(res)
                  that.setData({
                    locationInfo: res.name + ',' + res.address + ',' + res.latitude + ',' + res.longitude
                  })
                },
              })
            }
          })
        }
      }
    })
  },

  /**
   *  使用微信内置地图查看位置
   */
  openLocation: function() {
    // 需要进行授权，前面已经进行处理，此处不进行授权处理
    wx.openLocation({
      latitude: this.data.latitude,
      longitude: this.data.longitude,
      success: function(res) {
        console.log(res)
      }
    })
  },

  getCenterLocation: function() {
    this.mapCtx.getCenterLocation({
      success: function(res) {
        console.log(res)
      }
    })
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },
  translateMarker: function () {
    this.mapCtx.translateMarker({
      markerId: 0,
      autoRotate: true,
      duration: 1000,
      destination: {
        latitude: 23.135522508991304,
        longitude: 1113.35744097351076,
      },
      animationEnd() {
        console.log('animation end')
      }
    })
  },
  includePoints: function () {
    this.mapCtx.includePoints({
      padding: [10],
      points: [{
        latitude: 23.10229,
        longitude: 113.3345211,
      }, {
        latitude: 23.00229,
        longitude: 113.3345211,
      }]
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
    // 使用 wx.createMapContext 获取 map 上下文
    this.mapCtx = wx.createMapContext('myMap')
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