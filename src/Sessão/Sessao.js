import { Header, Conteiner } from "../Filmes/style";
import Footer from "./Footer";
import { Info } from "./style";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Sessao() {
  const { idFilme } = useParams();
  const [info, setInfo] = useState([]);
  const [filme, setFilme] = useState({});

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`
    );

    promise.then((res) => {
      const { title, posterURL, days } = res.data;
      setInfo(days);
      setFilme({posterURL, title});
    });
  }, [idFilme]);

  
  console.log(filme)

  return (
    <>
      <Header>
        <h1>CINEFLEX</h1>
      </Header>
      <Conteiner>
        <p>Selecione o horário</p>
      </Conteiner>

      {info.map((i) => {
        const { weekday, date, showtimes, id } = i;
        return (
          <Info key={id}>
            <p>{`${weekday} - ${date}`}</p>
            {showtimes.map((s) => {
              const { name, id } = s;
              return <button key={id}>{name}</button>;
            })}
          </Info>
        );
      })}
      <Footer filme = {filme}/>
    </>
  );
}
