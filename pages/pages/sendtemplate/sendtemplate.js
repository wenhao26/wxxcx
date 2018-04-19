// sendtemplate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 表单提交，发送模板消息
   */
  orderSign: function (e) {
    var that = this
    var fId = e.detail.formId;
    var fObj = e.detail.value;

    //表单参数验证
    // if (!fObj.name) {
    //   wx.showModal({
    //     title: '提示',
    //     content: '请填写产品名称',
    //     showCancel: false
    //   })
    // }

    // wx.login({
    //   success: function(res) {
    //     if (res.code) {
    //       // 发起网络请求
    //       wx.request({
    //         url: 'http://www.qjy168.com/wuwh_test/myapi/getaccesstoken.php',
    //         data: {},
    //         header: {},
    //         method: 'POST',
    //         dataType: '',
    //         success: function(res) {
    //           console.log(res.data.access_token)
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

    var openid = 'ohEX80JBjrRTtgeFWlJOMPS0KCrc';
    var token = 'CofPsUbOhcKFGPNZev0LtezrTt2tZTb6qE4GCnI2woshxnxUYsj_nFrizmDHYGQbBRNCoKGJiwB-FYpHOZ1ueTTYo6SLi3iPNovJD4kiJSCF_eMRfpQuVgWVG3GAZT3-IYIbADAAQA';
    var apiurl = 'https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token='+token;  
    var d = {
      "touser": openid,
      "template_id": 'ywEfYPZsag-8aaBcM3q4ydFL-cG-WyjAOERsO8SacvQ',
      "page": 'pages/api/pages/getuserinfo/getuserinfo',
      "form_id": fId,
      "data": {
        "keyword1": {
          "value": fObj.name,
          "color": "#173177"
        },
        "keyword2": {
          "value": fObj.desc,
          "color": "#173177"
        },
        "keyword3": {
          "value": "2017年8月29日",
          "color": "#173177"
        }
      },
      "emphasis_keyword" : ''
    }

    wx.request({
      url: apiurl,
      data: d,
      method: 'POST',
      success: function (res) {
        console.log("push msg");
        console.log(res);
        that.setData({
          d: d.form_id + res.data.errcode + res.data.errmsg
        })
      },
      fail: function (err) {
        // fail  
        console.log("push err")
        console.log(err);
      }
    });

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