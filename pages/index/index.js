//index.js
import { blogTypeFormat, dateTimeFormat } from '../../utils/format.js';

Page({
  data: {
    imgUrls: [
      'https://www.xuboxun.site/assets/images/book.webp'
    ],
    blogList: [],
    loading: false
  },
  onShow: function (options) {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        activeIndex: 0
      })
    }
    this.getRecentList();
  },
  getRecentList: function() {
    this.setData({
      loading: true
    });
    wx.request({
      url: 'https://www.xuboxun.site/api/blog/list',
      data: {
        pageNum: 1,
        pageSize: 10
      },
      success: ({ data }) => {
        const { code, msg, result } = data;
        if (code === 200) {
          this.setData({
            blogList: result.items.map(item => {
              return {
                ...item,
                type: blogTypeFormat(item.type),
                createTime: dateTimeFormat(new Date(item.createTime))
              }
            })
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
