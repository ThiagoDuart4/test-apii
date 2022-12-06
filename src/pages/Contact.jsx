import React, { useEffect, useState } from "react";
import api from "./services/api";

const Contact = () => {

  const [post,setPost]= useState();
  useEffect(()=>{
    api
    .delete("https://test-api-fawn.vercel.app/filmes/31")
    .then((response)=>{
      setPost(response.data);
    });
    
  },[]);

    return <h1>Contact Me</h1>;
  };
  
  export default Contact;