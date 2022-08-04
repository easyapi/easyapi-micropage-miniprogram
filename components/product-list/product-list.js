var app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    component: {
      type: Object,
      value: {},
    },
    url: {
      type: Boolean
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  ready: function () {
    this.properties.component.padding = this.properties.component.padding.replace(/px/g, "rpx")
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 跳转商品详情页
     */
    gotoProductDetail(e) {
      wx.navigateTo({
        url: '/pages/product/detail/detail?id=' + e.currentTarget.dataset.adsvalue.productId
      })
    }
  },
})