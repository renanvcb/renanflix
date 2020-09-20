import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';
// import ButtonLink from './components/ButtonLink';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Renanflix logo" />
      </Link>

      <Button
        as={Link}
        className="ButtonLink"
        to="/cadastro/video"
        style={{ border: '1px solid var(--white)' }}
      >
        Novo Vídeo
      </Button>
    </nav>
  );
}
export default Menu;
