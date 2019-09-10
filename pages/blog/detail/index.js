// pages/blog/detail/index.js
const { blogTypeFormat, dateTimeFormat } = require('../../../utils/format.js');
import MarkdownIt from '../../../lib/markdown-it.min.js';
import anchor from '../../../lib/markdownItAnchor.js';
import toc from '../../../lib/markdown-it-table-of-contents.js';

const md = new MarkdownIt();
md.use(anchor);
md.use(toc, {
  includeLevel: [1, 2, 3],
  containerClass: 'markdown-toc-container',
  containerHeaderHtml: '<div class="toc-container-header">文章目录</div>'
});

Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.name);
    this.setData({
      loading: true,
    });
    wx.request({
      url: 'https://www.xuboxun.site/api/blog/detail',
      data: {
        name: options.name
      },
      success: ({ data }) => {
        const { code, msg, result } = data;
        if (code === 200) {
          let content = md.render(result.content);

          content = content.replace(/<([^\>]+)(\sclass=")/g, (match, p1) => {
            return `<${p1} class="wx-md-${p1} `;
          });
          content = content.replace(/<([^/][^>]*)>/g, (match, p1) => {
            return `<${p1} class="wx-md-${p1}">`;
          });

          this.setData({
            detail: {
              ...result,
              content: content,
              type: blogTypeFormat(result.type),
              createTime: dateTimeFormat(new Date(result.createTime))
            }
          });
        }
      },
      complete: () => {
        this.setData({
          loading: false,
        });
      }
    })
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