// pages/serial/index.js
import { dateTimeFormat } from '../../utils/format.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    loading: false,
    detail: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      name: options.name
    });
    this.getSerialDetail();
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

  },

  getSerialDetail: function () {
    this.setData({
      loading: true
    });
    wx.request({
      url: 'https://www.xuboxun.site/api/serial/detail',
      data: {
        name: this.data.name
      },
      success: ({ data }) => {
        const { code, msg, result } = data;
        if (code === 200) {
          this.setData({
            detail: {
              ...result,
              blogs: result.blogs.map(item => {
                return {
                  ...item,
                  createTime: dateTimeFormat(new Date())
                }
              })
            }
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