// pages/apply/apply.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active:'',
    steps: [
      {
        desc: '摊主信息',
      },
      {
        desc: '填写摊位信息',
      },
      {
        desc: '核实提交信息',
      },
      {
        desc: '审核结果',
      },
    ],
    name:'',
    mobile:'',
    IDCard:'',
    fileList:'',
    boothName:'',
    sex:['男','女'],
    type: ['居民身份证', '宁波', '温州'],
    boothType:['美食小吃','个人用品','家庭用品'],
    category:['烧烤','早餐','面食','水果'],
    stagesOfUse:['早市 6:00-15:00','夜市 18:00-5:00','全天 24小时'],
    address: ['广东省', '中山市', '五桂山街道'],
  },
  //姓名
  getName(e){
    // console.log(e);
    this.setData({
      name:e.detail
    })
  },
  //电话
  getMobile(e){
    this.setData({
      mobile:e.detail
    })
  },
  getIDCard(e){
    this.setData({
      IDCard:e.detail
    })
  },
  getBoothName(e){
    this.setData({
      boothName: e.detail
    })
  },
  bindTypeChange: function(e) {
    this.setData({
      Typeindex: e.detail.value
    })
  },
  bindSexChange: function(e) {
    // console.log(e)
    this.setData({
      sexIndex: e.detail.value
    })
  },
  //申请摊位的类型
  bindBoothTypeChange(e){
    this.setData({
      boothTypeindex: e.detail.value
    })
  },
  //申请摊位的类型分类
  bindCategoryChange(e){
    console.log(e.detail.value);
    this.setData({
      categoryindex: e.detail.value
    })
  },
  //申请摊位的时间

  //申请摊位的有营业时间段
  bindStagesOfUseChange: function(e) {
    // console.log(e)
    this.setData({
      index: e.detail.value
    })
  },
  //申请地摊的地址
  bindRegionChange: function (e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      address: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  goto(){
    this.setData({
      active:1
    })
    // console.log(this.active);
  },
  gotoBack(){
    this.setData({
      active:this.data.active-1
    })
  },
  gotoNext(){
    this.setData({
      active:this.data.active+1
    })
  },
  gotoEnd(){
    this.setData({
      active:3
    })
    // console.log(this.active);
  },
  gotoHome(){
    wx.navigateTo({
      url: '../home/home.wxml',
    })
  },
  // goto(){
  //   this.columns = ['居民身份证', '宁波', '温州']
  // },
  onChange(event) {
    const { picker, value, index } = event.detail;
    Toast(`当前值：${value}, 当前索引：${index}`);
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