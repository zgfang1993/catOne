const app = getApp()
Page({
  data: {
    list: []
  },
  onLoad: function() {
    wx.request({
      url: 'http://192.168.31.174:3000/api/getDailyList',
      method: 'get',
      data: {
        name: 1,
        sex: 'fff'
      },
      success: (res)=>{
        console.log(res.data.list)
        this.setData({
          list: res.data.list
        })
      }
    })
  }
});