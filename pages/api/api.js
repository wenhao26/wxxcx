// pages/api/api.js

// 微信登录
// wx.login({
//   success: function (res) {
//     if (res.code) {
//       wx.request({
//         method: 'GET',
//         url: 'http://192.168.6.23/applet/api/getOpenid.php',
//         data: {
//           code_str: res.code
//         },
//         success: function (res) {
//           // 获取用户信息
//           var openid = res.data
//           if (openid) {
//             wx.getUserInfo({
//               success: function (res) {
//                 console.log(res)
//               }
//             })
//           }
//         }
//       })
//     }
//   },
//   fail: function () {

//   },
//   complete: function () {

//   }
// })

Page({

  /**
   * 页面的初始数据
   */
  data: {
    openid: '--',
    session_key: '--',
    userinfos: {
      nickName: '--',
      gender: '--',
      avatarUrl: '../../images/icon/normal/index.png'
    },
    
  },

  /**
   * 获取用户openid
   */
  getUserOpenid: function() {
    var that = this
    // 登录获取 code 值
    wx.login({
      success: function(res) {
        if (res.errMsg =='login:ok' && res.code) {
          // 通过 code 换取 openid
          wx.request({
            url: 'http://192.168.6.23/applet/api/getOpenid.php',
            data: {
              code_str: res.code
            },
            success: function(res) {
              var jsonStr = res.data
              jsonStr = jsonStr.replace(" ", "")
              if (typeof jsonStr != 'object') {
                jsonStr = jsonStr.replace(/\ufeff/g, "")
                var data = JSON.parse(jsonStr)
                that.setData({
                  openid: data.openid,
                  session_key: data.session_key
                })
              }

            }
          })
        }
      }
    })
  },

  /**
   * 获取用户信息
   */
  getUserInfo: function() {
    var that = this
    // 是否授权
    wx.getSetting({
      success: function(res) {
        if (!res.authSetting['scope.userInfo']) {
          wx.authorize({
            scope: 'scope.userInfo',
            success() {
              wx.getUserInfo({
                lang: 'zh_CN',
                success: function (res) {
                  that.setData({
                    'userinfos.nickName': res.nickName
                  })
                }
              })
              
            }
          })
        } else {
          wx.getUserInfo({
            lang: 'zh_CN',
            success: function (res) {
              console.log(res.userInfo.gender)
              that.setData({
                'userinfos.nickName': res.userInfo.nickName,
                'userinfos.avatarUrl': res.userInfo.avatarUrl,
                'userinfos.gender': res.userInfo.gender
              })
            }
          })

        }
      }
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