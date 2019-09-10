// pages/blog/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      {
        title: '技术',
        component: 'tech'
      },
      {
        title: '随笔',
        component: 'culture'
      },
      {
        title: '专栏',
        component: 'serial'
      }
    ],
    finish: true,
    lastIndex: 0,
    activeIndex: 0,
    dx: 0
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
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        activeIndex: 1
      })
    }
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

  },

  enterSearch: function() {
    wx.navigateTo({
      url: '/pages/search/index'
    });
  },

  handleMove: function(e) {
    console.log(this.data.lastIndex, this.data.activeIndex);
    this.setData({
      finish: false,
      dx: e.detail.dx / 3
    });
  },

  handleFinish: function() {
    console.log(this.data.activeIndex);
    this.setData({
      finish: true,
      lastIndex: this.data.activeIndex,
    });
  },

  handleChangeTab: function(e) {
    this.setData({
      finish: false,
      lastIndex: this.data.activeIndex,
      activeIndex: e.detail.current
    })
  },

  handleClickTab: function(e) {
    this.setData({
      finish: false,
      lastIndex: this.data.activeIndex,
      activeIndex: e.currentTarget.dataset.index
    });
  }
})