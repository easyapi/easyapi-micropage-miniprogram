var app = getApp();
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

  /**
   * 组件的方法列表
   */
  methods: {
    goto(e) {
      app.microPage(e);
    }
  },
})