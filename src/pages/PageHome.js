import React from "react";
import { Link } from "react-router-dom";

// Components
import Button from "../components/Button";

// SERVICES
const TEXT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis enim ut tellus elementum sagittis vitae et leo. Viverra mauris in aliquam sem fringilla ut. Tristique senectus et netus et. Tortor pretium viverra suspendisse potenti nullam ac tortor. Felis imperdiet proin fermentum leo vel orci porta non pulvinar. Nibh cras pulvinar mattis nunc sed blandit libero volutpat. Habitasse platea dictumst quisque sagittis purus sit. Pretium vulputate sapien nec sagittis. Est ante in nibh mauris cursus mattis molestie a iaculis.';

const PageHome = () => {
  return (
    <main>
        <h1>Sistema Liferay</h1>
        <h3>Projeto - Widget - React</h3>
        <p>{TEXT}</p>
        <Link to="/dashboard">
            <Button text="ENTRAR" />
        </Link>
    </main>
  );
};

export default PageHome;
