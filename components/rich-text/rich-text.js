var app = getApp();

Component({
  properties: {
    component: {
      type: Object,
      value: {}
    }
  },
  /**
   * 组件的初始数据
   */
  data: {

  },

  ready: function () {
    this.properties.component.padding = this.properties.component.padding.replace(/px/g, "rpx")
    this.properties.component.borderRadius = this.properties.component.borderRadius.replace(/px/g, "rpx")
  },

  methods: {

  }
})