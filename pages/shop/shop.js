// pages/shop/shop.js
import {ShopList} from './shop-model.js'
var shopList = new ShopList()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ShopList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);
    this.loadShopList(options.type)

  },
  loadShopList(type){
    shopList.getShopList(type,(res)=>{
      this.setData({
        ShopList:res.data.BoothList
      })
    })
  },
  
  gotoBoothList(e){
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `../shopinfo/shopinfo?id=${id}`,
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