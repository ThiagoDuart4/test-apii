import React, { useEffect, useState } from "react";
import api from "./services/api";


const Home = () => {

  const [post,setPost]= useState();

  useEffect(() => {
    api
    .post("https://test-api-fawn.vercel.app/filmes",{
     
      "nome": "Resgate",
      "ano": 2022,
      "duração": "1h 56min ",
      "gênero": "Ação, Suspense",
      "direção": "Ação, Suspense",
      "roteiro": "Joe Russo",
      "elenco": "Chris Hemsworth, Rudhraksh Jaiswal, Randeep Hooda",
      "Sinopse": "Em Resgate, Tyler Rake (Chris Hemsworth) um agente especial recebe a difícil missão de libertar um garoto indiano que é mantido refém na cidade de Dhaka. Apesar de estar preparado fisicamente, ele precisa lidar com crises de identidade e com seu emocional fragilizado por problemas do passado para que consiga designar sua tarefa da melhor maneira possível."
    },)
      .then((response) => setPost(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

 

  return (
<>
<div className="filmes">

</div>
</>
  );
};

export default Home;