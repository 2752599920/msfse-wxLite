// pages/home/home.js
import {Home} from './home-model'
var home = new Home();
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerData:[],
    category:[],
    boothList:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadSwiper()
    this.loadCategory()
    this.loadBoothList()
  },
  loadSwiper(){
    let options = {
      url:'getSlide'
    }
    home._get(options,(res)=>{
      console.log(res);
      this.setData({
        bannerData:res.data.slide
      })
    })
  },
  loadCategory(){
    let options = {
      url:'getCategory'
    }
    home._get(options,(res)=>{
      this.setData({
        category:res.data.Category
      })
    })
  },
  loadBoothList(){
    let options = {
      url:'getBoothList'
    }
    home._get(options,(res)=>{
      //获取用户位置
      wx.getLocation({
        altitude: 'altitude',
        success:(result)=>{
          res.data.BoothList.forEach(item => {
            let {GPS}=item;
            let latitude = GPS.split(',')[0];
            let longitude = GPS.split(',')[1];
            item.distance = app.GetDistance(result.latitude,result.longitude,latitude,longitude);
            this.setData({
              boothList:res.data.BoothList
            })
          });
        }
      })
    })
  },
  goto(e){
    let id = e.currentTarget.dataset.id;
    let cover = e.currentTarget.dataset.cover;
    wx.navigateTo({
      url: `../category/category?id=${id}&cover=${cover}`,
    })
  },
  goShop(e){
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `../shopinfo/shopinfo?id=${id}`,
    })
  },
  gotoSearch(){
    wx.navigateTo({
      url: '../search/search',
    })
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