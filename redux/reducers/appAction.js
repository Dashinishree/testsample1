

export const actionType={
    POSTMESSAGE:'posts'
}

export const appPost=(posts)=>(dispatch)=>{
     //3. console.log("Debug form action",posts)
    return dispatch({
        type:actionType.POSTMESSAGE,
        postsdata:posts
    })
}