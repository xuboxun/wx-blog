// components/tab-bar/index.js
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
    activeIndex: 0,

    color: "#8c8c8c",
    selectedColor: "#595959",
    list: [
      {
        pagePath: "/pages/index/index",
        iconPath: "../images/home.png",
        selectedIconPath: "../images/home-fill.png",
        text: "最新"
      },
      {
        pagePath: "/pages/blog/index",
        iconPath: "../images/file-text.png",
        selectedIconPath: "../images/file-text-fill.png",
        text: "博客"
      },
      {
        pagePath: "/pages/app/index",
        iconPath: "../images/app.png",
        selectedIconPath: "../images/app.png"
      },
      {
        pagePath: "/pages/tag/index",
        iconPath: "../images/tags.png",
        selectedIconPath: "../images/tags-fill.png",
        text: "标签"
      },
      {
        pagePath: "/pages/about/index",
        iconPath: "../images/mine.png",
        selectedIconPath: "../images/mine-fill.png",
        text: "我的"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset;
      const url = data.path;
      wx.switchTab({ url });
      this.setData({
        activeIndex: data.index
      });
    }
  }
})
