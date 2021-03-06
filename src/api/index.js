/*
 BACKEND PUBLICADO NO SERVIDOR
 https://dashboard.heroku.com/apps
*/
async function GET(caminhoUrlGet){
    return fetch(caminhoUrlGet)
        .then(async (respostaDoServer) =>{
            if(respostaDoServer.ok) {
                const resposta = await respostaDoServer.json();
                return resposta;
            }
            // return null;
            throw new Error('Não foi possível pegar os dados');
        })
        .catch((err)=> {
          throw err;
        });
}

async function CREATE(caminhoUrlPOST, objeto) {
    return fetch(caminhoUrlPOST, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(objeto),
    })
      .then(async (respostaDoServidor) => {
        if (respostaDoServidor.ok) {
          const resposta = await respostaDoServidor.json();
          return resposta;
        }
        // return null;

        throw new Error('Não foi possível cadastrar os dados :(');
      })
      .catch((err) => {
        throw err;
      });
  }

export default {
    GET,
    CREATE
};