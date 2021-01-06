import {Base} from '../../utils/base.js';
class Home extends Base{
  constructor(){
    super();
  }
  _get(options,callBack){
    var obj = {
      url:options.url,
      sCallback:function(res){
        callBack && callBack(res);
      }
    };
    this.requset(obj);
  }
}
export {Home} 