import React, { useState, useEffect } from "react";
import BannerMain from "../../components/BannerMain";
import Carousel from "../../components/Carousel";
import categoriaRepo from "../../repository/categoria";
import MasterPage from "../../components/MasterPage";

function Home() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    categoriaRepo.getAllWithVideos().then((respostaDoServer) => {
      // setTimeout só pra aparecer o gif do loading
      // console.log(`Resposta da api: ${JSON.stringify(respostaDoServer)}`)
      // setTimeout(()=>{setCategorias(respostaDoServer)}, 4*1000);
      setCategorias(respostaDoServer);
    });
  }, []);

  return (
    <MasterPage paddingAll={0}>
      {categorias.length === 0 && <div>Loading...</div>}

      {categorias.length > 0 &&
        categorias.map((categoria, indice) => {
          if (indice === 0) {
            return (
              <div key={categoria.id}>
                <BannerMain
                  key={`bannerId_${categoria.id}`}
                  videoTitle={categoria.videos[0].titulo}
                  url={categoria.videos[0].url}
                  videoDescription={
                    "Mais um champ que com certeza será o melhor boss do jogo!"
                  }
                />
                <Carousel
                  key={`carrouselId_${categoria.id}`}
                  ignoreFirstVideo
                  category={categoria}
                />
              </div>
            );
          }

          return (
            <Carousel
              key={`carrouselId_${categoria.id}`}
              category={categoria}
            />
          );
        })}
    </MasterPage>
  );
}

export default Home;
