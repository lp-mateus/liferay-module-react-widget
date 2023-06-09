import React from "react";
import { Link } from "react-router-dom";

// Components
import Button from "../components/Button";

// SERVICES
const TEXT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis enim ut tellus elementum sagittis vitae et leo. Viverra mauris in aliquam sem fringilla ut. Tristique senectus et netus et. Tortor pretium viverra suspendisse potenti nullam ac tortor. Felis imperdiet proin fermentum leo vel orci porta non pulvinar. Nibh cras pulvinar mattis nunc sed blandit libero volutpat. Habitasse platea dictumst quisque sagittis purus sit. Pretium vulputate sapien nec sagittis. Est ante in nibh mauris cursus mattis molestie a iaculis.';

const PageHome = () => {
  return (
    <main className="container text-center">
        <h1>Sistema Liferay</h1>
        <h3>Projeto - Widget - React</h3>
        <h5>Author: @MateusLeitePedrosa</h5>
        <p>{TEXT}</p>
        <nav className="container text-center">
          <div className="row align-items-start">
            <div className="col">
              <Link to="/cadastro">
                <Button text="CADASTRAR" />
              </Link>
            </div>
            <div className="col">
              <Link to="/dashboard">
                <Button text="VISUALIZAR" />
              </Link>
            </div>
          </div>
        </nav>
    </main>
  );
};

export default PageHome;
