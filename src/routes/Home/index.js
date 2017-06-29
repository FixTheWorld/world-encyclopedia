/**
 * Created by changjin.zhang on 4/17/2017.
 */
import {injectReducer} from '../../store/mainReducer';
export default (store)=>({
    getComponent(nextState,cb){
        require.ensure([],(require)=>{
            const container=require('./containers/container').default;
            const reducer=require('./modules/reducer').default;
            injectReducer(store,{key:'home',reducer});
            cb(null,container);
        },'home');
    }
})