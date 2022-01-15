App({

  onLaunch: function(options) {

    var sessionId =wx.getStorageSync('SESSIONID')

    var expiredTime =wx.getStorageSync('EXPIREDTIME')

    var now = +new Date()



    if (now - expiredTime <=1*24*60*60*1000) {

      this.globalData.sessionId = sessionId

      this.globalData.expiredTime = expiredTime

    }

  },

  globalData: {

    sessionId: null,

    expiredTime: 0

  }

})