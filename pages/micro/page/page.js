const {
  getMicroPageDetail
} = require('../../../api/micro-page')
const {
  formatComponent
} = require('../../../utils/micro-page')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageComponents: [],
  },

  getMicroPage(id) {
    var that = this
    let params = {}
    getMicroPageDetail(params, id).then(res => {
      wx.setNavigationBarTitle({
        title: res.data.content.title
      })
      let pageComponents = []
      for (let pageComponent of res.data.content.pageComponents) {
        pageComponents.push(JSON.parse(pageComponent.data));
      }
      pageComponents = formatComponent(pageComponents)
      that.setData({
        pageComponents: pageComponents
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getMicroPage(options.id)
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