// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue:'',
    // keyWords:[],
    history:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.readKeyWords();
  },
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  readKeyWords(){
    if(wx.getStorageSync('KeyWords')){
      this.setData({
        history:wx.getStorageSync('KeyWords')
      })
    }
  },
  sendKeyWords(){
    let history = this.data.history;
    if(this.data.inputValue){
      history.unshift(this.data.inputValue)
      history = new Array(...new Set(history))
      wx.setStorageSync('KeyWords',history)
    }
    this.readKeyWords();
    // console.log(this.data.history);
  },
  delHistroyWords(){
    wx.setStorageSync('KeyWords',[])
    this.readKeyWords()
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