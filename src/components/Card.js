import React from "react";
const URL = 'https://jsonplaceholder.typicode.com/users/';

const Card = () => {
    // react hook useState
    const [data, setData] = React.useState([]);

    // react hook useEffect
    React.useEffect( async () => {
        // api pública
        const request = await fetch(URL);
        const data = await request.json();
        setData(data);
    }, [setData]);
    
    // return
    return (
    <section>
    {data.map((element) => 
        <div>
            <h5>Usuário</h5>
            <p>ID: {element.id}</p>
            <p>SITE: {element.website}</p>
            <p>NOME: {element.name}</p>
            <p>TELEFONE: {element.phone}</p>
            <p>EMAIL: {element.email}</p>
        </div>
    )}
    </section>
  );
};

export default Card;
