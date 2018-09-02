Component({
  properties: {
  },
  data: {
    someData: 1
  },
  methods: {
    linkTo: function(e) {
      console.log(e.currentTarget.dataset.page)
      const { page} = e.currentTarget.dataset;
      console.log(`page/${page}`)
      wx.redirectTo({
        url: `/pages/${page}/${page}`
      })
    }
  }
})