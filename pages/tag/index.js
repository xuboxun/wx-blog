// pages/tag/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allTagList: [],
    tagList: [],
    searchValue: '',
    loading: false,
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
        activeIndex: 3
      })
    }
    this.getTagList();
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

  handleInput: function(e) {
    const search = e.detail.value;
    this.setData({
      searchValue: search,
      tagList: this.filterTags(search)
    });
  },

  handleSearch: function(e) {
    const search = this.data.searchValue.toLowerCase();

    this.setData({
      tagList: this.filterTags(search)
    })
  },

  filterTags: function(text) {
    const search = text.toLowerCase();
    return this.data.allTagList.filter(item => {
      const { name, title } = item;

      return name.toLowerCase().indexOf(search) > -1 || title.toLowerCase().indexOf(search) > -1;
    });
  },

  getTagList: function() {
    this.setData({
      loading: true
    })
    wx.request({
      url: 'https://www.xuboxun.site/api/tag/list',
      success: ({ data }) => {
        const { code, msg, result } = data;
        if (code === 200) {
          this.setData({
            allTagList: result.items,
            tagList: result.items
          });
        }
      },
      complete: () => {
        this.setData({
          loading: false
        });
      }
    })
  }
})