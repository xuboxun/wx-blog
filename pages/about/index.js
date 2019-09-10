// pages/about/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    intro: [
      { key: '姓名', value: '徐博勋' },
      { key: '属性', value: '程序猿, 文艺青年' },
      { key: '性别', value: '男' },
      { key: '生日', value: '1997年1月19日' },
      { key: '邮箱', value: 'ixuboxun@163.com' },
      { key: '博客', value: 'xuboxun.site' },
      { key: 'GitHub', value: 'github.com/xuboxun' },
      { key: '童年', value: '江南水乡, 安徽铜陵' },
      { key: '我的大学', value: '武汉, 华中农业大学, 计算机科学与技术' },
      { key: '在人间', value: '浙江, 杭州, 滨江区' },
      { key: '喜欢的话', value: '你心中的火焰，灼烧的不仅是你的内心，还会成为照亮世界的光，温暖他人' },
      { key: '书', value: '沉默的大多数, 看见' },
      { key: '影', value: '无问西东' },
      { key: '音', value: '网易云音乐, 没有绝对喜欢的歌, 听着好听都喜欢, 偏好老一点的和eason的歌' },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        activeIndex: 4
      })
    }
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