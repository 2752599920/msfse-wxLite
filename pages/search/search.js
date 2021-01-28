// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue:'',
    // keyWords:[],
    history:[],
    bgrandom:`38% 62% 63% 37% / 43% 44% 56% 59%`,
    bgc:`radial-gradient( circle farthest-corner at 11.7% 80.6%,  rgba(249,185,255,1) 0%, rgba(177,172,255,1) 49.3%, rgba(98,203,255,1) 89% )`,
    R:0,
    S:1,
    timer:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.readKeyWords();
  },
  shuffle(arr) {
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
        var index = parseInt(Math.random() * (len - i));
        var temp = arr[index];
        arr[index] = arr[len - i - 1];
        arr[len - i - 1] = temp;
    }
    return arr;
  },
  BR(){
    let R = this.data.R +20;
    let S = (Math.random(1)+9)/10
    this.setData({
      bgrandom: `${this.random(38)}% ${this.random(62)}% ${this.random(63)}% ${this.random(37)}% / ${this.random(43)}% ${this.random(44)}% ${this.random(56)}% ${this.random(59)}%`,
      // bgc:`radial-gradient( circle farthest-corner at 11.7% 80.6%,  rgba(${arr[0]}) 0%, rgba(${arr[1]}) 49.3%, rgba(${arr[2]}) 89% )`
      R: R,
      S: S
    })
  },
  random(num){
    let data = Math.floor(Math.random(1)*6)
    let arr = [num + data*4,num - data/4];
    // console.log(arr[Math.floor(Math.random(1)*2)]);
    return arr[Math.floor(Math.random(1)*2)];
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
    this.setData({
      timer:setInterval(()=>{
        this.BR()
      },1000)
    })
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
    clearInterval(this.data.timer)
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