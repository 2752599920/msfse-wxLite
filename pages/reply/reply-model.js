import {Base} from '../../utils/base.js';
class Reply extends Base{
  constructor(){
    super();
  }
  _get(options,callBack){
    var obj = {
      url: options.url,
      sCallback:function(res){
        callBack && callBack(res);
      }
    };
    this.requset(obj);
  }
}
export {Reply}