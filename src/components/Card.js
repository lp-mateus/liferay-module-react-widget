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
    <>
    {data.map((element) => 
    <section className="card text-start">
    <div className="card-body">
        <h5 className="card-title">Usuário</h5>
        <p className="card-text">ID: {element.id}</p>
        <p className="card-text">SITE: {element.website}</p>
        <p className="card-text">NOME: {element.name}</p>
        <p className="card-text">TELEFONE: {element.phone}</p>
        <p className="card-text">EMAIL: {element.email}</p>
    </div>
    </section>
    )}
    </>
  );
};

export default Card;
