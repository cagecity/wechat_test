Page({

  data: { loading: false },

  tap: function() {

    // 把按钮的loading状态显示出来

    this.setData({

      loading: true

    })

    var thisApp = getApp()
    console.log(thisApp.globalData.sessionId)

    // 接着做耗时的操作

  }

})