import { useState } from "react";
import { Header, Conteiner } from "../Filmes/style";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export default function Filmes() {
  const [imagens, setImagens] = useState([]);

  useEffect(() => {
    const URL = "https://mock-api.driven.com.br/api/v5/cineflex/movies";
    const promise = axios.get(URL);

    promise.then((res) => {
      setImagens(res.data);
    });

  }, []);

  if (imagens === undefined || imagens.length === 0) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <Header>
        <h1>CINEFLEX</h1>
      </Header>
      <Conteiner>
        <p>Selecione o Filme</p>
        {imagens.map((i) => (
          <Link key = {i.id} to={`/sessao/${i.id}`}>
            <img  alt="Imagens" src={i.posterURL} />
          </Link>
        ))}
      </Conteiner>
    </>
  );
}
