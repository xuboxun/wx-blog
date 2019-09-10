// pages/blog/tech/index.js
import { blogTypeFormat, dateTimeFormat } from '../../../utils/format.js';
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    loading: false,
    blogList: [],
    pageNum: 1,
    pageSize: 10,
    total: 0,
    reactBottom: false
  },

  attached: function() {
    this.getTechList();
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getTechList: function() {
      const { pageSize, pageNum } = this.data;
      this.setData({
        loading: true
      });
      wx.request({
        url: 'https://www.xuboxun.site/api/blog/list',
        data: {
          type: 'tech',
          pageNum: this.data.pageNum,
          pageSize: this.data.pageSize
        },
        success: ({ data }) => {
          const { code, msg, result } = data;
          if (code === 200) {
            this.setData({
              total: result.total,
              blogList: [
                ...this.data.blogList,
                ...result.items.map(item => {
                  return {
                    ...item,
                    type: blogTypeFormat(item.type),
                    createTime: dateTimeFormat(new Date(item.createTime))
                  }
                })
              ],
              reachBottom: pageNum * pageSize >= result.total
            });
          }
        },
        complete: () => {
          this.setData({
            loading: false
          });
        }
      })
    },

    handleScrollToBottom: function() {
      const { pageSize, pageNum, total } = this.data;
      if (pageSize * pageNum < total) {
        this.setData({
          pageNum: pageNum + 1
        }, () => {
          this.getTechList();
        })
      }
    }
  }
})
