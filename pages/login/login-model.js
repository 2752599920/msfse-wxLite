import {Base} from '../../utils/base.js';
class Login extends Base{
  constructor(){
    super();
  }
  getToken(data,callBack){
    var obj = {
      url:'getToken',
      type:'POST',
      data:{
        ...data,
      },
      sCallback:function(res){
        callBack && callBack(res);
      }
    };
    this.requset(obj);
  }
}
export {Login}