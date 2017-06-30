/**
 * Created by changjin.zhang on 4/17/2017.
 */
import {injectReducer} from '../../store/mainReducer';
export default (store)=>({
    path:'/war',
    getComponent(nextState,cb){
        require.ensure([],(require)=>{
            const container=require('./containers/container').default;
            const reducer=require('./modules/reducer').default;
            injectReducer(store,{key:'war',reducer});
            cb(null,container);
        },'war');
    }
})