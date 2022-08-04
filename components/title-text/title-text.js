Component({
  /**
   * 组件的属性列表
   */
  properties: {
    component: {
      type: Object,
      value: {},
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

  /**
   * 组件的方法列表
   */
  methods: {
  }
})
