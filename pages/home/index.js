import React from 'react';
import axios from 'axios';

import {useDispatch} from 'react-redux'
import { appPost } from '../../redux/reducers/appAction';
import { useSelector } from 'react-redux';//extract info from reduex or fetcvh info from redux



export default
function index(props){
    const postdata=props.posts;
    //2. console.log("Postdata check",postdata)
    const  dispatch = useDispatch();
    dispatch(appPost(postdata)); //dispatch data to the  appActon.js -> appPost function
    const fetchdatafromRedux =useSelector(state=>state.posts.postsdata)
    //4. console.log("FetchdatafromRedux",fetchdatafromRedux)
    return(
        <div>
      WELCOME DONORS
        {
          fetchdatafromRedux.map(post=>{
              return(
                  <div key={post.id}>
                {/* //       <h1>ID:{post.id} --userID:{post.firstName}</h1>
                //       <p>Title:{post.lastname}</p> */}



           
           <h1 className="text-center">USERS LIST</h1>
          
           <table className="table table-striped">
               
            <thead>
              <tr>
                <td><b> ID</b></td>&nbsp;
                <td><b> FIRSTNAME</b></td>&nbsp;
                <td><b> LASTNAME</b></td>&nbsp;
                <td><b> EMAILID</b></td>&nbsp;
                <td><b>YEAR</b></td>
                <td><b>Address</b></td>
                </tr>

            </thead>
            <tbody>
                   {
                     
                           <tr key={post.id}>
                               <td>{post.id}</td>&nbsp;
                               <td>{post.firstName}</td>&nbsp;
                               <td>{post.lastName}</td>&nbsp;
                               <td>{post.emailId}</td>&nbsp;
                               <td>{post.financial_year}</td>
                               <td>{post.address.city}</td>
                            


                           </tr>

                     
                   }

                </tbody>
            </table>
                      </div>
              )
          })  
        }
    </div>
    )
}


export const getServerSideProps=async()=>{
    const[posts] =await Promise.all([fetchPost1()])
    // 1. console.log("ServerSideProps check data",posts)
    return{
        props:{posts}
    }
}

// function fetchPost(){
//     return axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{
//         return (res.data)?res.data:[]
//     }).catch(err=>{
//         return " Page Not Found !!!"
//     })

// }
const fetchPost1 =()=>{
    return axios.get('http://localhost:1000/sortbyyear').then(res=>{
        return (res.data)?res.data:[]
    }).catch(err=>{
        return " Page Not Found !!!"
    })
}

    