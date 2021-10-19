import {actionType} from "./appAction"
const initialPosts={
    postsdata:[]
}

const appReducer=(state=initialPosts,action)=>{
    switch(action.type){
        case actionType.POSTMESSAGE:
             return Object.assign({},state,{
            postsdata:(action.postsdata)?action.postsdata:[]
        });
        default :
        return (state,action);

    }
}
export default appReducer;
