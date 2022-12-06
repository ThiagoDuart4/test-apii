import React, { useEffect, useState } from "react";
import api from "./services/api";

const Blogs = () => {

  
  const [post,setPosts]= useState([]);
  useEffect(()=>{
    api
    .get("https://test-api-fawn.vercel.app/filmes")
    .then((response)=>{
      setPosts(response.data);
      
    });
    
  },[]);




  return(

      <div className="filmes">
        {
        post.map((post,key)=>{
          return(
           <div className="filme" key={key}>
            <p>{post.filme}</p>
            <p>{post.ano}</p>
          
           </div>
          )
        })
          }
      </div>
 
  )
  
  };
  
  export default Blogs;