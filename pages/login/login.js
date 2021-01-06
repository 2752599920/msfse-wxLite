// pages/login/login.js
import {Login} from './login-model.js';
var login = new Login();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  //login
  login(e){
    wx.login({
      success:(res)=>{
        let {code}=res;
        let {avatarUrl,nickName}=e.detail.userInfo;
        let data={
          code:code,
          nickName:nickName,
          avatarUrl:avatarUrl
        }
        login.getToken(data,(res)=>{
          if(res.code==200){
            wx.setStorageSync('token', res.token);
            wx.setStorageSync('userInfo', e.detail.userInfo);
            //跳转到我的页面
            wx.navigateBack();
          }
        });
      }
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