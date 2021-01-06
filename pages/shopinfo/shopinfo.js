// pages/shopinfo/shopinfo.js
import {ShopInfo} from './shopinfo-model'
var shopInfo = new ShopInfo();
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    booth:[],
    commentList:[],
    distance:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadshopInfo(options.id)
    this.loadCommentList(options.id)
  },
  loadshopInfo(id){
    var options = {
      url:`getBooth?boothId=${id}`
    }
    shopInfo._get(options,(res)=>{
      let {GPS}=res.data.Booth[0];
      let latitude = GPS.split(',')[0];
      let longitude = GPS.split(',')[1];
      wx.getLocation({
        altitude: 'altitude',
        success:(result)=>{
          let distance = app.GetDistance(result.latitude,result.longitude,latitude,longitude);
          this.setData({
            booth:res.data.Booth,
            distance
          })
        }
      })
    })
  },
  loadCommentList(id){
    var options = {
      url:`getCommentList?boothId=${id}`
    }
    shopInfo._get(options,(res)=>{
      // console.log(res);
      this.setData({
        commentList:res.data.CommentList
      })
    })
  },
  goComments(e){
    let id = e.currentTarget.dataset.id
    console.log(id);
    wx.navigateTo({
      url: `../comment/comment?boothId=${id}`,
    })
    // console.log(id);
  },
  goReport(){
    wx.navigateTo({
      url: '../report/report',
    })
  },
  /**
   * 
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