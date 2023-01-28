import { useState, useEffect } from "react";

const useFetch = (url) => {

    // O estado abaixo possui tudo o que aparece na tela. A função está como NULL pois estamos usando o método GET dentro de useEffect() para chamar os dados dentro de data/db.json
    const [data, setData] = useState(null);

    // O estado abaixo é para aparecer a mensagem "Carregando..." enquanto a página utiliza o método GET para mostrar os dados.
    const [isLoading, setIsLoading] = useState(true);

    // O estado abaixo é para fazer com que a mensagem de erro apareça na tela
    const [error, setError] = useState(null);

    // A função abaixo é rodada toda vez que a página for atualizada. É bom para pegar dados (GET/FETCH)
    useEffect(() => {
        fetch(url)
            .then(responseObj => {
                console.log(responseObj)
                if(!responseObj.ok){
                    throw Error('Não foi possível recuperar as informações requisitadas.')
                }
                return responseObj.json();
            })
            .then(data => {
                setData(data);
                // Quando a página conseguir recuperar os dados a função abaixo fará com que a mensagem "Carregando..." desapareça
                setIsLoading(false);
                setError(null);
            })
            .catch(err => {
                setError(err.message);
                setIsLoading(false);
            })
    }, [url]);
    // A array vazia acima impede que entre em um loop infinito, ou seja, a função toda só é lançada uma vez e não toda vez que as informações dentro de setBlogs mudar.

    return {data, isLoading, error}
}

export default useFetch;