// pages/my/my.js
import {My} from './my-model.js'
var my = new My()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //判断token是否存在
    if(!wx.getStorageSync('token')){
      wx.navigateTo({
        url: '../login/login',
      })
    }
  },
  logout(){
    wx.removeStorageSync('token');
    wx.removeStorageSync('userInfo');
    wx.navigateTo({
      url: '../login/login',
    })
  },
  gotoApply:function(){
    wx.navigateTo({
      url: '../apply/apply',
    })
  },
  gotoreply:function(){
    wx.navigateTo({
      url: '../reply/reply',
    })
  },
  gotoSendUp(){
    wx.scanCode({
      onlyFromCamera: true,
      success:(res)=>{
        console.log(res);
      }
    })
  },
  gotoReply:function(){
    wx.navigateTo({
      url: '../feedback/feedback',
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
    this.setData({
      userInfo:wx.getStorageSync('userInfo'),
    })
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