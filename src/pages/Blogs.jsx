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


  console.log(post)



  return(

      <div className="filmes">
        {
        post.map((post,key)=>{
          return(

           <div className="filme" key={key}>
            <p>{post.filme}</p>
            <p>{post.ano}</p>
            <p>{post.duração}</p>
            <p>{post.gênero}</p>
            <p>{post.direção}</p>
            <p>{post.roteiro}</p>
            <p>{post.elenco}</p>
            <p>{post.sinopse}</p>
            <img src={post.image}/>
           </div>
          )
        })
          }
      </div>
 
  )
  
  };
  
  export default Blogs;