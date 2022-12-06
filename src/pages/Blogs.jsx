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
          console.log(post)
          
          }
      </div>
 
  )
  
  };
  
  export default Blogs;