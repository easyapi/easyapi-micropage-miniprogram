App({
  microPage(e) {
    let url = '';
    let adsvalue = e.currentTarget.dataset.adsvalue;
    if (adsvalue.model === "URL") {

    } else if (adsvalue.model === "Product" && adsvalue.modelValue) {
      url = '/pages/product/detail/detail?id=' + adsvalue.modelValue
    } else if (adsvalue.model === "ProductCategory") {
      url = '/pages/product/list/list?productCategoryId=' + adsvalue.modelValue + "&parent=" + adsvalue.parent
    } else if (adsvalue.model === "ProductSearch") {
      url = '/pages/product/list/list?1=1'
      let params = JSON.parse(adsvalue.modelValue)
      for (let param of params) {
        url += '&' + param.param + '=' + param.value
      }
    } else if (adsvalue.model === "MicroPage") {
      url = '/pages/micro/page/page?id=' + adsvalue.modelValue
    }
    wx.navigateTo({
      url: url
    })
  },

  onLaunch: function () {
    let _that = this;
    // 检查更新版本
    _that.checkUpdateVersion()
  },

  /**
   * 检测当前的小程序
   * 是否是最新版本，是否需要下载、更新
   */
  checkUpdateVersion() {
    //获取小程序更新机制兼容
    if (wx.canIUse("getUpdateManager")) {
      //创建 UpdateManager 实例
      const updateManager = wx.getUpdateManager();
      //检测版本更新
      updateManager.onCheckForUpdate(function (res) {
        // 请求完新版本信息的回调
        if (res.hasUpdate) {
          //监听小程序有版本更新事件
          updateManager.onUpdateReady(function () {
            wx.showModal({
              title: '更新提示',
              content: '新版本已经准备好，是否重启应用？',
              success(res) {
                if (res.confirm) {
                  // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                  updateManager.applyUpdate();
                }
              }
            })
          })
          updateManager.onUpdateFailed(function () {
            // 新版本下载失败
            wx.showModal({
              title: '已经有新版本咯~',
              content: '新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~',
            })
          })
        }
      })
    } else {
      // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
      wx.showModal({
        title: "提示",
        content: "当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。"
      });
    }
  }
})