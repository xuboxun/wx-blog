// pages/blog/serial/index.js
import { dateTimeFormat } from '../../../utils/format.js';
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
    serialList: []
  },

  attached: function () {
    this.getSerialList();
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getSerialList: function() {
      wx.request({
        url: 'https://www.xuboxun.site/api/serial/list',
        success: ({ data }) => {
          const { code, msg, result } = data;
          if (code === 200) {
            this.setData({
              serialList: result.items.map(item => {
                return {
                  ...item,
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
  }
})
