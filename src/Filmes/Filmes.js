import { useState } from "react";
import { Header, Conteiner } from "../Filmes/style";
import { useEffect } from "react";
import axios from "axios";

export default function Filmes() {
  const [imagens, setImagens] = useState([]);

  useEffect(() => {
    const URL = "https://mock-api.driven.com.br/api/v8/cineflex/movies";
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
          <img key = {i.id} alt="Imagens" src={i.posterURL} />
        ))}
      </Conteiner>
    </>
  );
}
