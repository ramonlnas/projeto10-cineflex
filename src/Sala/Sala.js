import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../Filmes/style";
import { Conteiner, Assentos } from "./style";

export default function Sala() {
  const { idSala } = useParams();
  const [assentos, setAssentos] = useState();
  useEffect(() => {
    const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSala}/seats`);

    promise.then((res) => {
      const { seats } = res.data
      console.log(res.data)
      setAssentos(seats)
    });
  }, [idSala]);

  return (
    <>
      <Header>
        <h1>CINEFLEX</h1>
      </Header>
      <Conteiner>
        <p>Selecione o(s) assento(s)</p>
        <Assentos>
            {/* {assentos.map((a) => (
                {seats}
            ))} */}
        </Assentos>
      </Conteiner>
    </>
  );
}
